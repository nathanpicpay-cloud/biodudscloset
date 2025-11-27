import React, { useState } from 'react';
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Instagram, 
  Sparkles, 
  Star, 
  ArrowRight, 
  MessageCircle,
  Clock,
  Shield,
  Gem,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';
import ShoppingAssistant from './components/ShoppingAssistant';
import { FAQItem } from './types';

// --- DATA ---

const faqData: FAQItem[] = [
  { question: "E se eu não gostar? Existe alguma garantia?", answer: "Sim! Oferecemos garantia de satisfação. Se nas primeiras sessões você sentir que a consultoria não é para você, devolvemos seu investimento." },
  { question: "Preciso investir muito em roupas durante a consultoria?", answer: "Não! O foco principal é otimizar o que você já tem. Compras são sugeridas apenas se houver necessidade real e dentro do seu orçamento." },
  { question: "Não sei nada sobre moda. A consultoria é para mim?", answer: "Com certeza! A consultoria é didática e feita exatamente para quem quer aprender a se vestir melhor, independente do conhecimento prévio." },
  { question: "Quanto tempo leva para eu ver os resultados da consultoria?", answer: "Você notará mudanças já na primeira sessão de autoconhecimento. A transformação visual completa ocorre ao longo das semanas de acompanhamento." },
  { question: "O que acontece se eu precisar de ajuda depois das sessões?", answer: "Oferecemos um período de acompanhamento via WhatsApp após a entrega do guia para tirar dúvidas e garantir sua segurança nos looks." },
];

// --- COMPONENTS ---

interface SectionTitleProps {
  children?: React.ReactNode;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, light = false }) => (
  <h2 className={`font-serif text-3xl md:text-4xl text-center mb-12 ${light ? 'text-brand-wine' : 'text-brand-deep'}`}>
    {children}
  </h2>
);

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const base = "px-8 py-4 rounded-full font-sans font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2";
  const styles = variant === 'primary' 
    ? "bg-brand-wine text-white hover:bg-brand-deep hover:shadow-brand-wine/30"
    : "bg-white text-brand-wine border border-brand-wine hover:bg-brand-soft";
  
  return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
};

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-brand-rose/20 last:border-0">
    <button 
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
    >
      <span className={`font-serif text-lg ${isOpen ? 'text-brand-wine' : 'text-brand-deep'} group-hover:text-brand-wine transition-colors`}>
        {item.question}
      </span>
      {isOpen ? <ChevronUp className="text-brand-wine" /> : <ChevronDown className="text-brand-rose" />}
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
      <p className="text-brand-deep/80 leading-relaxed font-sans">
        {item.answer}
      </p>
    </div>
  </div>
);

const ChatBubble = ({ text, isLeft, time, name }: { text: string, isLeft: boolean, time: string, name?: string }) => (
  <div className={`flex flex-col mb-4 ${isLeft ? 'items-start' : 'items-end'}`}>
    {isLeft && name && <span className="text-xs text-brand-deep/60 ml-2 mb-1">{name}</span>}
    <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm relative ${
      isLeft ? 'bg-white rounded-tl-none text-gray-700' : 'bg-[#E1FFC7] rounded-tr-none text-gray-800'
    }`}>
      <p>{text}</p>
      <span className="text-[10px] opacity-60 flex justify-end mt-1 items-center gap-1">
        {time} {isLeft ? '' : <span className="text-blue-500">✓✓</span>}
      </span>
    </div>
  </div>
);

// --- MAIN APP ---

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Links
  const WHATSAPP_URL = "https://wa.me/5571996825633";
  const INSTAGRAM_URL = "https://www.instagram.com/dudscloset._/";
  const STORE_URL = "https://dudscloset.vercel.app/";

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-rose/30">
      
      {/* Floating Assistant Button */}
      <button 
        onClick={() => setIsAssistantOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-brand-wine text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform animate-bounce-slow"
        aria-label="Abrir Assistente"
      >
        <Sparkles size={24} />
      </button>

      {/* HEADER LOGO */}
      <header className="py-8 flex justify-center sticky top-0 bg-brand-bg/90 backdrop-blur-md z-30 border-b border-brand-nude/30">
        <img 
          src="https://imgur.com/TgZhBnf.png" 
          alt="Duds Closet" 
          className="h-16 md:h-20 object-contain hover:opacity-90 transition-opacity cursor-pointer" 
          onClick={() => window.scrollTo(0,0)}
        />
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-soft to-transparent opacity-50 -z-10 rounded-l-[100px]"></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-wine/10 text-brand-wine text-sm tracking-widest uppercase font-bold">
              <Sparkles size={14} /> Estilo Ascendente
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-brand-deep leading-[1.1]">
              Reinvente seu estilo e <span className="italic text-brand-wine">descubra a melhor</span> versão de si mesma
            </h1>
            <p className="text-lg text-brand-deep/80 leading-relaxed max-w-md">
              Consultoria para mulheres que desejam aprender a se vestir com confiança e <strong>destacar sua imagem profissional e pessoal</strong>.
            </p>
            <Button onClick={() => handleOpenLink(WHATSAPP_URL)}>
              QUERO ME DESTACAR <ArrowRight size={18} />
            </Button>
          </div>
          
          <div className="relative animate-in slide-in-from-right duration-1000 delay-200">
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Mulher elegante" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating Elements */}
            <div className="absolute -bottom-10 -left-10 z-20 bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-xl max-w-xs border border-brand-nude">
              <p className="font-serif italic text-brand-wine text-xl">"Moda é mais do que aparência"</p>
            </div>
            <div className="absolute top-10 -right-10 z-0 text-[200px] font-serif text-brand-nude/20 leading-none">
              Duds
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVEST SECTION */}
      <section className="py-24 bg-brand-deep text-brand-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1 space-y-12">
              <div>
                <h2 className="font-serif text-4xl mb-6 text-brand-nude">
                  Por que você deveria investir na sua imagem pessoal?
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  A forma como você se veste diz <strong>muito sobre você</strong>, mesmo antes de dizer uma palavra. Com a consultoria, você terá:
                </p>
              </div>

              <div className="space-y-8">
                {[
                  { title: "Autoconhecimento e Estilo Próprio", text: "Looks que refletem sua autenticidade." },
                  { title: "Imagem Profissional e Credibilidade", text: "Peças e combinações que aumentam sua presença." },
                  { title: "Eficiência e Praticidade", text: "Tenha um guarda-roupa otimizado para escolhas rápidas." },
                  { title: "Autoestima e Confiança", text: "Sentir-se bem com o que veste aumenta a autoconfiança." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-brand-wine flex items-center justify-center text-white">
                      <Star size={14} fill="currentColor" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-brand-nude mb-1">{item.title}</h3>
                      <p className="text-white/70 text-sm font-light">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 border border-brand-nude/30 rounded-t-[10rem] rounded-b-[2rem] transform rotate-3 scale-105"></div>
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Confiança" 
                  className="w-full h-[500px] object-cover rounded-t-[10rem] rounded-b-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle>Um processo simples e transformador</SectionTitle>
          <p className="text-center text-brand-deep/60 -mt-8 mb-16 max-w-2xl mx-auto">
            Cada passo da consultoria é feito para ser prático, acessível e altamente personalizado.
          </p>

          <div className="space-y-8">
            {[
              { 
                step: "1", 
                title: "SESSÃO DE AVALIAÇÃO INICIAL", 
                desc: "Teremos uma conversa detalhada para entender seu estilo atual, objetivos e o que deseja alcançar. Tudo começa com uma análise personalizada.",
                img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=300&q=80"
              },
              { 
                step: "2", 
                title: "AVALIAÇÃO DO GUARDA-ROUPA", 
                desc: "Ajudarei você a avaliar as peças que já possui, identificando o que manter, ajustar ou doar. O foco é otimizar sem gastos excessivos.",
                img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=300&q=80"
              },
              { 
                step: "3", 
                title: "GUIA PERSONALIZADO DE LOOKS", 
                desc: "Receba um guia exclusivo com combinações e looks. Seu aliado para compor o visual em diferentes ocasiões com praticidade.",
                img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=300&q=80"
              },
              { 
                step: "4", 
                title: "ACOMPANHAMENTO E AJUSTES", 
                desc: "Após as sessões, estarei disponível para acompanhar sua evolução e oferecer ajustes, garantindo que você se sinta segura no dia a dia.",
                img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=300&q=80"
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-white border border-brand-nude/30 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-brand-wine/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="relative shrink-0">
                     <span className="absolute -top-3 -left-3 w-8 h-8 bg-brand-wine text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-lg z-10">
                      {item.step}
                    </span>
                    <img src={item.img} alt={item.title} className="w-24 h-24 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-serif text-lg text-brand-wine font-bold mb-2 tracking-wide">{item.title}</h3>
                    <p className="text-brand-deep/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={() => handleOpenLink(WHATSAPP_URL)}>
              COMECE SUA TRANSFORMAÇÃO <Sparkles size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* FEEDBACK SECTION */}
      <section className="py-24 bg-brand-soft/50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle>Alguns feedbacks...</SectionTitle>
          <p className="text-center text-brand-deep/60 -mt-8 mb-16">Mulheres reais, transformações verdadeiras</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone 1 */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-8 border-brand-bg relative overflow-hidden h-[500px]">
              <div className="absolute top-0 left-0 w-full h-6 bg-gray-100 border-b z-10 flex justify-center items-center"><div className="w-16 h-1 bg-gray-300 rounded-full"></div></div>
              <div className="mt-8 px-2 overflow-y-auto pb-4">
                <div className="flex items-center gap-2 border-b pb-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/150?u=1" alt="User" /></div>
                  <div><p className="font-bold text-sm text-gray-800">Patrícia</p><p className="text-xs text-gray-500">online</p></div>
                </div>
                <ChatBubble isLeft={false} time="12:02" text="Oi, Mari! Só passando para te agradecer pela consultoria... Ela é simplesmente maravilhosa! Me sinto muito mais confiante!" />
                <ChatBubble isLeft={true} name="Duda" time="12:15" text="Olá, Pati! Ai, que alegria saber disso! 🥰" />
                <ChatBubble isLeft={false} time="12:20" text="E eu tô ainda mais feliz! Me sinto muito mais confiante agora! Essa repaginada me fez muito bem..." />
                <ChatBubble isLeft={true} name="Duda" time="12:25" text="Que maravilha, Pati! Uhuu!!!" />
              </div>
            </div>

            {/* Phone 2 */}
            <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-8 border-brand-bg relative overflow-hidden h-[500px]">
              <div className="absolute top-0 left-0 w-full h-6 bg-gray-100 border-b z-10 flex justify-center items-center"><div className="w-16 h-1 bg-gray-300 rounded-full"></div></div>
              <div className="mt-8 px-2 overflow-y-auto pb-4">
                <div className="flex items-center gap-2 border-b pb-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/150?u=2" alt="User" /></div>
                  <div><p className="font-bold text-sm text-gray-800">Júlia</p><p className="text-xs text-gray-500">online</p></div>
                </div>
                <ChatBubble isLeft={false} time="14:13" text="Amei incrível, Mari! A consultoria me ajudou a montar um guarda-roupa que me valoriza, sem exagero e com peças práticas 😍" />
                <ChatBubble isLeft={true} name="Duda" time="14:20" text="Oi, Júlia! Fico tão feliz com o seu feedback! Gratidão! 🙏" />
                <ChatBubble isLeft={false} time="14:35" text="Eu que agradeço para toda a sua ajuda e seus ensinamentos, Mari! ❤️" />
              </div>
            </div>

             {/* Phone 3 */}
             <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border-8 border-brand-bg relative overflow-hidden h-[500px]">
              <div className="absolute top-0 left-0 w-full h-6 bg-gray-100 border-b z-10 flex justify-center items-center"><div className="w-16 h-1 bg-gray-300 rounded-full"></div></div>
              <div className="mt-8 px-2 overflow-y-auto pb-4">
                <div className="flex items-center gap-2 border-b pb-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://i.pravatar.cc/150?u=3" alt="User" /></div>
                  <div><p className="font-bold text-sm text-gray-800">Carla</p><p className="text-xs text-gray-500">online</p></div>
                </div>
                <ChatBubble isLeft={false} time="09:17" text="Mari do céu! Foi uma experiência libertadora! Me sinto mais confiante no trabalho e em situações sociais." />
                <ChatBubble isLeft={true} name="Duda" time="09:25" text="Ai, que lindo ler a sua mensagem, Carla! É um prazer poder te ajudar. Continue contando comigo! ✨" />
                <ChatBubble isLeft={false} time="09:40" text="Você me ensinou tanto, Mari! Eu nem tenho palavras..." />
                <ChatBubble isLeft={false} time="09:42" text="Ahh, eu que agradeço para toda sua confiança, querida!" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTION SECTION (PREVIOUSLY PRICING) */}
      <section className="py-24 bg-brand-deep text-brand-bg relative">
        {/* Background texture for elegance */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <SectionTitle light>Escolha o ideal para o seu estilo</SectionTitle>
          <p className="text-center text-white/60 -mt-8 mb-16">
            Deseja um atendimento exclusivo ou prefere explorar nossas coleções?
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            
            {/* OPTION 1: WhatsApp Consultation */}
            <div className="flex flex-col h-full bg-gradient-to-br from-brand-wine/40 to-brand-deep/80 border border-brand-gold/30 rounded-3xl p-10 hover:shadow-[0_0_30px_rgba(212,176,140,0.15)] transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-brand-gold/20 flex items-center justify-center mb-6 group-hover:bg-brand-gold/30 transition-colors">
                 <MessageCircle className="text-brand-gold w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-3xl text-white mb-4">Consultoria Via WhatsApp</h3>
              <p className="text-brand-nude/80 mb-8 text-lg leading-relaxed flex-grow">
                Converse diretamente com nossa equipe. Tire dúvidas, receba indicações personalizadas e agende sua transformação de estilo com atendimento humanizado.
              </p>

              <ul className="space-y-4 mb-10 text-brand-nude/70">
                <li className="flex items-center gap-3"><Check size={18} className="text-brand-gold" /> Atendimento 100% humano</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-brand-gold" /> Tira-dúvidas rápido</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-brand-gold" /> Agendamento flexível</li>
              </ul>

              <button 
                onClick={() => handleOpenLink(WHATSAPP_URL)}
                className="w-full py-5 rounded-xl bg-brand-gold text-brand-deep font-bold text-lg tracking-wide hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
              >
                <MessageCircle size={20} />
                INICIAR CONVERSA
              </button>
            </div>

            {/* OPTION 2: Store Website Preview */}
            <div className="flex flex-col h-full group">
              <div className="relative overflow-hidden rounded-t-3xl border border-white/20 bg-[#1e1e1e] h-full shadow-2xl transition-all duration-500 hover:shadow-brand-gold/10">
                
                {/* Mock Browser Header */}
                <div className="h-10 bg-[#2a2a2a] flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <div className="ml-4 flex-1 h-6 bg-[#1a1a1a] rounded-md flex items-center px-3">
                    <span className="text-[10px] text-gray-500 font-sans">dudscloset.vercel.app</span>
                  </div>
                </div>

                {/* Website Content Preview */}
                <div className="relative h-[400px] md:h-auto md:flex-grow bg-white overflow-hidden group-hover:scale-[1.01] transition-transform duration-500 origin-bottom">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Loja Duds Closet" 
                    className="w-full h-full object-cover object-top opacity-90 transition-transform duration-[2s] ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-deep/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                    <p className="font-serif text-2xl text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Loja Oficial</p>
                    <p className="text-brand-nude mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">Explore nossa coleção completa</p>
                    
                    <button 
                      onClick={() => handleOpenLink(STORE_URL)}
                      className="py-3 px-8 rounded-full border border-white text-white font-bold hover:bg-white hover:text-brand-deep transition-all duration-300 flex items-center gap-2 translate-y-4 group-hover:translate-y-0 delay-100"
                    >
                      ACESSAR SITE <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Mobile/Default button logic if not hovering (optional text below) */}
              <div className="bg-white/5 border border-white/10 border-t-0 rounded-b-3xl p-6 lg:hidden">
                 <button 
                  onClick={() => handleOpenLink(STORE_URL)}
                  className="w-full py-4 rounded-xl border border-white/30 text-white font-bold tracking-wide hover:bg-white hover:text-brand-deep transition-all"
                 >
                    CONHECER O SITE DA LOJA
                 </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BONUS SECTION */}
      <section className="py-24 bg-brand-bg relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#EAD8D8_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionTitle>+ BÔNUS EXCLUSIVOS</SectionTitle>
          <p className="text-center text-brand-deep/60 -mt-8 mb-16 max-w-2xl mx-auto">
            Ao decidir fazer parte da consultoria e adquirir um dos pacotes, você ainda <strong>receberá 3 presentes</strong>:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GUIA DE ESTILO PARA O DIA", icon: <Star className="text-brand-wine w-10 h-10" />, desc: "Um e-book completo que ensina a montar combinações práticas e estilosas." },
              { title: "CHECKLIST DE GUARDA-ROUPA", icon: <Check className="text-brand-wine w-10 h-10" />, desc: "Peças essenciais que não podem faltar em um guarda-roupa funcional e elegante." },
              { title: "ACESSO A GRUPO VIP", icon: <Gem className="text-brand-wine w-10 h-10" />, desc: "Um grupo exclusivo com dicas diárias, tendências e inspirações." }
            ].map((bonus, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-lg border-b-4 border-brand-wine text-center hover:-translate-y-2 transition-transform">
                <div className="bg-brand-soft w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  {bonus.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-deep mb-3">{bonus.title}</h3>
                <p className="text-sm text-brand-deep/70">{bonus.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button onClick={() => handleOpenLink(WHATSAPP_URL)}>
              QUERO MEUS BÔNUS <ArrowRight size={16}/>
            </Button>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-24 bg-brand-deep overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-6">
            <h2 className="font-serif text-4xl text-brand-gold">Prazer, Duda Ribeiro</h2>
            <div className="w-20 h-1 bg-brand-wine"></div>
            <p className="text-brand-nude/90 leading-relaxed font-light">
              Eu sou consultora de moda e imagem pessoal com <strong>mais de 10 anos de experiência</strong>, ajudo mulheres a se vestirem com confiança e sofisticação.
            </p>
            <p className="text-brand-nude/90 leading-relaxed font-light">
              Sou especializada em <strong>Personal Branding e Análise de Cores</strong>. Também já trabalhei com centenas de clientes, transformando guarda-roupas e, mais importante, vidas.
            </p>
            <p className="text-brand-nude/90 leading-relaxed font-light italic border-l-2 border-brand-wine pl-4">
              "Minha missão é empoderar mulheres através do estilo e ajudá-las a expressar sua melhor versão."
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-80 h-[450px]">
              <div className="absolute inset-0 border-2 border-brand-gold rounded-[100px] transform -rotate-6"></div>
              <div className="absolute inset-0 border-2 border-brand-wine rounded-[100px] transform rotate-3"></div>
              <img 
                src="https://i.imgur.com/jqiG8nv.png" 
                alt="Duda Ribeiro" 
                className="w-full h-full object-cover rounded-[100px] shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-brand-soft">
        <div className="max-w-3xl mx-auto px-6">
          <SectionTitle>Dúvidas Frequentes</SectionTitle>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-white">
            {faqData.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                item={item} 
                isOpen={openFaq === idx} 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-brand-deep text-brand-nude py-12 text-center border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-2xl text-white mb-8">DUDS CLOSET</h2>
          <Button variant="outline" onClick={() => handleOpenLink(WHATSAPP_URL)}>
             QUERO MINHA MELHOR VERSÃO <ArrowRight size={16} />
          </Button>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider opacity-60">
            <p>Copyright © 2024 Estilo Ascendente | Todos os direitos reservados.</p>
            <div className="flex gap-4">
               <Instagram onClick={() => handleOpenLink(INSTAGRAM_URL)} className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
               <MessageCircle onClick={() => handleOpenLink(WHATSAPP_URL)} className="hover:text-brand-gold cursor-pointer transition-colors" size={20} />
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ShoppingAssistant 
        isOpen={isAssistantOpen} 
        onClose={() => setIsAssistantOpen(false)} 
      />
    </div>
  );
}