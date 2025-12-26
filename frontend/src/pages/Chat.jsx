


import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../utils/axioClient";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Chat({ user }) {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  const fetchChats = async () => {
    try {
      const res = await axiosClient.get("/chats");
      setChats(res.data);
      if (res.data.length > 0) setCurrentChat(res.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async () => {
    if (!input.trim() || !currentChat) return;

    const question = input.trim();
    setInput("");

    const tempMessage = {
      question,
      answer: "loading...",
    };

    const updatedChat = { ...currentChat };
    updatedChat.messages = [...updatedChat.messages, tempMessage];
    setCurrentChat(updatedChat);
    setChats(chats.map((c) => (c._id === updatedChat._id ? updatedChat : c)));

    try {
      setLoading(true);
      const res = await axiosClient.post("/chats/ask", {
        chatId: currentChat._id,
        question,
      });

      const newMessages = updatedChat.messages.map((msg, i) =>
        i === updatedChat.messages.length - 1 ? res.data : msg
      );

      const finalChat = { ...updatedChat, messages: newMessages };

      if (finalChat.title === "New Chat" && finalChat.messages.length === 1) {
        const newTitle =
          res.data.question.split(" ").slice(0, 5).join(" ") +
          (res.data.question.split(" ").length > 5 ? "..." : "");
        finalChat.title = newTitle;
      }

      setCurrentChat(finalChat);
      setChats(chats.map((c) => (c._id === finalChat._id ? finalChat : c)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNewChat = async () => {
    try {
      const res = await axiosClient.post("/chats/new", { title: "New Chat" });
      setChats([...chats, res.data]);
      setCurrentChat(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = async () => {
    try {
      await axiosClient.post("/auth/logout");
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      navigate("/login");
      window.location.reload();
    }
  };

  const formatAIText = (text) =>
    text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/__(.*?)__/g, "$1")
      .replace(/`{1,3}(.*?)`{1,3}/g, "$1");

  return (
    <div className="h-full flex bg-gray-900 text-white">
      {/* Chat Section (50%) */}
      <div className="w-[50%] flex flex-col border-r border-gray-700">
        <div className="flex-1 p-6 space-y-6 overflow-y-auto">
          {currentChat?.messages.map((msg, idx) => (
            <div key={idx}>
              {/* User message */}
              <div className="flex items-start gap-2">
                <span className="text-blue-400 font-bold">🧑 You:</span>
                <div className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white whitespace-pre-wrap break-words w-auto max-w-[85%]">
                  {msg.question}
                </div>
              </div>

              {/* AI message */}
              <div className="flex items-start gap-2 mt-3">
                <span className="text-green-400 font-bold">🤖 AI:</span>
                {msg.answer === "loading..." ? (
                  <div className="ml-2 p-3 bg-gray-700 rounded-lg shadow-md text-white animate-pulse">
                    ⏳ Thinking...
                  </div>
                ) : msg.answer.includes("```") ? (
                  <div className="ml-2 mb-4 w-auto max-w-[85%] rounded-lg overflow-hidden">
                    <SyntaxHighlighter
                      language="javascript"
                      style={materialDark}
                      className="rounded-lg"
                    >
                      {msg.answer.replace(/```/g, "")}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <div className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white whitespace-pre-wrap break-words w-auto max-w-[85%]">
                    {formatAIText(msg.answer)}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-800 flex gap-3 border-t border-gray-700">
          <input
            className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
            placeholder="Ask something..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>

      {/* Sidebar - History (23%) */}
      <div className="w-[23%] bg-gray-800 p-6 flex flex-col relative border-r border-gray-700">
        <button
          onClick={handleNewChat}
          className="mb-6 p-3 w-full bg-blue-600 rounded hover:bg-blue-700 font-semibold"
        >
          + New Chat
        </button>

        <div className="flex-1 space-y-3 overflow-y-auto mb-16">
          {chats.map((chat) => (
            <div
              key={chat._id}
              className={`p-3 rounded cursor-pointer ${
                currentChat?._id === chat._id
                  ? "bg-gray-700 font-semibold"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setCurrentChat(chat)}
              title={chat.title}
            >
              {chat.title}
            </div>
          ))}
        </div>

        <button
          onClick={handleLogout}
          className="absolute bottom-6 left-6 right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

