import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { BarChart3, TrendingUp, ThumbsUp, MessageCircle, Share2, Eye } from "lucide-react";

export default async function AnalyticsPage() {
  const session = await auth();

  const posts = await prisma.post.findMany({
    where: { userId: session?.user?.id! },
    orderBy: { createdAt: "desc" },
  });

  const totalImpressions = posts.reduce((s, p) => s + p.impressions, 0);
  const totalLikes = posts.reduce((s, p) => s + p.likes, 0);
  const totalComments = posts.reduce((s, p) => s + p.comments, 0);
  const totalShares = posts.reduce((s, p) => s + p.shares, 0);

  const avgHumanScore =
    posts.filter((p) => p.humanScore).length > 0
      ? posts.reduce((s, p) => s + (p.humanScore || 0), 0) /
        posts.filter((p) => p.humanScore).length
      : 0;

  const metrics = [
    { label: "Impressões", value: totalImpressions, icon: Eye, color: "text-blue-600 bg-blue-50" },
    { label: "Curtidas", value: totalLikes, icon: ThumbsUp, color: "text-green-600 bg-green-50" },
    { label: "Comentários", value: totalComments, icon: MessageCircle, color: "text-purple-600 bg-purple-50" },
    { label: "Compartilhamentos", value: totalShares, icon: Share2, color: "text-amber-600 bg-amber-50" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">
          Acompanhe o desempenho dos seus posts humanizados.
        </p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${m.color}`}>
                <m.icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  {m.value.toLocaleString("pt-BR")}
                </p>
                <p className="text-xs text-gray-500">{m.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Human score overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            <h2 className="font-semibold text-gray-900">Score de Humanização</h2>
          </div>
          <div className="flex items-end gap-4">
            <span className="text-5xl font-bold text-orange-600">
              {Math.round(avgHumanScore * 100)}%
            </span>
            <span className="text-sm text-gray-500 mb-2">
              média dos textos originais
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Quanto menor este número, mais a IA te ajudou a melhorar o texto.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="w-5 h-5 text-orange-600" />
            <h2 className="font-semibold text-gray-900">Resumo</h2>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total de posts</span>
              <span className="font-semibold text-gray-900">{posts.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Publicados</span>
              <span className="font-semibold text-gray-900">
                {posts.filter((p) => p.status === "PUBLISHED").length}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Engajamento total</span>
              <span className="font-semibold text-gray-900">
                {(totalLikes + totalComments + totalShares).toLocaleString("pt-BR")}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Taxa de engajamento</span>
              <span className="font-semibold text-gray-900">
                {totalImpressions > 0
                  ? (
                      ((totalLikes + totalComments + totalShares) /
                        totalImpressions) *
                      100
                    ).toFixed(1)
                  : "0"}
                %
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Post performance table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Performance por post</h2>
        </div>

        {posts.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 text-sm">Nenhum post para analisar.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Texto
                  </th>
                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Score
                  </th>
                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    👍
                  </th>
                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    💬
                  </th>
                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    🔄
                  </th>
                  <th className="px-5 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {posts.slice(0, 20).map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3 max-w-xs truncate text-gray-900">
                      {post.finalText || post.originalText}
                    </td>
                    <td className="px-5 py-3 text-center">
                      {post.humanScore
                        ? `${Math.round(post.humanScore * 100)}%`
                        : "—"}
                    </td>
                    <td className="px-5 py-3 text-center text-gray-600">
                      {post.likes}
                    </td>
                    <td className="px-5 py-3 text-center text-gray-600">
                      {post.comments}
                    </td>
                    <td className="px-5 py-3 text-center text-gray-600">
                      {post.shares}
                    </td>
                    <td className="px-5 py-3 text-center">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          post.status === "PUBLISHED"
                            ? "bg-green-100 text-green-700"
                            : post.status === "SCHEDULED"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
