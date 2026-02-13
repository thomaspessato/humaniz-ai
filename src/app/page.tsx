import Link from "next/link";
import {
  Sparkles,
  PenLine,
  Calendar,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  ArrowUpRight,
  Flame,
  MousePointer2,
  Clock,
  Eye,
  Star,
} from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { InteractiveDemo } from "@/components/landing/interactive-demo";
import { TypingEffect } from "@/components/landing/typing-effect";
import { FAQ } from "@/components/landing/faq";

function SectionMarker({ number, total, label }: { number: string; total: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="section-marker text-gray-300">
        [ {number} / {total} ]
      </div>
      <div className="h-px flex-1 bg-gray-100" />
      <div className="section-marker text-gray-400">{label}</div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Announcement Bar ── */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium flex items-center justify-center gap-2">
          <Flame className="w-4 h-4" />
          Novidade: Score de humanização com IA avançada.
          <Link href="/register" className="underline underline-offset-2 hover:opacity-80 transition-opacity inline-flex items-center gap-1">
            Testar agora <ArrowRight className="w-3 h-3" />
          </Link>
        </p>
      </div>

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 glass-card border-b border-gray-100/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <Sparkles className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 tracking-tight">
              Humaniz<span className="text-orange-500">.ai</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#demo" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Produto</a>
            <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Features</a>
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Preços</a>
            <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors hidden sm:block"
            >
              Entrar
            </Link>
            <Link
              href="/register"
              className="btn-primary text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center gap-1.5"
            >
              Começar grátis
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="absolute inset-0 dot-grid-light opacity-60" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-8">
          <div className="text-center">
            {/* Badge */}
            <div className="animate-fade-in-down inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-soft" />
              IA que escreve como gente de verdade
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-950 tracking-tight leading-[1.1]">
              Transforme textos genéricos em{" "}
              <span className="text-gradient-orange">conteúdo humano</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed" style={{ animationFillMode: "both" }}>
              O Humaniz.ai reescreve seus posts para LinkedIn com IA — 
              para que soem como <strong className="text-gray-700">você</strong>, 
              não como um robô. Humanize, agende e acompanhe.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row items-center justify-center gap-4 mt-10" style={{ animationFillMode: "both" }}>
              <Link
                href="/register"
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold shadow-lg"
              >
                Começar grátis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-orange-300 transition-colors">
                  <MousePointer2 className="w-3.5 h-3.5" />
                </div>
                Ver demonstração
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in delay-600 flex items-center justify-center gap-8 mt-12 text-sm text-gray-400" style={{ animationFillMode: "both" }}>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-orange-400" />
                Setup em 30 segundos
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                Dados seguros
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interactive Demo ── */}
      <section id="demo" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionMarker number="01" total="05" label="PLAYGROUND" />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-orange-600 mb-3">// Veja em ação //</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
                Experimente a <span className="text-gradient-orange">transformação</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Selecione um cenário e veja como a IA humaniza textos genéricos em conteúdo que conecta.
              </p>
            </div>
          </Reveal>
          <Reveal variant="scale" delay={200}>
            <InteractiveDemo />
          </Reveal>
        </div>
      </section>

      {/* ── How it Works ── */}
      <section className="py-16 sm:py-20 bg-gray-50/70 dot-grid-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionMarker number="02" total="05" label="COMO FUNCIONA" />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-orange-600 mb-3">// Simples como deveria ser //</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
                Do rascunho ao post perfeito em <span className="text-gradient-orange">3 passos</span>
              </h2>
            </div>
          </Reveal>
          
          <Reveal variant="stagger" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "01",
                  icon: PenLine,
                  title: "Cole seu rascunho",
                  desc: "Escreva ou cole qualquer texto. Pode ser um rascunho simples, uma ideia solta ou um post que você quer melhorar.",
                  color: "from-orange-400 to-orange-500",
                },
                {
                  step: "02",
                  icon: Sparkles,
                  title: "IA humaniza",
                  desc: "Em segundos, receba 3 versões únicas que mantêm seu estilo mas soam naturais e humanas. Compare scores.",
                  color: "from-orange-500 to-orange-600",
                },
                {
                  step: "03",
                  icon: Calendar,
                  title: "Publique ou agende",
                  desc: "Escolha a melhor versão, edite se quiser, e publique agora ou agende para o horário ideal no LinkedIn.",
                  color: "from-orange-600 to-red-500",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="relative bg-white rounded-2xl border border-gray-200 p-7 card-hover group"
                >
                  {/* Step number */}
                  <div className="absolute -top-3 left-6 bg-white px-2">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      STEP {item.step}
                    </span>
                  </div>
                  
                  <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-shadow`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <h3 className="text-base font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Features (Bento Grid) ── */}
      <section id="features" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionMarker number="03" total="05" label="FEATURES" />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-orange-600 mb-3">// Tudo incluso //</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
                Tudo que você precisa para{" "}
                <span className="text-gradient-orange">crescer no LinkedIn</span>
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                De rascunho a publicação com métricas — numa única ferramenta.
              </p>
            </div>
          </Reveal>

          <Reveal variant="stagger" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Sparkles,
                  title: "Reescrita humanizada",
                  desc: "Cole seu rascunho e receba 3 versões que parecem escritas por uma pessoa real, não por IA.",
                  accent: "bg-orange-50 text-orange-600 border-orange-100",
                },
                {
                  icon: Calendar,
                  title: "Agendamento inteligente",
                  desc: "Escolha data e hora. O post vai para a fila e é publicado automaticamente no seu LinkedIn.",
                  accent: "bg-blue-50 text-blue-600 border-blue-100",
                },
                {
                  icon: BarChart3,
                  title: "Analytics detalhado",
                  desc: "Curtidas, comentários, compartilhamentos — entenda o que funciona e replique o sucesso.",
                  accent: "bg-purple-50 text-purple-600 border-purple-100",
                },
                {
                  icon: Eye,
                  title: "Score de humanização",
                  desc: "Saiba exatamente o quanto seu texto soa artificial e o quanto a reescrita melhorou.",
                  accent: "bg-green-50 text-green-600 border-green-100",
                },
                {
                  icon: Shield,
                  title: "Seus dados, sua voz",
                  desc: "A IA aprende seu estilo ao longo do tempo — sem expor seus dados para terceiros.",
                  accent: "bg-slate-50 text-slate-600 border-slate-100",
                },
                {
                  icon: Zap,
                  title: "Rápido e simples",
                  desc: "Sem tutoriais de 30 minutos. Cole o texto, clique e pronto. Construído para quem tem pressa.",
                  accent: "bg-amber-50 text-amber-600 border-amber-100",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border border-gray-200 p-6 card-hover group"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${feature.accent} transition-transform group-hover:scale-110`}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-16 sm:py-20 bg-gray-50/70 dot-grid-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionMarker number="04" total="05" label="PREÇOS" />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-orange-600 mb-3">// Transparente //</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
                Preço <span className="text-gradient-orange">simples</span>, sem surpresas
              </h2>
              <p className="text-gray-500 mt-3">
                Comece grátis. Evolua quando fizer sentido.
              </p>
            </div>
          </Reveal>

          <Reveal variant="stagger" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Free */}
              <div className="bg-white rounded-2xl border border-gray-200 p-7 card-hover">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">Grátis</h3>
                </div>
                <p className="text-sm text-gray-400">Para experimentar</p>
                
                <div className="mt-6 mb-6">
                  <span className="text-4xl font-bold text-gray-900">R$ 0</span>
                  <span className="text-gray-400 ml-1">/mês</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    "5 reescritas por mês",
                    "Score de humanização",
                    "Salvar rascunhos",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-gray-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/register"
                  className="block text-center bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-200 transition-all"
                >
                  Criar conta grátis
                </Link>
              </div>

              {/* Pro */}
              <div className="relative bg-gray-950 rounded-2xl p-7 card-hover text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/5" />
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-orange-500/20 text-orange-300 text-xs font-medium px-2.5 py-1 rounded-full">
                  <Star className="w-3 h-3" />
                  Popular
                </div>
                
                <div className="relative">
                  <h3 className="text-lg font-semibold">Pro</h3>
                  <p className="text-sm text-gray-400 mt-0.5">Para criadores sérios</p>
                  
                  <div className="mt-6 mb-6">
                    <span className="text-4xl font-bold text-white">R$ 49</span>
                    <span className="text-gray-400 ml-1">/mês</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {[
                      "Reescritas ilimitadas",
                      "Agendamento de posts",
                      "Analytics completo",
                      "Histórico de versões",
                      "Suporte prioritário",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/register"
                    className="btn-primary block text-center px-4 py-2.5 rounded-xl text-sm font-medium"
                  >
                    Começar teste de 7 dias
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionMarker number="05" total="05" label="FAQ" />
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-orange-600 mb-3">// Perguntas frequentes //</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950 tracking-tight">
                Tudo que você precisa <span className="text-gradient-orange">saber</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <FAQ />
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-orange-500/5" />
        
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 text-orange-300 px-3 py-1 rounded-full text-xs font-medium mb-6 border border-white/10">
              <Flame className="w-3 h-3" />
              Pronto para começar?
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Pare de soar como um robô.{" "}
              <span className="text-gradient-orange">Comece agora.</span>
            </h2>
            
            <p className="text-gray-400 mt-5 text-lg max-w-xl mx-auto">
              Junte-se a criadores que já transformaram seus posts genéricos em 
              conteúdo que conecta de verdade.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Link
                href="/register"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold shadow-xl"
              >
                Criar conta grátis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-sm text-gray-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                7 dias grátis no Pro — sem cartão
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-base font-bold text-gray-900">
                  Humaniz<span className="text-orange-500">.ai</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transforme seus textos em conteúdo autêntico e humano com IA.
              </p>
            </div>

            {/* Produto */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Produto</h4>
              <ul className="space-y-2.5">
                <li><a href="#demo" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Playground</a></li>
                <li><a href="#features" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Preços</a></li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Recursos</h4>
              <ul className="space-y-2.5">
                <li><a href="#faq" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">FAQ</a></li>
                <li><Link href="/login" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Login</Link></li>
                <li><Link href="/register" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">Criar conta</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2.5">
                <li><span className="text-sm text-gray-400">Termos de Uso</span></li>
                <li><span className="text-sm text-gray-400">Privacidade</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Humaniz.ai. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-gray-300">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Todos os sistemas operacionais
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
