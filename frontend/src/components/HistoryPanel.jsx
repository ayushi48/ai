import { useState, useEffect } from "react";
import axiosClient from "../utils/axioClient";

export default function HistoryPanel() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const res = await axiosClient.get("/chats");
      setChats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-64 bg-gray-900 text-white p-4">
      <button className="w-full bg-green-600 hover:bg-green-700 p-2 rounded mb-4">
        + New Chat
      </button>

      <h2 className="text-lg font-semibold mb-2">History</h2>
      <div className="space-y-2 overflow-y-auto h-[80%]">
        {chats.map((chat) => (
          <div
            key={chat._id}
            className="p-2 bg-gray-800 rounded hover:bg-gray-700 cursor-pointer"
          >
            {chat.title}
          </div>
        ))}
      </div>
    </div>
  );
}
