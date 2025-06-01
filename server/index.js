import express from "express";
import cors from "cors";
import { Groq } from "groq-sdk";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Groq API Key
const groq = new Groq({
  apiKey: "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", // ⚠️ Keep this secret in production
});

// Fixed context for assistant
const shopIntro = `
You are Selvi, the AI assistant for Palani Kumaran Vilas, a famous and trusted local shop in Palani that specializes in viboothi, religious powders, and spiritual items.

When asked about "Kumarran Vilas" or "Palani Kumaran Vilas," always respond crisply and clearly with information such as:
- We provide high-quality viboothi and other pooja items.
- We are located in Palani, Tamil Nadu.
- We have been serving the community for many years with dedication and trust.
- We offer fast and reliable service.
- Always respond in Tamil, using polite and friendly language.

Answer briefly and directly related to the shop and its services. Avoid generic answers or irrelevant information.
`;

// Root endpoint
app.get("/", (req, res) => {
  res.send("✅ Selvi AI Assistant is up and running at Palani Kumaran Vilas!");
});

// Chat endpoint
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "❌ 'message' is required and must be a string." });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `${shopIntro}\n\nUser Query: ${message}`
        }
      ],
      model: "mistral-saba-24b",
      temperature: 0.75,
      max_tokens: 150,
      top_p: 1,
      stream: false
    });

    const aiReply = chatCompletion.choices?.[0]?.message?.content || "⚠️ Selvi did not respond.";
    console.log("🤖 Selvi's Reply:", aiReply);

    // ✅ Modified to match frontend expectation
    res.json({ reply: aiReply });

  } catch (err) {
    console.error("❌ Groq Error:", err.message);
    res.status(500).json({ reply: "⚠️ Selvi encountered an error. Please try again." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Selvi AI Assistant is running at http://localhost:${PORT}`);
});
