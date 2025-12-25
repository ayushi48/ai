// // // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // // import axiosClient from "../utils/axioClient";

// // // // // // // // // // // export default function Chat() {
// // // // // // // // // // //   const [chats, setChats] = useState([]);
// // // // // // // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // // // // // // //   const [input, setInput] = useState("");

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     fetchChats();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const fetchChats = async () => {
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axiosClient.get("/chats");
// // // // // // // // // // //       setChats(res.data);
// // // // // // // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSend = async () => {
// // // // // // // // // // //     if (!input.trim() || !currentChat) return;
// // // // // // // // // // //     try {
// // // // // // // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // // // // // // //         chatId: currentChat._id,
// // // // // // // // // // //         question: input,
// // // // // // // // // // //       });
// // // // // // // // // // //       const updatedChat = { ...currentChat };
// // // // // // // // // // //       updatedChat.messages.push(res.data);
// // // // // // // // // // //       setCurrentChat(updatedChat);
// // // // // // // // // // //       setInput("");
// // // // // // // // // // //     } catch (err) {
// // // // // // // // // // //       console.error(err);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleNewChat = async () => {
// // // // // // // // // // //     const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // // // // // // //     setChats([...chats, res.data]);
// // // // // // // // // // //     setCurrentChat(res.data);
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col">
// // // // // // // // // // //         <button
// // // // // // // // // // //           onClick={handleNewChat}
// // // // // // // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // // // // // //         >
// // // // // // // // // // //           + New Chat
// // // // // // // // // // //         </button>
// // // // // // // // // // //         <div className="flex-1 space-y-2 overflow-y-auto">
// // // // // // // // // // //           {chats.map((chat) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               key={chat._id}
// // // // // // // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // // // // // // //                 currentChat?._id === chat._id ? "bg-gray-700" : "hover:bg-gray-700"
// // // // // // // // // // //               }`}
// // // // // // // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // // // // // // //             >
// // // // // // // // // // //               {chat.title}
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Chat Area */}
// // // // // // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // // // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // // // // // // //             <div key={idx}>
// // // // // // // // // // //               <div className="font-semibold text-blue-400">You:</div>
// // // // // // // // // // //               <div className="mb-2">{msg.question}</div>
// // // // // // // // // // //               <div className="font-semibold text-green-400">AI:</div>
// // // // // // // // // // //               <div className="mb-4">{msg.answer}</div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // // // // // // //           <input
// // // // // // // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // // // // // // //             placeholder="Ask something..."
// // // // // // // // // // //             value={input}
// // // // // // // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // // // // // // //           />
// // // // // // // // // // //           <button
// // // // // // // // // // //             onClick={handleSend}
// // // // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // // // // // // //           >
// // // // // // // // // // //             Send
// // // // // // // // // // //           </button>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }












// // // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // // import axiosClient from "../utils/axioClient";

// // // // // // // // // // export default function Chat({ user }) {
// // // // // // // // // //   const [chats, setChats] = useState([]);
// // // // // // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // // // // // //   const [input, setInput] = useState("");

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     fetchChats();
// // // // // // // // // //   }, []);

// // // // // // // // // //   const fetchChats = async () => {
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axiosClient.get("/chats");
// // // // // // // // // //       setChats(res.data);
// // // // // // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleSend = async () => {
// // // // // // // // // //     if (!input.trim() || !currentChat) return;
// // // // // // // // // //     try {
// // // // // // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // // // // // //         chatId: currentChat._id,
// // // // // // // // // //         question: input,
// // // // // // // // // //       });
// // // // // // // // // //       const updatedChat = { ...currentChat };
// // // // // // // // // //       updatedChat.messages.push(res.data);
// // // // // // // // // //       setCurrentChat(updatedChat);
// // // // // // // // // //       setInput("");
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error(err);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   const handleNewChat = async () => {
// // // // // // // // // //     const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // // // // // //     setChats([...chats, res.data]);
// // // // // // // // // //     setCurrentChat(res.data);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // // // // // //       {/* Sidebar */}
// // // // // // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col">
// // // // // // // // // //         <button
// // // // // // // // // //           onClick={handleNewChat}
// // // // // // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // // // // //         >
// // // // // // // // // //           + New Chat
// // // // // // // // // //         </button>
// // // // // // // // // //         <div className="flex-1 space-y-2 overflow-y-auto">
// // // // // // // // // //           {chats.map((chat) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={chat._id}
// // // // // // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // // // // // //                 currentChat?._id === chat._id
// // // // // // // // // //                   ? "bg-gray-700"
// // // // // // // // // //                   : "hover:bg-gray-700"
// // // // // // // // // //               }`}
// // // // // // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // // // // // //             >
// // // // // // // // // //               {chat.title}
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Chat Area */}
// // // // // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // // // // // //             <div key={idx}>
// // // // // // // // // //               <div className="font-semibold text-blue-400">You:</div>
// // // // // // // // // //               <div className="mb-2">{msg.question}</div>
// // // // // // // // // //               <div className="font-semibold text-green-400">AI:</div>
// // // // // // // // // //               <div className="mb-4">{msg.answer}</div>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // // // // // //           <input
// // // // // // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // // // // // //             placeholder="Ask something..."
// // // // // // // // // //             value={input}
// // // // // // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // // // // // //           />
// // // // // // // // // //           <button
// // // // // // // // // //             onClick={handleSend}
// // // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // // // // // //           >
// // // // // // // // // //             Send
// // // // // // // // // //           </button>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }



// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import axiosClient from "../utils/axioClient";

// // // // // // // // // export default function Chat({ user }) {
// // // // // // // // //   const [chats, setChats] = useState([]);
// // // // // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // // // // //   const [input, setInput] = useState("");

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     fetchChats();
// // // // // // // // //   }, []);

// // // // // // // // //   const fetchChats = async () => {
// // // // // // // // //     try {
// // // // // // // // //       const res = await axiosClient.get("/chats");
// // // // // // // // //       setChats(res.data);
// // // // // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleSend = async () => {
// // // // // // // // //     if (!input.trim() || !currentChat) return;
// // // // // // // // //     try {
// // // // // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // // // // //         chatId: currentChat._id,
// // // // // // // // //         question: input,
// // // // // // // // //       });
// // // // // // // // //       const updatedChat = { ...currentChat };
// // // // // // // // //       updatedChat.messages.push(res.data);
// // // // // // // // //       setCurrentChat(updatedChat);
// // // // // // // // //       setInput("");
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const handleNewChat = async () => {
// // // // // // // // //     const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // // // // //     setChats([...chats, res.data]);
// // // // // // // // //     setCurrentChat(res.data);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // // // // //       {/* Sidebar */}
// // // // // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col">
// // // // // // // // //         <button
// // // // // // // // //           onClick={handleNewChat}
// // // // // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // // // //         >
// // // // // // // // //           + New Chat
// // // // // // // // //         </button>
// // // // // // // // //         <div className="flex-1 space-y-2 overflow-y-auto">
// // // // // // // // //           {chats.map((chat) => (
// // // // // // // // //             <div
// // // // // // // // //               key={chat._id}
// // // // // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // // // // //                 currentChat?._id === chat._id
// // // // // // // // //                   ? "bg-gray-700"
// // // // // // // // //                   : "hover:bg-gray-700"
// // // // // // // // //               }`}
// // // // // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // // // // //             >
// // // // // // // // //               {chat.title}
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Chat Area */}
// // // // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // // // // //             <div key={idx}>
// // // // // // // // //               <div className="font-semibold text-blue-400">You:</div>
// // // // // // // // //               <div className="mb-2">{msg.question}</div>
// // // // // // // // //               <div className="font-semibold text-green-400">AI:</div>
// // // // // // // // //               <div className="mb-4">{msg.answer}</div>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // // // // //           <input
// // // // // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // // // // //             placeholder="Ask something..."
// // // // // // // // //             value={input}
// // // // // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // // // // //           />
// // // // // // // // //           <button
// // // // // // // // //             onClick={handleSend}
// // // // // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // // // // //           >
// // // // // // // // //             Send
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // // ///////////////aaaaaaaaaaaaaaaaaaa///////////////////////
// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { useNavigate } from "react-router-dom";   // ✅ Import navigate
// // // // // // // // import axiosClient from "../utils/axioClient";

// // // // // // // // export default function Chat({ user }) {
// // // // // // // //   const [chats, setChats] = useState([]);
// // // // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // // // //   const [input, setInput] = useState("");

// // // // // // // //   const navigate = useNavigate(); // ✅ Hook for redirect

// // // // // // // //   useEffect(() => {
// // // // // // // //     fetchChats();
// // // // // // // //   }, []);

// // // // // // // //   const fetchChats = async () => {
// // // // // // // //     try {
// // // // // // // //       const res = await axiosClient.get("/chats");
// // // // // // // //       setChats(res.data);
// // // // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleSend = async () => {
// // // // // // // //     if (!input.trim() || !currentChat) return;
// // // // // // // //     try {
// // // // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // // // //         chatId: currentChat._id,
// // // // // // // //         question: input,
// // // // // // // //       });
// // // // // // // //       const updatedChat = { ...currentChat };
// // // // // // // //       updatedChat.messages.push(res.data);
// // // // // // // //       setCurrentChat(updatedChat);
// // // // // // // //       setInput("");
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error(err);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleNewChat = async () => {
// // // // // // // //     const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // // // //     setChats([...chats, res.data]);
// // // // // // // //     setCurrentChat(res.data);
// // // // // // // //   };

// // // // // // // //   // ✅ Logout handler
// // // // // // // //   // const handleLogout = async () => {
// // // // // // // //   //   try {
// // // // // // // //   //     await axiosClient.post("/auth/logout");
// // // // // // // //   //     navigate("/"); // redirect to login/signup page
// // // // // // // //   //   } catch (err) {
// // // // // // // //   //     console.error("Logout failed", err);
// // // // // // // //   //   }
// // // // // // // //   // };



// // // // // // // //   const handleLogout = async () => {
// // // // // // // //   try {
// // // // // // // //     await axiosClient.post("/auth/logout");
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error("Logout failed", err);
// // // // // // // //   } finally {
// // // // // // // //     // ✅ Clear local user and force redirect
// // // // // // // //     navigate("/login");
// // // // // // // //     window.location.reload(); // optional: ensure fresh state
// // // // // // // //   }
// // // // // // // // };


// // // // // // // //   return (
// // // // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col relative">
// // // // // // // //         <button
// // // // // // // //           onClick={handleNewChat}
// // // // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // // //         >
// // // // // // // //           + New Chat
// // // // // // // //         </button>
// // // // // // // //         <div className="flex-1 space-y-2 overflow-y-auto mb-14">
// // // // // // // //           {chats.map((chat) => (
// // // // // // // //             <div
// // // // // // // //               key={chat._id}
// // // // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // // // //                 currentChat?._id === chat._id
// // // // // // // //                   ? "bg-gray-700"
// // // // // // // //                   : "hover:bg-gray-700"
// // // // // // // //               }`}
// // // // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // // // //             >
// // // // // // // //               {chat.title}
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* ✅ Logout button at bottom */}
// // // // // // // //         <button
// // // // // // // //           onClick={handleLogout}
// // // // // // // //           className="absolute bottom-4 left-4 right-4 p-2 bg-red-600 hover:bg-red-700 rounded"
// // // // // // // //         >
// // // // // // // //           Logout
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Chat Area */}
// // // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // // // //             <div key={idx}>
// // // // // // // //               <div className="font-semibold text-blue-400">You:</div>
// // // // // // // //               <div className="mb-2">{msg.question}</div>
// // // // // // // //               <div className="font-semibold text-green-400">AI:</div>
// // // // // // // //               <div className="mb-4">{msg.answer}</div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // // // //           <input
// // // // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // // // //             placeholder="Ask something..."
// // // // // // // //             value={input}
// // // // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // // // //           />
// // // // // // // //           <button
// // // // // // // //             onClick={handleSend}
// // // // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // // // //           >
// // // // // // // //             Send
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // //////////////////////////skkkkkkkkkkkkkkkkkkkkkkk//////////////////////////////////
// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import axiosClient from "../utils/axioClient";

// // // // // // // export default function Chat({ user }) {
// // // // // // //   const [chats, setChats] = useState([]);
// // // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // // //   const [input, setInput] = useState("");

// // // // // // //   const navigate = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     fetchChats();
// // // // // // //   }, []);

// // // // // // //   const fetchChats = async () => {
// // // // // // //     try {
// // // // // // //       const res = await axiosClient.get("/chats");
// // // // // // //       setChats(res.data);
// // // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSend = async () => {
// // // // // // //     if (!input.trim() || !currentChat) return;
// // // // // // //     try {
// // // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // // //         chatId: currentChat._id,
// // // // // // //         question: input,
// // // // // // //       });

// // // // // // //       // ✅ clone chat and push new message
// // // // // // //       const updatedChat = { ...currentChat };
// // // // // // //       updatedChat.messages = [...updatedChat.messages, res.data];

// // // // // // //       // ✅ update title if first message
// // // // // // //       if (updatedChat.title === "New Chat" && updatedChat.messages.length === 1) {
// // // // // // //         const newTitle =
// // // // // // //           res.data.question.split(" ").slice(0, 5).join(" ") +
// // // // // // //           (res.data.question.split(" ").length > 5 ? "..." : "");
// // // // // // //         updatedChat.title = newTitle;
// // // // // // //       }

// // // // // // //       // ✅ update states (sidebar + current chat)
// // // // // // //       setCurrentChat(updatedChat);
// // // // // // //       setChats(chats.map(c => (c._id === updatedChat._id ? updatedChat : c)));
// // // // // // //       setInput("");
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleNewChat = async () => {
// // // // // // //     try {
// // // // // // //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // // //       setChats([...chats, res.data]);
// // // // // // //       setCurrentChat(res.data);
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleLogout = async () => {
// // // // // // //     try {
// // // // // // //       await axiosClient.post("/auth/logout");
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Logout failed", err);
// // // // // // //     } finally {
// // // // // // //       navigate("/login"); // ✅ redirect
// // // // // // //       window.location.reload(); // ensure fresh state
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // // //       {/* Sidebar */}
// // // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col relative">
// // // // // // //         <button
// // // // // // //           onClick={handleNewChat}
// // // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // // //         >
// // // // // // //           + New Chat
// // // // // // //         </button>

// // // // // // //         <div className="flex-1 space-y-2 overflow-y-auto mb-14">
// // // // // // //           {chats.map((chat) => (
// // // // // // //             <div
// // // // // // //               key={chat._id}
// // // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // // //                 currentChat?._id === chat._id
// // // // // // //                   ? "bg-gray-700"
// // // // // // //                   : "hover:bg-gray-700"
// // // // // // //               }`}
// // // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // // //             >
// // // // // // //               {chat.title}
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* ✅ Logout button at bottom */}
// // // // // // //         <button
// // // // // // //           onClick={handleLogout}
// // // // // // //           className="absolute bottom-4 left-4 right-4 p-2 bg-red-600 hover:bg-red-700 rounded"
// // // // // // //         >
// // // // // // //           Logout
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Chat Area */}
// // // // // // //       <div className="flex-1 flex flex-col">
// // // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // // //             <div key={idx}>
// // // // // // //               <div className="font-semibold text-blue-400">You:</div>
// // // // // // //               <div className="mb-2">{msg.question}</div>
// // // // // // //               <div className="font-semibold text-green-400">AI:</div>
// // // // // // //               <div className="mb-4">{msg.answer}</div>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Input Area */}
// // // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // // //           <input
// // // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // // //             placeholder="Ask something..."
// // // // // // //             value={input}
// // // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // // //           />
// // // // // // //           <button
// // // // // // //             onClick={handleSend}
// // // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // // //           >
// // // // // // //             Send
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // ///////////////////////sasasasa/////////////////////////////////
// // // // // // import { useState, useEffect } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import axiosClient from "../utils/axioClient";
// // // // // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // // // // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // // // // // export default function Chat({ user }) {
// // // // // //   const [chats, setChats] = useState([]);
// // // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // // //   const [input, setInput] = useState("");

// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     fetchChats();
// // // // // //   }, []);

// // // // // //   const fetchChats = async () => {
// // // // // //     try {
// // // // // //       const res = await axiosClient.get("/chats");
// // // // // //       setChats(res.data);
// // // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSend = async () => {
// // // // // //     if (!input.trim() || !currentChat) return;
// // // // // //     try {
// // // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // // //         chatId: currentChat._id,
// // // // // //         question: input,
// // // // // //       });

// // // // // //       const updatedChat = { ...currentChat };
// // // // // //       updatedChat.messages = [...updatedChat.messages, res.data];

// // // // // //       if (updatedChat.title === "New Chat" && updatedChat.messages.length === 1) {
// // // // // //         const newTitle =
// // // // // //           res.data.question.split(" ").slice(0, 5).join(" ") +
// // // // // //           (res.data.question.split(" ").length > 5 ? "..." : "");
// // // // // //         updatedChat.title = newTitle;
// // // // // //       }

// // // // // //       setCurrentChat(updatedChat);
// // // // // //       setChats(chats.map(c => (c._id === updatedChat._id ? updatedChat : c)));
// // // // // //       setInput("");
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleNewChat = async () => {
// // // // // //     try {
// // // // // //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // // //       setChats([...chats, res.data]);
// // // // // //       setCurrentChat(res.data);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleLogout = async () => {
// // // // // //     try {
// // // // // //       await axiosClient.post("/auth/logout");
// // // // // //     } catch (err) {
// // // // // //       console.error("Logout failed", err);
// // // // // //     } finally {
// // // // // //       navigate("/login");
// // // // // //       window.location.reload();
// // // // // //     }
// // // // // //   };

// // // // // //   // Optional: format long AI text with line breaks
// // // // // //   const formatAIText = (text) => text.split(/(.{100})/g).join("\n");

// // // // // //   return (
// // // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // // //       {/* Sidebar */}
// // // // // //       <div className="w-64 bg-gray-800 p-4 flex flex-col relative">
// // // // // //         <button
// // // // // //           onClick={handleNewChat}
// // // // // //           className="mb-4 p-2 bg-blue-600 rounded hover:bg-blue-700"
// // // // // //         >
// // // // // //           + New Chat
// // // // // //         </button>

// // // // // //         <div className="flex-1 space-y-2 overflow-y-auto mb-14">
// // // // // //           {chats.map((chat) => (
// // // // // //             <div
// // // // // //               key={chat._id}
// // // // // //               className={`p-2 rounded cursor-pointer ${
// // // // // //                 currentChat?._id === chat._id ? "bg-gray-700" : "hover:bg-gray-700"
// // // // // //               }`}
// // // // // //               onClick={() => setCurrentChat(chat)}
// // // // // //             >
// // // // // //               {chat.title}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         <button
// // // // // //           onClick={handleLogout}
// // // // // //           className="absolute bottom-4 left-4 right-4 p-2 bg-red-600 hover:bg-red-700 rounded"
// // // // // //         >
// // // // // //           Logout
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Chat Area */}
// // // // // //       <div className="flex-1 flex flex-col">
// // // // // //         <div className="flex-1 p-4 space-y-4 overflow-y-auto">
// // // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // // //             <div key={idx} className="mb-6">
// // // // // //               {/* User message */}
// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// // // // // //               </div>
// // // // // //               <div className="ml-6 mb-2 text-white whitespace-pre-line">{msg.question}</div>

// // // // // //               {/* AI message */}
// // // // // //               <div className="flex items-center gap-2 mt-2">
// // // // // //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// // // // // //               </div>

// // // // // //               {msg.answer.includes("```") ? (
// // // // // //                 <SyntaxHighlighter
// // // // // //                   language="javascript"
// // // // // //                   style={materialDark}
// // // // // //                   className="rounded ml-6 mb-4"
// // // // // //                 >
// // // // // //                   {msg.answer.replace(/```/g, "")}
// // // // // //                 </SyntaxHighlighter>
// // // // // //               ) : (
// // // // // //                 <div className="ml-6 mb-4 text-green-200 whitespace-pre-line">
// // // // // //                   {formatAIText(msg.answer)}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Input Area */}
// // // // // //         <div className="p-4 bg-gray-800 flex gap-2">
// // // // // //           <input
// // // // // //             className="flex-1 p-2 rounded bg-gray-700 focus:outline-none"
// // // // // //             placeholder="Ask something..."
// // // // // //             value={input}
// // // // // //             onChange={(e) => setInput(e.target.value)}
// // // // // //           />
// // // // // //           <button
// // // // // //             onClick={handleSend}
// // // // // //             className="bg-blue-600 hover:bg-blue-700 px-4 rounded"
// // // // // //           >
// // // // // //             Send
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // //////////////////////////sa1sa1sa1sa1///////////////////////
// // // // // import { useState, useEffect } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import axiosClient from "../utils/axioClient";
// // // // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // // // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // // // // export default function Chat({ user }) {
// // // // //   const [chats, setChats] = useState([]);
// // // // //   const [currentChat, setCurrentChat] = useState(null);
// // // // //   const [input, setInput] = useState("");

// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     fetchChats();
// // // // //   }, []);

// // // // //   const fetchChats = async () => {
// // // // //     try {
// // // // //       const res = await axiosClient.get("/chats");
// // // // //       setChats(res.data);
// // // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const handleSend = async () => {
// // // // //     if (!input.trim() || !currentChat) return;
// // // // //     try {
// // // // //       const res = await axiosClient.post("/chats/ask", {
// // // // //         chatId: currentChat._id,
// // // // //         question: input,
// // // // //       });

// // // // //       const updatedChat = { ...currentChat };
// // // // //       updatedChat.messages = [...updatedChat.messages, res.data];

// // // // //       if (updatedChat.title === "New Chat" && updatedChat.messages.length === 1) {
// // // // //         const newTitle =
// // // // //           res.data.question.split(" ").slice(0, 5).join(" ") +
// // // // //           (res.data.question.split(" ").length > 5 ? "..." : "");
// // // // //         updatedChat.title = newTitle;
// // // // //       }

// // // // //       setCurrentChat(updatedChat);
// // // // //       setChats(chats.map(c => (c._id === updatedChat._id ? updatedChat : c)));
// // // // //       setInput("");
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const handleNewChat = async () => {
// // // // //     try {
// // // // //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // // //       setChats([...chats, res.data]);
// // // // //       setCurrentChat(res.data);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   const handleLogout = async () => {
// // // // //     try {
// // // // //       await axiosClient.post("/auth/logout");
// // // // //     } catch (err) {
// // // // //       console.error("Logout failed", err);
// // // // //     } finally {
// // // // //       navigate("/login");
// // // // //       window.location.reload();
// // // // //     }
// // // // //   };

// // // // //   const formatAIText = (text) => text.split(/(.{100})/g).join("\n");

// // // // //   return (
// // // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // // //       {/* Sidebar - History */}
// // // // //       <div className="w-1/4 bg-gray-800 p-6 flex flex-col relative">
// // // // //         <button
// // // // //           onClick={handleNewChat}
// // // // //           className="mb-6 p-3 bg-blue-600 rounded hover:bg-blue-700 font-semibold"
// // // // //         >
// // // // //           + New Chat
// // // // //         </button>

// // // // //         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
// // // // //           {chats.map((chat) => (
// // // // //             <div
// // // // //               key={chat._id}
// // // // //               className={`p-3 rounded cursor-pointer break-words ${
// // // // //                 currentChat?._id === chat._id
// // // // //                   ? "bg-gray-700 font-semibold"
// // // // //                   : "hover:bg-gray-700"
// // // // //               }`}
// // // // //               onClick={() => setCurrentChat(chat)}
// // // // //               title={chat.title}
// // // // //             >
// // // // //               {chat.title}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={handleLogout}
// // // // //           className="absolute bottom-6 left-6 right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
// // // // //         >
// // // // //           Logout
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Chat Area */}
// // // // //       <div className="w-3/4 flex flex-col">
// // // // //         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
// // // // //           {currentChat?.messages.map((msg, idx) => (
// // // // //             <div key={idx}>
// // // // //               {/* User message */}
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// // // // //               </div>
// // // // //               <div className="ml-6 mb-3 text-white whitespace-pre-line">{msg.question}</div>

// // // // //               {/* AI message */}
// // // // //               <div className="flex items-center gap-2 mt-2">
// // // // //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// // // // //               </div>

// // // // //               {msg.answer.includes("```") ? (
// // // // //                 <SyntaxHighlighter
// // // // //                   language="javascript"
// // // // //                   style={materialDark}
// // // // //                   className="rounded ml-6 mb-4"
// // // // //                 >
// // // // //                   {msg.answer.replace(/```/g, "")}
// // // // //                 </SyntaxHighlighter>
// // // // //               ) : (
// // // // //                 <div className="ml-6 mb-4 text-green-200 whitespace-pre-line">
// // // // //                   {formatAIText(msg.answer)}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Input Area */}
// // // // //         <div className="p-4 bg-gray-800 flex gap-3">
// // // // //           <input
// // // // //             className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
// // // // //             placeholder="Ask something..."
// // // // //             value={input}
// // // // //             onChange={(e) => setInput(e.target.value)}
// // // // //           />
// // // // //           <button
// // // // //             onClick={handleSend}
// // // // //             className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
// // // // //           >
// // // // //             Send
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // ///////////////////sa2sa2sa2sa2////////////////////
// // // // import { useState, useEffect, useRef } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import axiosClient from "../utils/axioClient";
// // // // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // // // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // // // export default function Chat({ user }) {
// // // //   const [chats, setChats] = useState([]);
// // // //   const [currentChat, setCurrentChat] = useState(null);
// // // //   const [input, setInput] = useState("");
// // // //   const chatEndRef = useRef(null);

// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     fetchChats();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     scrollToBottom();
// // // //   }, [currentChat]);

// // // //   const fetchChats = async () => {
// // // //     try {
// // // //       const res = await axiosClient.get("/chats");
// // // //       setChats(res.data);
// // // //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const scrollToBottom = () => {
// // // //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// // // //   };

// // // //   const handleSend = async () => {
// // // //     if (!input.trim() || !currentChat) return;
// // // //     try {
// // // //       const res = await axiosClient.post("/chats/ask", {
// // // //         chatId: currentChat._id,
// // // //         question: input,
// // // //       });

// // // //       const updatedChat = { ...currentChat };
// // // //       updatedChat.messages = [...updatedChat.messages, res.data];

// // // //       if (updatedChat.title === "New Chat" && updatedChat.messages.length === 1) {
// // // //         const newTitle =
// // // //           res.data.question.split(" ").slice(0, 5).join(" ") +
// // // //           (res.data.question.split(" ").length > 5 ? "..." : "");
// // // //         updatedChat.title = newTitle;
// // // //       }

// // // //       setCurrentChat(updatedChat);
// // // //       setChats(chats.map(c => (c._id === updatedChat._id ? updatedChat : c)));
// // // //       setInput("");
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleNewChat = async () => {
// // // //     try {
// // // //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// // // //       setChats([...chats, res.data]);
// // // //       setCurrentChat(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleLogout = async () => {
// // // //     try {
// // // //       await axiosClient.post("/auth/logout");
// // // //     } catch (err) {
// // // //       console.error("Logout failed", err);
// // // //     } finally {
// // // //       navigate("/login");
// // // //       window.location.reload();
// // // //     }
// // // //   };

// // // //   const formatAIText = (text) =>
// // // //     text
// // // //       .replace(/\*\*(.*?)\*\*/g, "$1") // remove bold
// // // //       .replace(/\*(.*?)\*/g, "$1") // remove italics
// // // //       .replace(/__(.*?)__/g, "$1") // remove underline
// // // //       .replace(/`{1,3}(.*?)`{1,3}/g, "$1"); // remove inline code backticks

// // // //   return (
// // // //     <div className="h-screen flex bg-gray-900 text-white">
// // // //       {/* Sidebar - History */}
// // // //       <div className="w-1/4 bg-gray-800 p-6 flex flex-col relative">
// // // //         <button
// // // //           onClick={handleNewChat}
// // // //           className="mb-6 p-3 bg-blue-600 rounded hover:bg-blue-700 font-semibold"
// // // //         >
// // // //           + New Chat
// // // //         </button>

// // // //         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
// // // //           {chats.map((chat) => (
// // // //             <div
// // // //               key={chat._id}
// // // //               className={`p-3 rounded cursor-pointer break-words ${
// // // //                 currentChat?._id === chat._id
// // // //                   ? "bg-gray-700 font-semibold"
// // // //                   : "hover:bg-gray-700"
// // // //               }`}
// // // //               onClick={() => setCurrentChat(chat)}
// // // //               title={chat.title}
// // // //             >
// // // //               {chat.title}
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         <button
// // // //           onClick={handleLogout}
// // // //           className="absolute bottom-6 left-6 right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
// // // //         >
// // // //           Logout
// // // //         </button>
// // // //       </div>

// // // //       {/* Chat Area */}
// // // //       <div className="w-3/4 flex flex-col">
// // // //         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
// // // //           {currentChat?.messages.map((msg, idx) => (
// // // //             <div key={idx}>
// // // //               {/* User message */}
// // // //               <div className="flex items-start gap-2">
// // // //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// // // //                 <div className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white whitespace-pre-line">
// // // //                   {msg.question}
// // // //                 </div>
// // // //               </div>

// // // //               {/* AI message */}
// // // //               <div className="flex items-start gap-2 mt-3">
// // // //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// // // //                 {msg.answer.includes("```") ? (
// // // //                   <SyntaxHighlighter
// // // //                     language="javascript"
// // // //                     style={materialDark}
// // // //                     className="rounded ml-2 mb-4"
// // // //                   >
// // // //                     {msg.answer.replace(/```/g, "")}
// // // //                   </SyntaxHighlighter>
// // // //                 ) : (
// // // //                   <div className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white whitespace-pre-line">
// // // //                     {formatAIText(msg.answer)}
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //           <div ref={chatEndRef} />
// // // //         </div>

// // // //         {/* Input Area */}
// // // //         <div className="p-4 bg-gray-800 flex gap-3">
// // // //           <input
// // // //             className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
// // // //             placeholder="Ask something..."
// // // //             value={input}
// // // //             onChange={(e) => setInput(e.target.value)}
// // // //           />
// // // //           <button
// // // //             onClick={handleSend}
// // // //             className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
// // // //           >
// // // //             Send
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // ////////sa3sa3sa3sa3////////////////////
// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axiosClient from "../utils/axioClient";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // export default function Chat({ user }) {
// //   const [chats, setChats] = useState([]);
// //   const [currentChat, setCurrentChat] = useState(null);
// //   const [input, setInput] = useState("");
// //   const chatEndRef = useRef(null);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [currentChat]);

// //   const fetchChats = async () => {
// //     try {
// //       const res = await axiosClient.get("/chats");
// //       setChats(res.data);
// //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const scrollToBottom = () => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const handleSend = async () => {
// //     if (!input.trim() || !currentChat) return;
// //     try {
// //       const res = await axiosClient.post("/chats/ask", {
// //         chatId: currentChat._id,
// //         question: input,
// //       });

// //       const updatedChat = { ...currentChat };
// //       updatedChat.messages = [...updatedChat.messages, res.data];

// //       if (updatedChat.title === "New Chat" && updatedChat.messages.length === 1) {
// //         const newTitle =
// //           res.data.question.split(" ").slice(0, 5).join(" ") +
// //           (res.data.question.split(" ").length > 5 ? "..." : "");
// //         updatedChat.title = newTitle;
// //       }

// //       setCurrentChat(updatedChat);
// //       setChats(chats.map(c => (c._id === updatedChat._id ? updatedChat : c)));
// //       setInput("");
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleNewChat = async () => {
// //     try {
// //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// //       setChats([...chats, res.data]);
// //       setCurrentChat(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await axiosClient.post("/auth/logout");
// //     } catch (err) {
// //       console.error("Logout failed", err);
// //     } finally {
// //       navigate("/login");
// //       window.location.reload();
// //     }
// //   };

// //   const formatAIText = (text) =>
// //     text
// //       .replace(/\*\*(.*?)\*\*/g, "$1")
// //       .replace(/\*(.*?)\*/g, "$1")
// //       .replace(/__(.*?)__/g, "$1")
// //       .replace(/`{1,3}(.*?)`{1,3}/g, "$1");

// //   return (
// //     <div className="h-screen flex bg-gray-900 text-white">
   

// //       {/* Chat Area */}
// //       <div className="w-3/4 flex flex-col">
// //         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
// //           {currentChat?.messages.map((msg, idx) => (
// //             <div key={idx}>
// //               {/* User message */}
// //               <div className="flex items-start gap-2">
// //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// //                 <div className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white
// //                                 whitespace-pre-wrap break-words break-all max-w-full">
// //                   {msg.question}
// //                 </div>
// //               </div>

// //               {/* AI message */}
// //               <div className="flex items-start gap-2 mt-3">
// //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// //                 {msg.answer.includes("```") ? (
// //                   <div className="ml-2 mb-4 max-w-full rounded-lg overflow-hidden break-words">
// //                     <SyntaxHighlighter
// //                       language="javascript"
// //                       style={materialDark}
// //                       className="rounded-lg overflow-x-hidden break-words"
// //                     >
// //                       {msg.answer.replace(/```/g, "")}
// //                     </SyntaxHighlighter>
// //                   </div>
// //                 ) : (
// //                   <div className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white
// //                                   whitespace-pre-wrap break-words break-all max-w-full">
// //                     {formatAIText(msg.answer)}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //           <div ref={chatEndRef} />
// //         </div>

// //         {/* Input Area */}
// //         <div className="p-4 bg-gray-800 flex gap-3">
// //           <input
// //             className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
// //             placeholder="Ask something..."
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //           />
// //           <button
// //             onClick={handleSend}
// //             className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
// //           >
// //             Send
// //           </button>
// //         </div>
// //       </div>


// //    {/* Sidebar - History */}
// //       <div className="w-1/4 bg-gray-800 p-6 flex flex-col relative">
// //         <button
// //           onClick={handleNewChat}
// //           className="mb-6 p-3 bg-blue-600 rounded hover:bg-blue-700 font-semibold"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
// //           {chats.map((chat) => (
// //             <div
// //               key={chat._id}
// //               className={`p-3 rounded cursor-pointer break-words max-w-full ${
// //                 currentChat?._id === chat._id
// //                   ? "bg-gray-700 font-semibold"
// //                   : "hover:bg-gray-700"
// //               }`}
// //               onClick={() => setCurrentChat(chat)}
// //               title={chat.title}
// //             >
// //               {chat.title}
// //             </div>
// //           ))}
// //         </div>

// //         <button
// //           onClick={handleLogout}
// //           className="absolute bottom-6 left-6 right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
// //         >
// //           Logout
// //         </button>
// //       </div>



// //     </div>
// //   );
// // }
// // // //sa2 and sa3 both working fine 





// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axiosClient from "../utils/axioClient";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // export default function Chat({ user }) {
// //   const [chats, setChats] = useState([]);
// //   const [currentChat, setCurrentChat] = useState(null);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const chatEndRef = useRef(null);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [currentChat]);

// //   const fetchChats = async () => {
// //     try {
// //       const res = await axiosClient.get("/chats");
// //       setChats(res.data);
// //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const scrollToBottom = () => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const handleSend = async () => {
// //     if (!input.trim() || !currentChat) return;

// //     const question = input.trim();
// //     setInput("");

// //     // Add user message + temporary AI placeholder immediately
// //     const tempMessage = {
// //       question,
// //       answer: "loading...",
// //     };

// //     const updatedChat = { ...currentChat };
// //     updatedChat.messages = [...updatedChat.messages, tempMessage];
// //     setCurrentChat(updatedChat);
// //     setChats(chats.map((c) => (c._id === updatedChat._id ? updatedChat : c)));

// //     try {
// //       setLoading(true);
// //       const res = await axiosClient.post("/chats/ask", {
// //         chatId: currentChat._id,
// //         question,
// //       });

// //       // Replace last "loading..." with real AI answer
// //       const newMessages = updatedChat.messages.map((msg, i) =>
// //         i === updatedChat.messages.length - 1 ? res.data : msg
// //       );

// //       const finalChat = { ...updatedChat, messages: newMessages };

// //       // Update title if it's the first message
// //       if (finalChat.title === "New Chat" && finalChat.messages.length === 1) {
// //         const newTitle =
// //           res.data.question.split(" ").slice(0, 5).join(" ") +
// //           (res.data.question.split(" ").length > 5 ? "..." : "");
// //         finalChat.title = newTitle;
// //       }

// //       setCurrentChat(finalChat);
// //       setChats(chats.map((c) => (c._id === finalChat._id ? finalChat : c)));
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleNewChat = async () => {
// //     try {
// //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// //       setChats([...chats, res.data]);
// //       setCurrentChat(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await axiosClient.post("/auth/logout");
// //     } catch (err) {
// //       console.error("Logout failed", err);
// //     } finally {
// //       navigate("/login");
// //       window.location.reload();
// //     }
// //   };

// //   const formatAIText = (text) =>
// //     text
// //       .replace(/\*\*(.*?)\*\*/g, "$1")
// //       .replace(/\*(.*?)\*/g, "$1")
// //       .replace(/__(.*?)__/g, "$1")
// //       .replace(/`{1,3}(.*?)`{1,3}/g, "$1");

// //   return (
// //     <div className="h-screen flex bg-gray-900 text-white">
// //       {/* Chat Area */}
// //       <div className="w-3/4 flex flex-col">
// //         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
// //           {currentChat?.messages.map((msg, idx) => (
// //             <div key={idx}>
// //               {/* User message */}
// //               <div className="flex items-start gap-2">
// //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// //                 <div
// //                   className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white
// //                                 whitespace-pre-wrap break-words break-all max-w-full"
// //                 >
// //                   {msg.question}
// //                 </div>
// //               </div>

// //               {/* AI message */}
// //               <div className="flex items-start gap-2 mt-3">
// //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// //                 {msg.answer === "loading..." ? (
// //                   <div className="ml-2 p-3 bg-gray-700 rounded-lg shadow-md text-white animate-pulse">
// //                     ⏳ Thinking...
// //                   </div>
// //                 ) : msg.answer.includes("```") ? (
// //                   <div className="ml-2 mb-4 max-w-full rounded-lg overflow-hidden break-words">
// //                     <SyntaxHighlighter
// //                       language="javascript"
// //                       style={materialDark}
// //                       className="rounded-lg overflow-x-hidden break-words"
// //                     >
// //                       {msg.answer.replace(/```/g, "")}
// //                     </SyntaxHighlighter>
// //                   </div>
// //                 ) : (
// //                   <div
// //                     className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white
// //                                   whitespace-pre-wrap break-words break-all max-w-full"
// //                   >
// //                     {formatAIText(msg.answer)}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //           <div ref={chatEndRef} />
// //         </div>

// //         {/* Input Area */}
// //         <div className="p-4 bg-gray-800 flex gap-3">
// //           <input
// //             className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
// //             placeholder="Ask something..."
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //           />
// //           <button
// //             onClick={handleSend}
// //             className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
// //           >
// //             {loading ? "..." : "Send"}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Sidebar - History */}
// //       <div className="w-[30%]  bg-gray-800 p-6 flex flex-col relative">
// //         <button
// //           onClick={handleNewChat}
// //           className="mb-6 p-3 w-[30%] bg-blue-600 rounded hover:bg-blue-700 font-semibold"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
// //           {chats.map((chat) => (
// //             <div
// //               key={chat._id}
// //               className={`p-3 rounded cursor-pointer break-words w-[20%] ${
// //                 currentChat?._id === chat._id
// //                   ? "bg-gray-700 font-semibold"
// //                   : "hover:bg-gray-700"
// //               }`}
// //               onClick={() => setCurrentChat(chat)}
// //               title={chat.title}
// //             >
// //               {chat.title}
// //             </div>
// //           ))}
// //         </div>

// //         <button
// //           onClick={handleLogout}
// //           className="absolute bottom-6 left-6 w-[30%] right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// //////////////////finalllllllllllllllll///////////////////////////


// // import { useState, useEffect, useRef } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axiosClient from "../utils/axioClient";
// // import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// // import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// // export default function Chat({ user }) {
// //   const [chats, setChats] = useState([]);
// //   const [currentChat, setCurrentChat] = useState(null);
// //   const [input, setInput] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const chatEndRef = useRef(null);

// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     fetchChats();
// //   }, []);

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [currentChat]);

// //   const fetchChats = async () => {
// //     try {
// //       const res = await axiosClient.get("/chats");
// //       setChats(res.data);
// //       if (res.data.length > 0) setCurrentChat(res.data[0]);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const scrollToBottom = () => {
// //     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
// //   };

// //   const handleSend = async () => {
// //     if (!input.trim() || !currentChat) return;

// //     const question = input.trim();
// //     setInput("");

// //     // Add user message + temporary AI placeholder immediately
// //     const tempMessage = {
// //       question,
// //       answer: "loading...",
// //     };

// //     const updatedChat = { ...currentChat };
// //     updatedChat.messages = [...updatedChat.messages, tempMessage];
// //     setCurrentChat(updatedChat);
// //     setChats(chats.map((c) => (c._id === updatedChat._id ? updatedChat : c)));

// //     try {
// //       setLoading(true);
// //       const res = await axiosClient.post("/chats/ask", {
// //         chatId: currentChat._id,
// //         question,
// //       });

// //       // Replace last "loading..." with real AI answer
// //       const newMessages = updatedChat.messages.map((msg, i) =>
// //         i === updatedChat.messages.length - 1 ? res.data : msg
// //       );

// //       const finalChat = { ...updatedChat, messages: newMessages };

// //       // Update title if it's the first message
// //       if (finalChat.title === "New Chat" && finalChat.messages.length === 1) {
// //         const newTitle =
// //           res.data.question.split(" ").slice(0, 5).join(" ") +
// //           (res.data.question.split(" ").length > 5 ? "..." : "");
// //         finalChat.title = newTitle;
// //       }

// //       setCurrentChat(finalChat);
// //       setChats(chats.map((c) => (c._id === finalChat._id ? finalChat : c)));
// //     } catch (err) {
// //       console.error(err);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleNewChat = async () => {
// //     try {
// //       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
// //       setChats([...chats, res.data]);
// //       setCurrentChat(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       await axiosClient.post("/auth/logout");
// //     } catch (err) {
// //       console.error("Logout failed", err);
// //     } finally {
// //       navigate("/login");
// //       window.location.reload();
// //     }
// //   };

// //   const formatAIText = (text) =>
// //     text
// //       .replace(/\*\*(.*?)\*\*/g, "$1")
// //       .replace(/\*(.*?)\*/g, "$1")
// //       .replace(/__(.*?)__/g, "$1")
// //       .replace(/`{1,3}(.*?)`{1,3}/g, "$1");

// //   return (
// //     <div className="h-full flex bg-gray-900 text-white">
// //       {/* Chat Area */}
// //       <div className="w-3/4 flex flex-col">
// //         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
// //           {currentChat?.messages.map((msg, idx) => (
// //             <div key={idx}>
// //               {/* User message */}
// //               <div className="flex items-start gap-2">
// //                 <span className="text-blue-400 font-bold">🧑 You:</span>
// //                 <div
// //                   className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white
// //                                 whitespace-pre-wrap break-words break-all w-full"
// //                 >
// //                   {msg.question}
// //                 </div>
// //               </div>

// //               {/* AI message */}
// //               <div className="flex items-start gap-2 mt-3">
// //                 <span className="text-green-400 font-bold">🤖 AI:</span>
// //                 {msg.answer === "loading..." ? (
// //                   <div className="ml-2 p-3 bg-gray-700 rounded-lg shadow-md text-white animate-pulse">
// //                     ⏳ Thinking...
// //                   </div>
// //                 ) : msg.answer.includes("```") ? (
// //                   <div className="ml-2 mb-4 w-full rounded-lg overflow-hidden break-words">
// //                     <SyntaxHighlighter
// //                       language="javascript"
// //                       style={materialDark}
// //                       className="rounded-lg overflow-x-hidden break-words"
// //                     >
// //                       {msg.answer.replace(/```/g, "")}
// //                     </SyntaxHighlighter>
// //                   </div>
// //                 ) : (
// //                   <div
// //                     className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white
// //                                   whitespace-pre-wrap break-words break-all w-[50%]"
// //                   >
// //                     {formatAIText(msg.answer)}
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //           <div ref={chatEndRef} />
// //         </div>

// //         {/* Input Area */}
// //         <div className="p-4 bg-gray-800 flex gap-3">
// //           <input
// //             className="flex-1 p-3 rounded bg-gray-700 focus:outline-none"
// //             placeholder="Ask something..."
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //           />
// //           <button
// //             onClick={handleSend}
// //             className="bg-blue-600 hover:bg-blue-700 px-6 rounded font-semibold"
// //           >
// //             {loading ? "..." : "Send"}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Sidebar - History */}
// //       <div className="w-[30%]  bg-gray-800 p-6 flex flex-col relative">
// //         <button
// //           onClick={handleNewChat}
// //           className="mb-6 p-3 w-[30%] bg-blue-600 rounded hover:bg-blue-700 font-semibold"
// //         >
// //           + New Chat
// //         </button>

// //         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
// //           {chats.map((chat) => (
// //             <div
// //               key={chat._id}
// //               className={`p-3 rounded cursor-pointer break-words w-[20%] ${
// //                 currentChat?._id === chat._id
// //                   ? "bg-gray-700 font-semibold"
// //                   : "hover:bg-gray-700"
// //               }`}
// //               onClick={() => setCurrentChat(chat)}
// //               title={chat.title}
// //             >
// //               {chat.title}
// //             </div>
// //           ))}
// //         </div>

// //         <button
// //           onClick={handleLogout}
// //           className="absolute bottom-6 left-6 w-[30%] right-6 p-3 bg-red-600 hover:bg-red-700 rounded font-semibold"
// //         >
// //           Logout
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }




// ////////////////////////////////
// import { useState, useEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axiosClient from "../utils/axioClient";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// export default function Chat({ user }) {
//   const [chats, setChats] = useState([]);
//   const [currentChat, setCurrentChat] = useState(null);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const chatEndRef = useRef(null);

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [currentChat]);

//   const fetchChats = async () => {
//     try {
//       const res = await axiosClient.get("/chats");
//       setChats(res.data);
//       if (res.data.length > 0) setCurrentChat(res.data[0]);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const scrollToBottom = () => {
//     chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleSend = async () => {
//     if (!input.trim() || !currentChat) return;

//     const question = input.trim();
//     setInput("");

//     const tempMessage = { question, answer: "loading..." };
//     const updatedChat = { ...currentChat };
//     updatedChat.messages = [...updatedChat.messages, tempMessage];
//     setCurrentChat(updatedChat);
//     setChats(chats.map((c) => (c._id === updatedChat._id ? updatedChat : c)));

//     try {
//       setLoading(true);
//       const res = await axiosClient.post("/chats/ask", {
//         chatId: currentChat._id,
//         question,
//       });

//       const newMessages = updatedChat.messages.map((msg, i) =>
//         i === updatedChat.messages.length - 1 ? res.data : msg
//       );

//       const finalChat = { ...updatedChat, messages: newMessages };

//       if (finalChat.title === "New Chat" && finalChat.messages.length === 1) {
//         const newTitle =
//           res.data.question.split(" ").slice(0, 5).join(" ") +
//           (res.data.question.split(" ").length > 5 ? "..." : "");
//         finalChat.title = newTitle;
//       }

//       setCurrentChat(finalChat);
//       setChats(chats.map((c) => (c._id === finalChat._id ? finalChat : c)));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleNewChat = async () => {
//     try {
//       const res = await axiosClient.post("/chats/new", { title: "New Chat" });
//       setChats([...chats, res.data]);
//       setCurrentChat(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       await axiosClient.post("/auth/logout");
//     } catch (err) {
//       console.error("Logout failed", err);
//     } finally {
//       navigate("/login");
//       window.location.reload();
//     }
//   };

//   const formatAIText = (text) =>
//     text
//       .replace(/\*\*(.*?)\*\*/g, "$1")
//       .replace(/\*(.*?)\*/g, "$1")
//       .replace(/__(.*?)__/g, "$1")
//       .replace(/`{1,3}(.*?)`{1,3}/g, "$1");

//   return (
//     <div className="h-full flex bg-gray-900 text-white overflow-hidden">
//       {/* Left Navbar */}
//       <div className="w-[23%] bg-gray-800 flex flex-col p-6 border-r border-gray-700">
//         <h1 className="text-2xl font-bold mb-8 text-center text-blue-400">
//           🚀 MyAI
//         </h1>
//         <nav className="space-y-3">
//           <Link
//             to="/chat"
//             className="block p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
//           >
//             💬 ChatGPT
//           </Link>
//           <Link
//             to="/img2pdf"
//             className="block p-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
//           >
//             🖼️ Img to PDF
//           </Link>
//         </nav>
//       </div>

//       {/* Middle Chat Section */}
//       <div className="w-[50%] flex flex-col border-r border-gray-700">
//         <div className="flex-1 p-6 space-y-6 overflow-y-auto">
//           {currentChat?.messages.map((msg, idx) => (
//             <div key={idx}>
//               {/* User */}
//               <div className="flex items-start gap-2">
//                 <span className="text-blue-400 font-bold">🧑 You:</span>
//                 <div className="ml-2 p-3 bg-blue-900 rounded-lg shadow-sm text-white whitespace-pre-wrap break-words w-auto max-w-[80%]">
//                   {msg.question}
//                 </div>
//               </div>

//               {/* AI */}
//               <div className="flex items-start gap-2 mt-3">
//                 <span className="text-green-400 font-bold">🤖 AI:</span>
//                 {msg.answer === "loading..." ? (
//                   <div className="ml-2 p-3 bg-gray-700 rounded-lg shadow-md text-white animate-pulse">
//                     ⏳ Thinking...
//                   </div>
//                 ) : msg.answer.includes("```") ? (
//                   <div className="ml-2 mb-4 w-auto max-w-[90%] rounded-lg overflow-hidden">
//                     <SyntaxHighlighter
//                       language="javascript"
//                       style={materialDark}
//                       className="rounded-lg overflow-x-auto"
//                     >
//                       {msg.answer.replace(/```/g, "")}
//                     </SyntaxHighlighter>
//                   </div>
//                 ) : (
//                   <div className="ml-2 mb-4 p-3 bg-gray-700 rounded-lg shadow-md text-white whitespace-pre-wrap break-words w-auto max-w-[80%]">
//                     {formatAIText(msg.answer)}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//           <div ref={chatEndRef} />
//         </div>

//         {/* Input */}
//         <div className="p-4 bg-gray-800 flex gap-3">
//           <input
//             className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none"
//             placeholder="Ask something..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button
//             onClick={handleSend}
//             className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition"
//           >
//             {loading ? "..." : "Send"}
//           </button>
//         </div>
//       </div>

//       {/* Right History */}
//       <div className="w-[23%] bg-gray-800 p-6 flex flex-col relative">
//         <button
//           onClick={handleNewChat}
//           className="mb-6 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 font-semibold transition"
//         >
//           + New Chat
//         </button>

//         <div className="flex-1 space-y-3 overflow-y-auto mb-16">
//           {chats.map((chat) => (
//             <div
//               key={chat._id}
//               className={`p-3 rounded-lg cursor-pointer truncate ${
//                 currentChat?._id === chat._id
//                   ? "bg-gray-700 font-semibold"
//                   : "hover:bg-gray-700"
//               }`}
//               onClick={() => setCurrentChat(chat)}
//               title={chat.title}
//             >
//               {chat.title}
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={handleLogout}
//           className="absolute bottom-6 left-6 right-6 p-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }




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
