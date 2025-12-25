// // const { GoogleGenerativeAI } = require("@google/generative-ai");

// // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // async function getAIResponse(prompt) {
// //   try {
// //     // If frontend sends JSON string → parse it
// //     let parsed = typeof prompt === "string" ? JSON.parse(prompt) : prompt;

// //     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

// //     // Expecting frontend to send { messagetext: "Hello Gemini!" }
// //     const result = await model.generateContent(parsed.messagetext);

// //     return result.response.text();
// //   } catch (err) {
// //     console.error("Gemini API Error:", err.message);
// //     return "⚠️ Error: Unable to fetch response from Gemini API.";
// //   }
// // }

// // module.exports = { getAIResponse };
// // // 

const { GoogleGenerativeAI } = require("@google/generative-ai");
// const dotenv = require("dotenv");

// ⚠️ Hardcoded API key (not safe for production)
// const genAI = new GoogleGenerativeAI("AIzaSyD1DiulfL6iyHMbPmtCWRwANknxAka_KdE");
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





// const { GoogleGenerativeAI } = require("@google/generative-ai");
// require("dotenv").config();   // ✅ add this here

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// console.log("key",process.env.GEMINI_API_KEY);

// async function getAIResponse(prompt) {
//   try {
//     let parsed = typeof prompt === "string" ? JSON.parse(prompt) : prompt;
//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
//     const result = await model.generateContent(parsed.messagetext || parsed.question);
//     return result.response.text();
//   } catch (err) {
//     console.error("Gemini API Error:", err.message);
//     return "⚠️ Error : Unable to fetch response from Gemini API.";
//   }
// }

// module.exports = { getAIResponse };
