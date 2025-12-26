
const User = require("../models/User");
const { getAIResponse } = require("../services/gemini");

// Create new chat
exports.createChat = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const newChat = {
      title: req.body.title,
      messages: [],
    };

    user.chats.push(newChat);
    await user.save();

    res.status(201).json(user.chats[user.chats.length - 1]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Ask question
exports.askQuestion = async (req, res) => {
  try {
    const { chatId, question } = req.body;
    const user = await User.findById(req.user._id);

    const chat = user.chats.id(chatId);
    if (!chat) return res.status(404).json({ message: "Chat not found" });

    // ✅ Use the service function
    const answer = await getAIResponse({ messagetext: question });

    const message = { question, answer };
    chat.messages.push(message);

    await user.save();

    res.json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all chats
exports.getChats = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json(user.chats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single chat
exports.getChatById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const chat = user.chats.id(req.params.chatId);
    if (!chat) return res.status(404).json({ message: "Chat not found" });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete chat
exports.deleteChat = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const chat = user.chats.id(req.params.chatId);
    if (!chat) return res.status(404).json({ message: "Chat not found" });

    chat.remove();
    await user.save();

    res.json({ message: "Chat deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

