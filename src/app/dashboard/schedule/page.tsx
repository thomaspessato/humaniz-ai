import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Calendar, Clock } from "lucide-react";

export default async function SchedulePage() {
  const session = await auth();

  const scheduledPosts = await prisma.post.findMany({
    where: {
      userId: session?.user?.id!,
      status: { in: ["SCHEDULED", "READY"] },
    },
    orderBy: { scheduledAt: "asc" },
  });

  const publishedPosts = await prisma.post.findMany({
    where: {
      userId: session?.user?.id!,
      status: "PUBLISHED",
    },
    orderBy: { publishedAt: "desc" },
    take: 10,
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Posts Agendados</h1>
        <p className="text-gray-500 mt-1">
          Gerencie sua fila de publicações no LinkedIn.
        </p>
      </div>

      {/* Scheduled */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-600" />
          <h2 className="font-semibold text-gray-900">Na fila</h2>
          <span className="text-xs text-gray-400 ml-auto">
            {scheduledPosts.length} post(s)
          </span>
        </div>

        {scheduledPosts.length === 0 ? (
          <div className="p-10 text-center">
            <Calendar className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">
              Nenhum post agendado. Vá ao Editor para criar e agendar.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {scheduledPosts.map((post) => (
              <div key={post.id} className="px-5 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-gray-900 line-clamp-2">
                      {post.finalText || post.rewrittenText || post.originalText}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      {post.scheduledAt && (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-700 bg-amber-50 rounded-full px-2 py-0.5">
                          <Clock className="w-3 h-3" />
                          {new Date(post.scheduledAt).toLocaleString("pt-BR", {
                            day: "2-digit",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">
                        {post.platform}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-100 text-amber-700">
                    {post.status === "SCHEDULED" ? "Agendado" : "Pronto"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Published */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-green-600" />
          <h2 className="font-semibold text-gray-900">Publicados</h2>
        </div>

        {publishedPosts.length === 0 ? (
          <div className="p-10 text-center">
            <p className="text-gray-500 text-sm">
              Nenhum post publicado ainda.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {publishedPosts.map((post) => (
              <div key={post.id} className="px-5 py-4">
                <p className="text-sm text-gray-900 line-clamp-2">
                  {post.finalText || post.originalText}
                </p>
                <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                  {post.publishedAt && (
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                    </span>
                  )}
                  <span>👍 {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>🔄 {post.shares}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
