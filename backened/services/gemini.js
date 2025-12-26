 

const { GoogleGenerativeAI } = require("@google/generative-ai");

console.log("hi");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("key",process.env.GEMINI_API_KEY);

async function getAIResponse(prompt) {
  try {
    // If frontend sends JSON string → parse it
    let parsed = typeof prompt === "string" ? JSON.parse(prompt) : prompt;

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Expecting frontend to send { messagetext: "Hello Gemini!" }
    const result = await model.generateContent(parsed.messagetext);

    return result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err);
    return "⚠️ Error : Unable to fetch response from Gemini API.";
  }
}

module.exports = { getAIResponse };




