import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize client only if key exists, otherwise we mock behavior for UI demo
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const sendMessageToAssistant = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  if (!ai) {
    // Fallback/Demo mode if no API key is present
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return "Olá! Sou sua assistente virtual da Duds Closet. Como ainda não fui configurada com uma chave de API, estou operando em modo de demonstração visual. Como posso ajudar você a encontrar o look perfeito hoje?";
  }

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