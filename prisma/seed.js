const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Populando banco de dados...\n');

  // ── Limpa dados existentes ──
  await prisma.postVersion.deleteMany();
  await prisma.post.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  // ── Cria usuário de teste ──
  const password = await bcrypt.hash('teste123', 12);
  const user = await prisma.user.create({
    data: {
      name: 'Maria Silva',
      email: 'maria@teste.com',
      password,
      plan: 'trial',
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      postsThisMonth: 5,
    },
  });
  console.log(`✅ Usuário criado: ${user.email} (senha: teste123)`);

  // ── Cria posts de exemplo ──
  const posts = [
    {
      originalText:
        'Estou muito feliz em anunciar que fui promovido para Gerente de Produto na empresa XYZ. Foi uma jornada longa mas gratificante.',
      rewrittenText:
        'Depois de 3 anos construindo produtos que impactaram +500k usuários, assumi uma nova responsabilidade como Gerente de Produto na XYZ.\n\nO que aprendi nessa jornada:\n→ Ouvir o cliente vale mais que qualquer métrica\n→ Times diversos criam produtos melhores\n→ Falhar rápido não é permissão para falhar sempre\n\nGrato a cada pessoa que fez parte dessa história.',
      finalText: null,
      humanScore: 92,
      clarityScore: 88,
      ctaScore: 75,
      status: 'READY',
      platform: 'linkedin',
      impressions: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      clicks: 0,
    },
    {
      originalText:
        'A inteligência artificial vai mudar tudo. As empresas que não se adaptarem vão ficar para trás. É importante começar a usar IA agora.',
      rewrittenText:
        '85% das empresas do Fortune 500 já usam IA no dia a dia.\n\nMas aqui está o que ninguém fala:\n\nNão é sobre USAR IA. É sobre usar IA para resolver problemas REAIS.\n\nVi empresas gastarem milhões em chatbots que ninguém usa.\nE startups de 3 pessoas automatizarem processos que economizam 200h/mês.\n\nA diferença? Contexto > Tecnologia.\n\nQual problema real você resolveria com IA na sua empresa?',
      finalText:
        '85% das empresas do Fortune 500 já usam IA no dia a dia.\n\nMas aqui está o que ninguém fala:\n\nNão é sobre USAR IA. É sobre usar IA para resolver problemas REAIS.\n\nVi empresas gastarem milhões em chatbots que ninguém usa.\nE startups de 3 pessoas automatizarem processos que economizam 200h/mês.\n\nA diferença? Contexto > Tecnologia.\n\nQual problema real você resolveria com IA na sua empresa?',
      humanScore: 95,
      clarityScore: 91,
      ctaScore: 88,
      status: 'PUBLISHED',
      platform: 'linkedin',
      publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
      impressions: 12450,
      likes: 234,
      comments: 67,
      shares: 45,
      clicks: 189,
    },
    {
      originalText:
        'Estamos contratando desenvolvedores para trabalhar com React e Node.js. Se você tem experiência, entre em contato.',
      rewrittenText:
        'Procurando devs que amam construir produtos (não só código).\n\nNa @MinhaStartup, estamos montando o time que vai escalar de 10k para 1M de usuários.\n\nO que oferecemos:\n🏠 100% remoto\n💰 Salário competitivo + equity\n📚 Budget de aprendizado ilimitado\n🏖️ Férias flexíveis\n\nStack: React + Node.js + PostgreSQL\n\nNão precisa ser sênior. Precisa ter fome de aprender.\n\nComente "EU" que mando o link → ',
      finalText: null,
      humanScore: 89,
      clarityScore: 85,
      ctaScore: 94,
      status: 'SCHEDULED',
      scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      platform: 'linkedin',
      impressions: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      clicks: 0,
    },
    {
      originalText: 'Dica de produtividade: use o método Pomodoro para ser mais produtivo no trabalho.',
      rewrittenText: null,
      finalText: null,
      humanScore: null,
      clarityScore: null,
      ctaScore: null,
      status: 'DRAFT',
      platform: 'linkedin',
      impressions: 0,
      likes: 0,
      comments: 0,
      shares: 0,
      clicks: 0,
    },
    {
      originalText:
        'Liderança é sobre inspirar pessoas a darem o melhor de si. Bons líderes criam mais líderes, não seguidores.',
      rewrittenText:
        'O pior conselho que recebi sobre liderança:\n"Seja o mais inteligente da sala."\n\nO melhor conselho:\n"Contrate pessoas mais inteligentes que você. E saia do caminho."\n\nDepois de liderar times por 8 anos, descobri que:\n\n1. Vulnerabilidade gera confiança (não fraqueza)\n2. Perguntas > respostas\n3. O melhor resultado é quando seu time não precisa de você\n\nLiderança não é cargo. É comportamento diário.\n\nConcorda? Discorda? Comenta aqui 👇',
      finalText:
        'O pior conselho que recebi sobre liderança:\n"Seja o mais inteligente da sala."\n\nO melhor conselho:\n"Contrate pessoas mais inteligentes que você. E saia do caminho."\n\nDepois de liderar times por 8 anos, descobri que:\n\n1. Vulnerabilidade gera confiança (não fraqueza)\n2. Perguntas > respostas\n3. O melhor resultado é quando seu time não precisa de você\n\nLiderança não é cargo. É comportamento diário.\n\nConcorda? Discorda? Comenta aqui 👇',
      humanScore: 96,
      clarityScore: 93,
      ctaScore: 91,
      status: 'PUBLISHED',
      platform: 'linkedin',
      publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      impressions: 28900,
      likes: 512,
      comments: 143,
      shares: 89,
      clicks: 367,
    },
  ];

  for (const postData of posts) {
    const post = await prisma.post.create({
      data: {
        userId: user.id,
        ...postData,
      },
    });

    // Cria versões para posts que foram reescritos
    if (postData.rewrittenText) {
      await prisma.postVersion.createMany({
        data: [
          {
            postId: post.id,
            text: postData.rewrittenText,
            variant: 'A',
            score: postData.humanScore,
          },
          {
            postId: post.id,
            text: postData.rewrittenText.replace(/\n\n/g, '\n').slice(0, -20) + '\n\nO que você acha? Me conta nos comentários.',
            variant: 'B',
            score: (postData.humanScore || 85) - 3,
          },
          {
            postId: post.id,
            text: '📌 ' + postData.rewrittenText.split('\n')[0] + '\n\n' + postData.rewrittenText.split('\n').slice(1).join('\n'),
            variant: 'C',
            score: (postData.humanScore || 85) - 5,
          },
        ],
      });
    }

    console.log(`✅ Post criado: "${postData.originalText.slice(0, 50)}..." [${postData.status}]`);
  }

  // ── Resumo ──
  const totalUsers = await prisma.user.count();
  const totalPosts = await prisma.post.count();
  const totalVersions = await prisma.postVersion.count();

  console.log(`\n📊 Resumo:`);
  console.log(`   Usuários: ${totalUsers}`);
  console.log(`   Posts: ${totalPosts}`);
  console.log(`   Versões: ${totalVersions}`);
  console.log(`\n🎉 Seed concluído!`);
  console.log(`\n📝 Para testar:`);
  console.log(`   Email: maria@teste.com`);
  console.log(`   Senha: teste123`);
  console.log(`   URL:   http://localhost:3000/login`);
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
