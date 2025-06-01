import express from "express";
import cors from "cors";
import { Groq } from "groq-sdk";

const app = express();
const PORT = process.env.PORT || 3000;

// 🛡️ Enable CORS for Vercel + Localhost (edit as needed)
const allowedOrigins = [
  "http://localhost:5173",                   // for local dev
  "https://kumarran-vilas.vercel.app",       // your Vercel frontend
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));

// Middleware
app.use(express.json());

// 🤫 Groq API Key (Store in env variable in production)
const groq = new Groq({
  apiKey: "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",
});

// 🛕 Selvi assistant context
const shopIntro = `
You are Rani, the AI assistant for Palani Kumaran Vilas, a famous and trusted local shop in Palani that specializes in viboothi, religious powders, and spiritual items.

When asked about "Kumarran Vilas" or "Palani Kumaran Vilas," always respond crisply and clearly with information such as:
- We provide high-quality viboothi and other pooja items.
- We are located in Palani, Tamil Nadu.
- We have been serving the community for many years with dedication and trust.
- We offer fast and reliable service.
- Always respond in Tamil, using polite and friendly language.

Answer briefly and directly related to the shop and its services. Avoid generic answers or irrelevant information.
`;

// Root health check
app.get("/", (req, res) => {
  res.send("✅ Rani AI Assistant is up and running at Palani Kumaran Vilas!");
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
    console.log("🤖 Rani's Reply:", aiReply);

    res.json({ reply: aiReply });

  } catch (err) {
    console.error("❌ Groq Error:", err.message);
    res.status(500).json({ reply: "⚠️ Rani encountered an error. Please try again." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Selvi AI Assistant is running at http://localhost:${PORT}`);
});
