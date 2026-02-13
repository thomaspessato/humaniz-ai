import { Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900">
              Humaniz<span className="text-orange-500">.ai</span>
            </span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h1>
        <p className="text-gray-500 mb-8">Última atualização: 13 de fevereiro de 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Ao acessar e utilizar a plataforma Humaniz.ai (&quot;Serviço&quot;), você concorda em cumprir e estar vinculado a estes Termos de Uso.
              Se você não concordar com qualquer parte destes termos, não deverá utilizar o Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Descrição do Serviço</h2>
            <p className="text-gray-600 leading-relaxed">
              O Humaniz.ai é uma plataforma de inteligência artificial que auxilia na criação e humanização de textos para redes sociais profissionais,
              especialmente LinkedIn. O Serviço inclui, mas não se limita a: reescrita de textos com IA, agendamento de publicações, análise de
              engajamento e métricas de desempenho.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cadastro e Conta</h2>
            <p className="text-gray-600 leading-relaxed">
              Para utilizar o Serviço, você deve criar uma conta fornecendo informações verdadeiras, precisas e completas.
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorram em sua conta.
              Notifique-nos imediatamente sobre qualquer uso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Planos e Pagamentos</h2>
            <p className="text-gray-600 leading-relaxed">
              O Humaniz.ai oferece um período de teste gratuito de 7 dias. Após esse período, o acesso ao Serviço estará
              condicionado à adesão a um dos planos pagos disponíveis. Os valores e condições de cada plano são apresentados
              na página de preços. Reservamo-nos o direito de alterar os preços mediante aviso prévio de 30 dias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Uso Aceitável</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Ao utilizar o Serviço, você concorda em não:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Utilizar o Serviço para gerar conteúdo ilegal, difamatório, discriminatório ou que viole direitos de terceiros;</li>
              <li>Tentar acessar sistemas ou dados não autorizados;</li>
              <li>Compartilhar credenciais de acesso com terceiros;</li>
              <li>Utilizar bots, scrapers ou ferramentas automatizadas para acessar o Serviço sem autorização;</li>
              <li>Revender ou redistribuir o Serviço sem autorização prévia por escrito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Propriedade Intelectual</h2>
            <p className="text-gray-600 leading-relaxed">
              O conteúdo gerado pela IA com base em seus textos pertence a você. A plataforma Humaniz.ai, incluindo seu código,
              design, marca e tecnologia, são de propriedade exclusiva da Humaniz.ai. Você recebe uma licença limitada, não
              exclusiva e intransferível para uso pessoal ou comercial do conteúdo gerado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 leading-relaxed">
              O Serviço é fornecido &quot;como está&quot;. Não garantimos que o conteúdo gerado pela IA será perfeito, adequado a
              qualquer finalidade específica, ou livre de erros. Você é responsável por revisar e aprovar todo conteúdo antes de
              publicá-lo. Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais ou consequenciais
              decorrentes do uso do Serviço.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Cancelamento</h2>
            <p className="text-gray-600 leading-relaxed">
              Você pode cancelar sua conta a qualquer momento. Após o cancelamento, seus dados serão mantidos por 30 dias
              para possibilitar a recuperação, sendo excluídos permanentemente após esse período. Reembolsos serão analisados
              caso a caso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Alterações nos Termos</h2>
            <p className="text-gray-600 leading-relaxed">
              Reservamo-nos o direito de modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas
              por email ou notificação na plataforma com pelo menos 15 dias de antecedência. O uso continuado do Serviço após
              as alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Legislação Aplicável</h2>
            <p className="text-gray-600 leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais disputas serão resolvidas no
              foro da comarca da sede da empresa, com renúncia a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Em caso de dúvidas sobre estes Termos, entre em contato conosco pelo email:{" "}
              <a href="mailto:contato@humaniz.ai" className="text-orange-600 hover:text-orange-700">contato@humaniz.ai</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
