import { NextResponse } from "next/server";
import { SAN_JOSE_RESOURCES } from "@/constants/sanJoseResources";

// 🧠 Memory Search Function
export type Resource = {

    name: string;
  
    type: string;
  
    address: string;
  
    phone: string;
  
    neighborhood: string;
  
    hours: string;
  
  };

function memorySearch(message: string): Resource[] {
  const keywords: Record<string, string[]> = {
    food: ["food", "eat", "meals", "hunger", "kitchen", "restaurant"],
    shelter: ["shelter", "sleep", "bed", "place to stay", "homeless"],
    medical: ["doctor", "clinic", "hospital", "health", "medical"],
    mental: ["mental", "counseling", "therapy", "support", "anxiety", "depression"],
  };

  const lowerMessage = message.toLowerCase();
  let matchType: string | null = null;

  for (const [type, words] of Object.entries(keywords)) {
    if (words.some(word => lowerMessage.includes(word))) {
      matchType = type;
      break;
    }
  }

  if (!matchType) return [];

  return SAN_JOSE_RESOURCES.filter((resource: Resource) => resource.type === matchType).slice(0, 3);
}

// ✉️ POST Handler
export async function POST(request: Request) {
  try {
    const { message } = await request.json();
    const API_KEY = process.env.GEMINI_API_KEY;

    if (!API_KEY) {
      console.error("Missing Gemini API Key");
      return NextResponse.json({ reply: "Server error: API key not found." });
    }

    const matchedResources = memorySearch(message);

    const memoryText = matchedResources.map(resource => {
      const emoji = 
        resource.type === "food" ? "🍽️" :
        resource.type === "shelter" ? "🛏️" :
        resource.type === "medical" ? "🏥" :
        resource.type === "mental" ? "🧠" :
        "📍";

      return `- ${emoji} ${resource.name}: 📍${resource.address} 📞${resource.phone} 🏘️ ${resource.neighborhood} (${resource.hours})`;
    }).join("\n");

    const SYSTEM_PROMPT = `
You are a San Jose Local Help Assistant.

You must:
- Respond naturally in the user's language (English, Spanish, Vietnamese, Tagalog, Chinese).
- Always stay positive, short, helpful.
- Use emojis (🍽️🛏️🏥🧠📍📞).

Here are some relevant services:
${memoryText || "No specific matches found. Suggest calling 211 if necessary."}
    `.trim();

    const finalPrompt = `${SYSTEM_PROMPT}\n\nUser's question:\n"${message}"`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: finalPrompt }] }],
        generationConfig: {
          temperature: 0.3,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Gemini API error:", errorText);
      return NextResponse.json({ reply: "There was an error reaching the AI service. Please try again later." });
    }

    const data = await response.json();
    const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text 
      || "I'm sorry, I couldn't find a good answer for you.";

    return NextResponse.json({ reply: aiReply });

  } catch (error) {
    console.error("Server crash error:", error);
    return NextResponse.json({ reply: "An unexpected server error occurred. Please try again later." });
  }
}
