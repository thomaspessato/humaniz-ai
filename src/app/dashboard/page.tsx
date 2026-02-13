import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  PenLine,
  Calendar,
  BarChart3,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();
  const userId = session?.user?.id;

  const [totalPosts, scheduledPosts, publishedPosts, recentPosts] =
    await Promise.all([
      prisma.post.count({ where: { userId: userId! } }),
      prisma.post.count({
        where: { userId: userId!, status: "SCHEDULED" },
      }),
      prisma.post.count({
        where: { userId: userId!, status: "PUBLISHED" },
      }),
      prisma.post.findMany({
        where: { userId: userId! },
        orderBy: { createdAt: "desc" },
        take: 5,
      }),
    ]);

  const totalEngagement = recentPosts.reduce(
    (sum, p) => sum + p.likes + p.comments + p.shares,
    0
  );

  const stats = [
    {
      label: "Total de posts",
      value: totalPosts,
      icon: PenLine,
      color: "bg-orange-50 text-orange-600",
    },
    {
      label: "Agendados",
      value: scheduledPosts,
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      label: "Publicados",
      value: publishedPosts,
      icon: CheckCircle2,
      color: "bg-green-50 text-green-600",
    },
    {
      label: "Engajamento",
      value: totalEngagement,
      icon: TrendingUp,
      color: "bg-purple-50 text-purple-600",
    },
  ];

  const statusLabels: Record<string, string> = {
    DRAFT: "Rascunho",
    REWRITING: "Reescrevendo",
    READY: "Pronto",
    SCHEDULED: "Agendado",
    PUBLISHED: "Publicado",
    FAILED: "Falhou",
  };

  const statusColors: Record<string, string> = {
    DRAFT: "bg-gray-100 text-gray-700",
    REWRITING: "bg-blue-100 text-blue-700",
    READY: "bg-orange-100 text-orange-700",
    SCHEDULED: "bg-amber-100 text-amber-700",
    PUBLISHED: "bg-green-100 text-green-700",
    FAILED: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Olá, {session?.user?.name || "criador"} 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Transforme seus textos e acompanhe seu progresso.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}
              >
                <stat.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/dashboard/editor"
          className="bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl p-5 shadow-sm transition-all group"
        >
          <PenLine className="w-6 h-6 mb-2" />
          <h3 className="font-semibold">Escrever novo post</h3>
          <p className="text-orange-200 text-sm mt-1">
            Cole seu rascunho e humanize com IA
          </p>
        </Link>
        <Link
          href="/dashboard/schedule"
          className="bg-white hover:bg-gray-50 rounded-xl border border-gray-200 p-5 shadow-sm transition-colors"
        >
          <Calendar className="w-6 h-6 mb-2 text-amber-600" />
          <h3 className="font-semibold text-gray-900">Ver agendados</h3>
          <p className="text-gray-500 text-sm mt-1">
            {scheduledPosts} posts na fila
          </p>
        </Link>
        <Link
          href="/dashboard/analytics"
          className="bg-white hover:bg-gray-50 rounded-xl border border-gray-200 p-5 shadow-sm transition-colors"
        >
          <BarChart3 className="w-6 h-6 mb-2 text-purple-600" />
          <h3 className="font-semibold text-gray-900">Analytics</h3>
          <p className="text-gray-500 text-sm mt-1">
            Veja seu desempenho
          </p>
        </Link>
      </div>

      {/* Recent posts */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Posts recentes</h2>
        </div>
        {recentPosts.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 text-sm">
              Nenhum post ainda. Que tal{" "}
              <Link
                href="/dashboard/editor"
                className="text-orange-600 hover:underline"
              >
                criar o primeiro
              </Link>
              ?
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="px-5 py-4 flex items-center justify-between"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-900 truncate">
                    {post.finalText || post.originalText}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <span
                  className={`ml-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColors[post.status]}`}
                >
                  {statusLabels[post.status]}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
