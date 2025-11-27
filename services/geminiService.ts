
// SERVICE MOCKADO PARA DEPLOY ESTÁTICO (Sem dependência de API Key)
// Isso garante que o site funcione visualmente na Vercel sem erros de backend.

export const sendMessageToAssistant = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<string> => {
  // Simula um delay de rede natural para a UI parecer real
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Retorna uma resposta elegante e estática
  return "Olá! ✨ Que bom ter você aqui. Como esta é uma versão de demonstração do site, minha inteligência artificial está em modo de apresentação visual. Mas adoraríamos conversar com você pelo WhatsApp para uma consultoria real!";
};
