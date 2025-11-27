import { GoogleGenAI } from "@google/genai";

// Initialize client directly assuming API key is available as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToAssistant = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `Você é a Consultora de Moda Virtual da 'Duds Closet'. 
        Sua persona é elegante, sofisticada, gentil e muito entendida de moda feminina premium.
        Use emojis moderados e elegantes (✨, 🤍, 👗).
        Ajude o cliente a escolher roupas, combinar looks e informe sobre promoções.
        O tom de voz deve ser 'Brand Persona': feminina, moderna, atenciosa.`,
      },
      history: history,
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Tivemos um pequeno problema técnico. Por favor, tente novamente em instantes.";
  }
};