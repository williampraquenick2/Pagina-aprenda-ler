import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  CheckCircle, 
  ArrowDown, 
  AlertTriangle, 
  Volume2, 
  VolumeX, 
  Star, 
  Mail, 
  Printer, 
  Heart, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Calendar, 
  BookOpen, 
  Target
} from 'lucide-react';

const PURCHASE_LINK = "https://pay.cakto.com.br/4xw4zrc_710728";

const Button = ({ children, className = "", onClick = () => {} }: { children?: React.ReactNode; className?: string; onClick?: () => void; key?: React.Key }) => (
  <button 
    onClick={onClick}
    className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-lg flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </button>
);

const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`bg-white rounded-3xl p-6 shadow-md border border-gray-100 ${className}`}>
    {children}
  </div>
);

const Section = ({ children, className = "", id = "" }: { children?: React.ReactNode; className?: string; id?: string; key?: React.Key }) => (
  <section id={id} className={`py-12 px-5 md:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto w-full">
      {children}
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left font-bold text-gray-700 hover:text-blue-600 transition-colors"
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <p className="mt-3 text-gray-600 leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

const App = () => {
  const vimeoRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handlePurchase = () => {
    // Disparar evento InitiateCheckout do Facebook Pixel
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'InitiateCheckout');
    }
    window.location.href = PURCHASE_LINK;
  };

  const toggleMute = () => {
    const iframe = vimeoRef.current?.querySelector('iframe');
    if (iframe && (window as any).Vimeo) {
      const player = new (window as any).Vimeo.Player(iframe);
      if (isMuted) {
        player.setMuted(false);
        setIsMuted(false);
      } else {
        player.setMuted(true);
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="min-h-screen text-gray-800 antialiased overflow-x-hidden">
      {/* HERO SECTION */}
      <Section className="bg-[#E3F2FD] pt-6">
        <div className="flex flex-col items-center text-center space-y-6">
          <img 
            src="https://i.imgur.com/f1Nmr0Y.png" 
            alt="Criança aprendendo" 
            className="w-full max-w-lg rounded-3xl shadow-xl"
          />
          
          <h1 className="text-2xl md:text-4xl font-extrabold text-[#1976D2] leading-tight">
            Descubra a técnica americana que ensina as crianças a ler até 5 vezes mais rápido, sem pressão!
          </h1>
          
          <p className="text-lg md:text-xl font-semibold text-gray-700 bg-white/50 px-4 py-2 rounded-full">
            Com apenas 10 minutos por dia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-sm font-medium mt-4">
            <div className="bg-white/80 p-3 rounded-xl border border-blue-100 md:text-left">
              (Ideal para crianças de 2 a 12 anos, no ritmo natural de cada uma)
            </div>
            <div className="bg-white/80 p-3 rounded-xl border border-blue-100 flex items-center justify-center">
              (Mesmo que ainda não reconheça letras ou sons)
            </div>
            <div className="bg-white/80 p-3 rounded-xl border border-blue-100 md:text-right">
              Funciona também com crianças com TDAH, Autismo ou dificuldades de foco
            </div>
          </div>

          <div className="w-full max-w-md mt-6">
            <Button onClick={handlePurchase} className="bg-[#FF9800] hover:bg-[#F57C00] text-white">
              Quero meu pequeno lendo rápido
            </Button>
            <p className="mt-4 text-gray-700 font-medium">
              Seu filho ou aluno vai aprender a ler até 5x mais rápido de forma divertida, simples e eficaz.
            </p>
          </div>

          <div className="flex flex-col items-center animate-bounce mt-4">
            <ArrowDown className="text-blue-500" />
            <ArrowDown className="text-blue-500 -mt-2" />
          </div>
        </div>
      </Section>

      {/* PROBLEM SECTION */}
      <Section className="bg-white">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Muitos pais acham que cada criança tem seu tempo pra ler. Até que…
          </h2>
          
          <img 
            src="https://i.imgur.com/ktuEAGK.png" 
            alt="Criança frustrada" 
            className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
          />
          
          <p className="text-xl font-semibold text-red-500">
            E o pior: Começa a achar que não é capaz, sem entender o porquê..
          </p>

          <div className="flex justify-center py-4">
            <AlertTriangle size={64} className="text-amber-500" />
          </div>

          <Card className="bg-amber-50 border-amber-200 text-left">
            <h3 className="text-xl font-bold text-amber-800 mb-2">
              Entenda o que realmente atrasa a leitura do seu filho...
            </h3>
            <p className="text-gray-700">
              Falta de estímulo fonético na fase certa, o que pode tornar o processo de alfabetização mais lento, frustrante e confuso, tanto para a criança quanto para você.
            </p>
          </Card>

          <div className="mt-8 space-y-4">
            <p className="text-lg text-gray-700 italic">
              Mas calma, você não tem culpa disso... É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma leve, divertida e no tempo certo.
            </p>
            <h3 className="text-2xl font-bold text-blue-600">
              Por isso você precisa do Kit...
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <img src="https://i.imgur.com/h7j0KIh.png" alt="Kit mockup 1" className="rounded-2xl shadow-md w-full h-auto" />
            <img src="https://i.imgur.com/YywQAQu.png" alt="Kit mockup 2" className="rounded-2xl shadow-md w-full h-auto" />
          </div>
        </div>
      </Section>

      {/* BENEFITS CARDS */}
      <Section className="bg-white pt-0">
        <h3 className="text-xl font-bold text-center mb-8">
          Cada atividade do Kit de Grafismo Fonético foi cuidadosamente criada para:
        </h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            "Desenvolver a coordenação motora fina",
            "Estimular a criatividade e a atenção da criança",
            "Fortalecer as conexões cerebrais que facilitam a leitura",
            "Despertar o interesse pelas palavras e pelos sons",
            "Tornar o processo de alfabetização leve, divertido e eficaz!"
          ].map((text, i) => (
            <Card key={i} className="flex items-center gap-4 py-4">
              <div className="bg-green-100 p-2 rounded-full shrink-0">
                <CheckCircle className="text-green-500" />
              </div>
              <span className="font-semibold text-gray-700">{text}</span>
            </Card>
          ))}
        </div>
        <p className="text-center mt-8 text-lg font-medium text-gray-600">
          Tudo isso com apenas alguns minutos por dia, direto de casa, no ritmo natural da criança.
        </p>
      </Section>

      {/* BLUE SECTION - HOW IT WORKS */}
      <Section className="bg-[#E1F5FE]">
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Por que as atividades de Grafismo Fonético funcionam?
          </h2>
          <img src="https://i.imgur.com/c17m9tt.png" alt="Explicação técnica" className="w-full max-w-md mx-auto rounded-3xl" />
          <div className="text-left space-y-4 max-w-2xl mx-auto">
            <p className="text-lg font-bold">
              Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões, sons e movimentos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As atividades de grafismo fonético desenvolvem a consciência fonológica e visual, habilidades essenciais para que a criança reconheça sílabas, sons e estruturas das palavras de forma natural.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ao traçar linhas, curvas e padrões fonéticos, ela fortalece as conexões cerebrais responsáveis pela leitura, acelerando o processo de alfabetização de forma divertida e sem pressão.
            </p>
          </div>
        </div>
      </Section>

      {/* GREEN SECTION - DIFFERENCE */}
      <Section className="bg-[#E8F5E9]">
        <div className="text-center space-y-6">
          <img src="https://i.imgur.com/kPw6VBd.png" alt="Criança feliz" className="w-full max-w-md mx-auto rounded-3xl" />
          <h2 className="text-2xl font-bold text-green-800">
            E em poucos dias você vai notar a diferença na leitura do seu filho:
          </h2>
          <div className="grid grid-cols-1 gap-4 text-left max-w-lg mx-auto">
            {[
              "Vai reconhecer sílabas e sons com mais facilidade",
              "Vai se sentir mais confiante ao tentar ler palavras novas",
              "Vai mostrar mais interesse por livros e história",
              "Vai aprender no ritmo dele, sem frustração ou comparação",
              "E o melhor: vai começar a gostar do momento de leitura em casa"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-sm">
                <CheckCircle className="text-green-500 shrink-0" />
                <span className="font-medium text-gray-700">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-medium text-gray-700 mt-8">
            Com o Kit de Grafismo Fonético, seu filho desenvolve o cérebro para aprender a ler com leveza, no tempo dele, e com resultados visíveis em poucos dias.
          </p>
          <Card className="mt-8 border-2 border-green-200 bg-white">
            <p className="text-xl font-bold text-green-700 mb-6">
              Comece a jornada de aprendizado do seu filho hoje.
            </p>
            <Button onClick={handlePurchase} className="bg-[#FF9800] hover:bg-[#F57C00] text-white">
              BAIXAR ATIVIDADES AGORA
            </Button>
          </Card>
        </div>
      </Section>

      {/* WHAT THEY WILL LEARN */}
      <Section className="bg-[#F3E5F5]">
        <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">
          O Que Seu Filho Vai Aprender
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="flex flex-col items-center text-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <BookOpen className="text-purple-600" />
            </div>
            <h4 className="font-bold mb-2 text-gray-800">Reconhecimento de Sons e Letras</h4>
            <p className="text-sm text-gray-600">Cada som é associado a fortalecendo as conexões cerebrais de forma sólida e duradoura.</p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Target className="text-blue-600" />
            </div>
            <h4 className="font-bold mb-2 text-gray-800">Formação de Palavras</h4>
            <p className="text-sm text-gray-600">Atividades dinâmicas que transformam a construção de palavras em uma experiência divertida e intuitiva.</p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Star className="text-green-600" />
            </div>
            <h4 className="font-bold mb-2 text-gray-800">Compreensão e Leitura Fluente</h4>
            <p className="text-sm text-gray-600">Exercícios práticos que aprimoram a compreensão do que está sendo lido, ajudando seu filho a ganhar fluência e confiança.</p>
          </Card>
          <Card className="flex flex-col items-center text-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4">
              <Calendar className="text-orange-600" />
            </div>
            <h4 className="font-bold mb-2 text-gray-800">Guia Passo a Passo com Ilustrações</h4>
            <p className="text-sm text-gray-600">Instruções visuais e detalhadas para que cada fase do aprendizado seja clara e tranquila, sem complicações.</p>
          </Card>
        </div>
      </Section>

      {/* VIDEO SECTION */}
      <Section className="bg-white">
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center animate-bounce">
            <ArrowDown className="text-blue-500" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Veja como é facil ensinar seu filho a ler com o Grafismo Fonético...
          </h2>
          
          <div className="relative group w-full flex flex-col items-center">
            <button 
              onClick={toggleMute}
              className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition-transform active:scale-95 z-10"
            >
              {isMuted ? <VolumeX /> : <Volume2 />}
              CLIQUE PARA ATIVAR O SOM
            </button>
            
            <div 
              ref={vimeoRef}
              className="aspect-vimeo-shorts w-full overflow-hidden rounded-3xl shadow-2xl bg-black relative"
            >
              <iframe
                src="https://player.vimeo.com/video/1151447089?background=1&autoplay=1&loop=1&muted=1&autopause=0"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="max-w-md mx-auto pt-8">
            <Button onClick={handlePurchase} className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">
              baixar atividades agora
            </Button>
          </div>
        </div>
      </Section>

      {/* TARGET AUDIENCE - 10 MIN PER DAY */}
      <Section className="bg-[#F5F5F5]">
        <div className="text-center space-y-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
            Praticando apenas 10 minutos por dia,<br/>
            Seu filho colherá estes benefícios para o resto da vida:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="text-left border-l-8 border-blue-500">
              <div className="text-3xl font-black text-blue-100 mb-2">1</div>
              <h4 className="font-bold text-blue-800 mb-2">Crianças em fase de alfabetização</h4>
              <p className="text-gray-600">Ideal para crianças que estão dando os primeiros passos na leitura, o método oferece uma abordagem estruturada e intuitiva, ajudando a desenvolver uma base sólida e segura.</p>
            </Card>
            <Card className="text-left border-l-8 border-green-500">
              <div className="text-3xl font-black text-green-100 mb-2">2</div>
              <h4 className="font-bold text-green-800 mb-2">Pais e educadores que buscam alternativas aos métodos tradicionais</h4>
              <p className="text-gray-600">Se você procura uma forma de ensino mais personalizada, que respeita o ritmo individual de cada criança, esse método é uma excelente escolha.</p>
            </Card>
            <Card className="text-left border-l-8 border-orange-500">
              <div className="text-3xl font-black text-orange-100 mb-2">3</div>
              <h4 className="font-bold text-orange-800 mb-2">Crianças com dificuldade de leitura</h4>
              <p className="text-gray-600">Para crianças que enfrentam desafios na leitura e compreensão, o Método de Grafismo Fonético oferece um suporte extra com atividades lúdicas que facilitam o entendimento.</p>
            </Card>
            <Card className="text-left border-l-8 border-purple-500">
              <div className="text-3xl font-black text-purple-100 mb-2">4</div>
              <h4 className="font-bold text-purple-800 mb-2">Escolas e instituições que valorizam inovação no ensino</h4>
              <p className="text-gray-600">Perfeito para escolas que buscam métodos comprovados, o grafismo fonético traz uma abordagem moderna que gera resultados reais e duraduros.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section className="bg-[#FFF3E0]">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900">
            Veja o que Pais e educadores dizem sobre o Kit de Grafismo Fonético
          </h2>
          <div className="bg-white p-4 rounded-3xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop" 
              alt="Social Proof" 
              className="w-full h-64 object-cover rounded-2xl mb-4"
            />
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-blue-500 rounded-full shrink-0 flex items-center justify-center text-white font-bold">M</div>
                <div className="text-left">
                  <p className="font-bold text-blue-600">Mariana Silva</p>
                  <p className="text-gray-700">Gente, esse material é divino! Meu filho de 5 anos não queria nem ver letras, agora ele pede pra fazer as atividades todo dia. ❤️</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span>Curtir</span> • <span>Responder</span> • <span>12 min</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 bg-pink-500 rounded-full shrink-0 flex items-center justify-center text-white font-bold">A</div>
                <div className="text-left">
                  <p className="font-bold text-blue-600">Ana Paula Educadora</p>
                  <p className="text-gray-700">Apliquei em sala com meus alunos com TDAH e os resultados foram surpreendentes. A fixação do som é muito mais rápida.</p>
                  <div className="flex gap-4 mt-2 text-xs text-gray-500">
                    <span>Curtir</span> • <span>Responder</span> • <span>1h</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button onClick={handlePurchase} className="bg-[#4CAF50] hover:bg-[#388E3C] text-white max-w-md mx-auto">
            baixar atividades agora
          </Button>
        </div>
      </Section>

      {/* WHAT'S INSIDE */}
      <Section className="bg-white overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">
          Veja tudo que você vai receber no kit de atividades
        </h2>
        
        <div className="relative mb-12 overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
             <img src="https://i.imgur.com/h7j0KIh.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
             <img src="https://i.imgur.com/YywQAQu.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
             <img src="https://i.imgur.com/f1Nmr0Y.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
             {/* Duplicate for infinite loop effect */}
             <img src="https://i.imgur.com/h7j0KIh.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
             <img src="https://i.imgur.com/YywQAQu.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
             <img src="https://i.imgur.com/f1Nmr0Y.png" className="h-48 md:h-64 inline-block mr-4 rounded-xl shadow-md" />
          </div>
        </div>

        <Card className="border-2 border-blue-500">
          <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
            + de 100 Atividades de Grafismo Fonético
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Atividades Nível 01: Palavras com 02 Sílabas",
              "Atividades Nível 03: Palavras com 04 Sílabas",
              "Atividades Nível 02: Palavras com 03 Sílabas",
              "Atividades Grafismo na letra Cursiva e Bastão"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-500 shrink-0" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </Card>
        
        <div className="mt-12 max-w-md mx-auto">
          <Button onClick={handlePurchase} className="bg-[#FF9800] hover:bg-[#F57C00] text-white">
            BAIXAR ATIVIDADES AGORA
          </Button>
        </div>
      </Section>

      {/* HOW TO START */}
      <Section className="bg-[#F0F4F8]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Muito simples de começar a utilizar!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
              <Mail size={32} />
            </div>
            <h4 className="font-bold text-lg">CHEGA NO E-MAIL</h4>
            <p className="text-sm text-gray-600">Após a compra você recebe no e-mail o acesso a plataforma com arquivos em formato PDF.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
              <Printer size={32} />
            </div>
            <h4 className="font-bold text-lg">VOCÊ IMPRIME</h4>
            <p className="text-sm text-gray-600">Você pode imprimir quando quiser, pois o acesso é VITALÍCIO e quantas vezes desejar.</p>
          </div>
          <div className="text-center space-y-4">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
              <Heart size={32} />
            </div>
            <h4 className="font-bold text-lg">OS PEQUENOS AMAM</h4>
            <p className="text-sm text-gray-600">Temos uma ótima notícia pra você, MÃOS À OBRA! Importante que sempre auxilie seu pequeno nas atividades.</p>
          </div>
        </div>
      </Section>

      {/* BONUS SECTION */}
      <Section className="bg-[#FFD600]">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900 uppercase">
            e ainda não acabou...
          </h2>
          <p className="text-xl font-bold text-gray-800">
            Garantindo seu acesso hoje você leva 6 SUPER BÔNUS 🎁
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Caderno Alfabeto com Imagem", desc: "Apresenta cada letra do alfabeto com imagens associadas, ajudando na familiarização das crianças com as letras de forma visual e divertida.", old: "37" },
              { title: "Caderno Quebra Cabeça Alfabeto", desc: "Atividades de quebra-cabeça com letras do alfabeto para fixação divertida e interativa.", old: "47" },
              { title: "Caderno Formando Palavras", desc: "Exercícios de formação de palavras que incentivam leitura e escrita, ajudando as crianças a construir vocabulário.", old: "57" },
              { title: "Caderno Alfabeto com Relógio", desc: "Caderno interativo que ensina as letras do alfabeto junto a um relógio, promovendo a leitura e noções de tempo de forma lúdica.", old: "39" },
              { title: "Caderno Alfabeto Traçado", desc: "Caderno com letras do alfabeto traçadas, perfeito para que as crianças pratiquem a escrita.", old: "37" },
              { title: "Caderno Alfabeto com Carinhas", desc: "Caderno com letras do alfabeto e expressões divertidas para tornar o aprendizado mais alegre.", old: "37" }
            ].map((bonus, i) => (
              <Card key={i} className="flex flex-col h-full bg-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold py-1 px-3 rounded-bl-xl uppercase tracking-wider">Bônus {i+1}</div>
                <h4 className="font-bold text-gray-800 mb-3 pr-12">{bonus.title}</h4>
                <p className="text-xs text-gray-600 flex-grow mb-4">{bonus.desc}</p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 line-through">De R$ {bonus.old}</p>
                  <p className="text-lg font-black text-green-600">HOJE: GRÁTIS</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* RECAP & PRICING */}
      <Section className="bg-[#FFF3E0]">
        <div className="text-center space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-900 leading-tight">
            Recapitulando tudo o que você vai receber junto com o<br/>
            Kit Atividades Grafismo Fonético
          </h2>
          
          <div className="max-w-xl mx-auto text-left bg-white/50 p-6 rounded-3xl border border-orange-200">
            <ul className="space-y-2 text-sm md:text-base">
              <li className="flex justify-between"><span>Atividades Grafismo Fonético Nível 1, 2 e 3</span> <span className="text-gray-400 line-through">De R$197</span></li>
              <li className="flex justify-between"><span>Bônus 01: Caderno Alfabeto com Imagem</span> <span className="text-gray-400 line-through">De R$37</span></li>
              <li className="flex justify-between"><span>Bônus 02: Caderno Quebra-Cabeça Alfabeto</span> <span className="text-gray-400 line-through">De R$47</span></li>
              <li className="flex justify-between"><span>Bônus 03: Caderno Formando Palavras</span> <span className="text-gray-400 line-through">De R$57</span></li>
              <li className="flex justify-between"><span>Bônus 04: Caderno Alfabeto com Relógio</span> <span className="text-gray-400 line-through">De R$39</span></li>
              <li className="flex justify-between"><span>Bônus 05: Caderno Alfabeto Traçado</span> <span className="text-gray-400 line-through">De R$27</span></li>
              <li className="flex justify-between"><span>Bônus 06: Caderno Alfabeto com Carinhas</span> <span className="text-gray-400 line-through">De R$49</span></li>
              <li className="flex items-center gap-2 text-green-600 font-bold"><CheckCircle size={16}/> Suporte Profissional</li>
              <li className="flex items-center gap-2 text-green-600 font-bold"><CheckCircle size={16}/> Garantia Incondicional</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-gray-500 line-through text-lg">No total tudo deveria custar R$ 453,00</p>
            <p className="text-xl font-bold">Mas hoje você vai ter acesso completo por</p>
            <div className="py-6 bg-white rounded-3xl shadow-xl border-4 border-orange-500 max-w-sm mx-auto">
              <p className="text-5xl font-black text-orange-600 mb-2">R$ 37</p>
              <p className="text-lg font-bold text-gray-700">5 x de R$ 8,19 *</p>
            </div>
            <p className="text-xs font-bold text-gray-500 tracking-widest uppercase">ACESSO VITALÍCIO | ACESSO IMEDIATO</p>
          </div>

          <div className="max-w-md mx-auto">
            <Button onClick={handlePurchase} className="bg-[#E64A19] hover:bg-[#D84315] text-white py-6 shadow-2xl">
              BAIXAR ATIVIDADES AGORA
            </Button>
          </div>

          <div className="flex justify-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
            <div className="flex items-center gap-1"><ShieldCheck size={14}/> Compra SEGURA</div>
            <div className="flex items-center gap-1"><ShieldCheck size={14}/> Satisfação GARANTIDA</div>
            <div className="flex items-center gap-1"><ShieldCheck size={14}/> Privacidade PROTEGIDA</div>
          </div>
        </div>
      </Section>

      {/* GUARANTEE & TRUST */}
      <Section className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200">
          <div className="md:w-1/3 flex justify-center shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/e/ea/7_days_guarantee_badge.png" 
              alt="Garantia 7 dias" 
              className="w-48 h-48 object-contain"
            />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h3 className="text-2xl font-bold text-gray-800">Garantia incondicional de 7 dias</h3>
            <p className="text-gray-600 leading-relaxed">
              Você tem 7 dias para testar o Kit de Grafismo Fonético. Se por qualquer motivo você não ficar satisfeito(a), basta enviar um e-mail que devolveremos 100% do seu dinheiro, sem burocracia e sem perguntas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
          <div className="p-6">
            <div className="text-blue-600 font-bold mb-2">Pagamento 100% Seguro</div>
            <p className="text-xs text-gray-500">Processado pela Hotmart, líder em produtos digitais no Brasil. Seus dados estão protegidos.</p>
          </div>
          <div className="p-6">
            <div className="text-blue-600 font-bold mb-2">Produto Registrado na CBL</div>
            <p className="text-xs text-gray-500">Obra registrada na Câmara Brasileira do Livro com direito autoral protegido pela Lei nº 9.610/1998.</p>
          </div>
          <div className="p-6">
            <div className="text-blue-600 font-bold mb-2">Suporte Humanizado</div>
            <p className="text-xs text-gray-500">Equipe pronta para tirar todas as suas dúvidas via e-mail ou WhatsApp.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t pt-12">
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600">+5.000</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Famílias atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600">Vitalício</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Sem mensalidades</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600">Suporte</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Humanizado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-blue-600">Digital</div>
            <div className="text-xs font-bold text-gray-400 uppercase">Acesso imediato</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>
        <div className="max-w-2xl mx-auto space-y-2">
          <FAQItem 
            question="Para qual faixa etária é indicado?" 
            answer="O material foi desenvolvido para crianças de 2 a 12 anos, respeitando o nível de desenvolvimento de cada uma." 
          />
          <FAQItem 
            question="Funciona para crianças com TDAH ou Autismo?" 
            answer="Sim! O método fonético é altamente recomendado por especialistas para crianças com dificuldades de foco, TDAH ou Autismo, pois utiliza estímulos sensoriais e visuais diretos." 
          />
          <FAQItem 
            question="Como recebo o material?" 
            answer="Imediatamente após a confirmação do pagamento, você receberá um link de acesso no seu e-mail cadastrado." 
          />
          <FAQItem 
            question="Posso imprimir quantas vezes quiser?" 
            answer="Sim! O acesso é vitalício. Você pode baixar e imprimir o PDF quantas vezes desejar para praticar com seu filho." 
          />
          <FAQItem 
            question="Quanto tempo leva para ver resultados?" 
            answer="Muitos pais relatam melhoras significativas no reconhecimento de sons e sílabas nos primeiros 15 dias de prática constante (10 min/dia)." 
          />
          <FAQItem 
            question="E se eu não gostar do material?" 
            answer="Não tem problema. Você tem 7 dias de garantia total. Basta solicitar o reembolso e devolvemos seu dinheiro." 
          />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-blue-600">Educação Kids</h3>
          <p className="text-sm text-gray-400">© 2026 - Todos os direitos reservados</p>
          <div className="flex justify-center gap-4">
             <div className="flex items-center gap-1 text-[10px] text-gray-400 border border-gray-200 px-3 py-1 rounded-md">
               <ShieldCheck size={12}/> SITE BLINDADO
             </div>
          </div>
          <p className="text-[10px] text-gray-300 max-w-lg mx-auto leading-tight">
            Este site não faz parte do Facebook ou Google. Além disso, este site NÃO é endossado pelo Facebook ou Google de nenhuma maneira. FACEBOOK e GOOGLE são marcas comerciais de suas respectivas empresas.
          </p>
        </div>
      </footer>
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
