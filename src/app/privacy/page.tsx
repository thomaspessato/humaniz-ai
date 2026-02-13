import { Sparkles } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
};

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Política de Privacidade</h1>
        <p className="text-gray-500 mb-8">Última atualização: 13 de fevereiro de 2026</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introdução</h2>
            <p className="text-gray-600 leading-relaxed">
              A Humaniz.ai (&quot;nós&quot;, &quot;nosso&quot;) valoriza a privacidade de seus usuários. Esta Política de Privacidade descreve como
              coletamos, usamos, armazenamos e protegemos suas informações pessoais ao utilizar nossa plataforma. Esta política está
              em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Dados que Coletamos</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Coletamos os seguintes tipos de dados:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Dados de cadastro:</strong> nome, endereço de email e senha (armazenada de forma criptografada);</li>
              <li><strong>Dados de autenticação social:</strong> ao conectar via Google ou LinkedIn, recebemos seu nome, email e foto de perfil conforme as permissões concedidas;</li>
              <li><strong>Dados de uso:</strong> textos inseridos na plataforma para reescrita, posts agendados, métricas de engajamento;</li>
              <li><strong>Dados técnicos:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas e tempo de sessão;</li>
              <li><strong>Cookies:</strong> utilizamos cookies essenciais para autenticação e funcionamento da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Como Usamos seus Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-3">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fornecer e manter o Serviço funcionando;</li>
              <li>Processar seus textos com inteligência artificial para gerar conteúdo humanizado;</li>
              <li>Gerenciar sua conta e autenticação;</li>
              <li>Enviar notificações relevantes sobre seu uso (agendamentos, verificação de email, recuperação de senha);</li>
              <li>Melhorar e personalizar a experiência do usuário;</li>
              <li>Gerar estatísticas agregadas e anônimas sobre o uso da plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Compartilhamento de Dados</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Não vendemos seus dados pessoais. Podemos compartilhar informações com:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Provedores de serviço:</strong> utilizamos serviços de terceiros para hospedagem (Vercel), banco de dados (Neon), processamento de IA (OpenAI) e envio de emails (Resend). Esses provedores processam dados estritamente conforme nossas instruções;</li>
              <li><strong>Obrigações legais:</strong> podemos divulgar dados se exigido por lei, ordem judicial ou autoridade competente;</li>
              <li><strong>Proteção de direitos:</strong> quando necessário para proteger nossos direitos, propriedade ou segurança.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Processamento de Textos pela IA</h2>
            <p className="text-gray-600 leading-relaxed">
              Os textos que você envia para reescrita são processados por modelos de inteligência artificial de terceiros (OpenAI).
              Esses textos são enviados de forma segura e não são utilizados para treinar modelos de IA. Não armazenamos o conteúdo
              dos textos além do necessário para fornecer o Serviço e o histórico de posts na sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Segurança dos Dados</h2>
            <p className="text-gray-600 leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger seus dados, incluindo: criptografia de senhas com bcrypt,
              comunicação via HTTPS, tokens JWT para autenticação, acesso restrito ao banco de dados e monitoramento de segurança.
              Nenhum sistema é 100% seguro, mas nos empenhamos em utilizar as melhores práticas do mercado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Seus Direitos (LGPD)</h2>
            <p className="text-gray-600 leading-relaxed mb-3">
              Conforme a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Confirmação e acesso:</strong> confirmar se processamos seus dados e acessá-los;</li>
              <li><strong>Correção:</strong> corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li><strong>Anonimização ou exclusão:</strong> solicitar a anonimização ou exclusão de dados desnecessários;</li>
              <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados para outro fornecedor;</li>
              <li><strong>Revogação do consentimento:</strong> revogar seu consentimento a qualquer momento;</li>
              <li><strong>Eliminação:</strong> solicitar a exclusão completa de seus dados pessoais.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              Para exercer qualquer desses direitos, entre em contato pelo email:{" "}
              <a href="mailto:privacidade@humaniz.ai" className="text-orange-600 hover:text-orange-700">privacidade@humaniz.ai</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Retenção de Dados</h2>
            <p className="text-gray-600 leading-relaxed">
              Mantemos seus dados pessoais enquanto sua conta estiver ativa. Após exclusão da conta, seus dados serão retidos por
              30 dias para possibilitar recuperação e, após esse prazo, serão permanentemente excluídos. Dados agregados e
              anonimizados podem ser retidos indefinidamente para fins estatísticos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Cookies</h2>
            <p className="text-gray-600 leading-relaxed">
              Utilizamos apenas cookies essenciais necessários para o funcionamento da plataforma (autenticação e sessão).
              Não utilizamos cookies de rastreamento ou publicidade. Ao usar nossa plataforma, você consente com o uso desses
              cookies essenciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Menores de Idade</h2>
            <p className="text-gray-600 leading-relaxed">
              O Serviço não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se tomarmos
              conhecimento de que coletamos dados de um menor, tomaremos medidas para excluí-los imediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">11. Alterações nesta Política</h2>
            <p className="text-gray-600 leading-relaxed">
              Esta Política pode ser atualizada periodicamente. Alterações significativas serão comunicadas por email ou
              notificação na plataforma. Recomendamos revisar esta página regularmente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">12. Contato</h2>
            <p className="text-gray-600 leading-relaxed">
              Para questões sobre esta Política de Privacidade ou sobre o tratamento de seus dados pessoais, entre em contato:{" "}
              <a href="mailto:privacidade@humaniz.ai" className="text-orange-600 hover:text-orange-700">privacidade@humaniz.ai</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
