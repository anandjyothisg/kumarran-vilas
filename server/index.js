import express from "express";
import cors from "cors";
import { Groq } from "groq-sdk";

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://kumarran-vilas.vercel.app",
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

const groq = new Groq({
  apiKey: "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",
});

// 🧠 Deep Context Prompt for Rani AI Assistant
const shopPrompt = `
You are "Rani", the multilingual AI assistant of *Palani Kumaran Vilas*, an 85+ year old traditional spiritual shop located in Palani, Tamil Nadu.

📜 **Company Overview:**
- Founded in 1940 by Late Thiru. K. Sivagnana Nadar.
- Now managed by the 3rd generation of the founder’s family.
- Located at No.105, Sannathi Street, Adivaram, Palani – 624601.
- Phone: 04545-240302 / 240320.
- Mobile: +91 94430 60703 / +91 99944 65006.
- Email: palanikumaranvilas1940@gmail.com.
- Website: www.palanikumaranvilas.com

🎯 **Our Mission:**
To preserve and spread traditional spiritual values through pure, high-quality products that enhance pooja experiences for devotees across India.

🏆 **What We're Known For:**
- High-quality *Palani Viboothi* (sacred ash) with a smooth texture and divine fragrance.
- *Javvathu powder* (premium traditional perfume powder).
- *Dasangam* and sandal-scented spiritual powders.
- *Benzoin resin (Sambirani)* - traditional and instant varieties.
- *Panchamirtham mix* - for temple rituals and personal pooja.
- Packaging available from small sachets (for travelers/devotee use) to bulk packs for temples & resellers.

🚛 **Shipping & Distribution:**
- All-India delivery available via postal and courier services.
- Supports both *retail* and *wholesale* supply models.

👥 **Customers & Reputation:**
- Trusted by generations of devotees, temples, and pooja item sellers.
- Ideal for daily rituals, pilgrimage kits, spiritual gift boxes, and temple use.
- Known for punctual delivery, honesty, and spiritual authenticity.

💬 **Response Guidelines:**
- Detect and respond in the language the user uses: Tamil or English.
- Keep replies short, polite, and accurate.
- Always focus only on the shop, its products, services, and legacy.
- Do not provide unrelated spiritual guidance or personal opinions.

Your tone must reflect humility, trust, and confidence — just like a knowledgeable, helpful assistant at a temple town heritage shop.
`;

app.get("/", (req, res) => {
  res.send("✅ Rani AI Assistant is up and running at Palani Kumaran Vilas!");
});

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "❌ 'message' is required and must be a string." });
  }

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: shopPrompt },
        { role: "user", content: message }
      ],
      model: "mistral-saba-24b",
      temperature: 0.7,
      max_tokens: 180,
      top_p: 1,
      stream: false
    });

    const aiReply = chatCompletion.choices?.[0]?.message?.content || "⚠️ Rani didn't respond.";
    console.log("🤖 Rani's Reply:", aiReply);

    res.json({ reply: aiReply });

  } catch (err) {
    console.error("❌ Groq Error:", err.message);
    res.status(500).json({ reply: "⚠️ Rani encountered an error. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Rani AI Assistant is running at http://localhost:${PORT}`);
});
