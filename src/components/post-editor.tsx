"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScoreBadge } from "@/components/ui/score-badge";
import { Sparkles, Copy, Check, Calendar, Save } from "lucide-react";

interface Version {
  text: string;
  variant: string;
}

interface Scores {
  humanScore: number;
  clarityScore: number;
  ctaScore: number;
}

export function PostEditor() {
  const [originalText, setOriginalText] = useState("");
  const [versions, setVersions] = useState<Version[]>([]);
  const [scores, setScores] = useState<Scores | null>(null);
  const [selectedVersion, setSelectedVersion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");

  async function handleRewrite() {
    if (originalText.trim().length < 10) {
      setError("Escreva pelo menos 10 caracteres");
      return;
    }

    setLoading(true);
    setError("");
    setVersions([]);
    setScores(null);

    try {
      const res = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: originalText }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao reescrever");
      }

      const data = await res.json();
      setVersions(data.versions);
      setScores(data.scores);
      setSelectedVersion(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (versions[selectedVersion]) {
      await navigator.clipboard.writeText(versions[selectedVersion].text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleSave(scheduled: boolean = false) {
    if (!versions[selectedVersion]) return;

    if (scheduled) {
      setSaving(true);
    } else {
      setSaving(true);
    }

    try {
      const body: Record<string, unknown> = {
        originalText,
        rewrittenText: versions[selectedVersion].text,
        finalText: versions[selectedVersion].text,
        humanScore: scores?.humanScore,
        clarityScore: scores?.clarityScore,
        ctaScore: scores?.ctaScore,
        versions: versions.map((v) => ({ text: v.text, variant: v.variant })),
      };

      if (scheduled && scheduleDate) {
        body.scheduledAt = new Date(scheduleDate).toISOString();
      }

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao salvar");
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
      setScheduling(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao salvar o post");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Escrever Post</h1>
        <p className="text-gray-500 mt-1">
          Cole seu rascunho e a IA vai gerar versões mais humanas e engajantes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
            <Textarea
              label="Seu rascunho"
              placeholder="Cole aqui o texto que quer humanizar para o LinkedIn...

Ex: Estou feliz em anunciar que nossa empresa atingiu a marca de 10.000 clientes. O sucesso é resultado do trabalho duro de toda a equipe."
              rows={10}
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              maxLength={5000}
              charCount
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <Button
              onClick={handleRewrite}
              loading={loading}
              size="lg"
              className="w-full mt-4"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              {loading ? "Humanizando..." : "Humanizar texto"}
            </Button>
          </div>

          {/* Scores do original */}
          {scores && (
            <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Análise do seu texto original
              </h3>
              <div className="flex justify-around">
                <ScoreBadge label="Humano" score={scores.humanScore} />
                <ScoreBadge label="Clareza" score={scores.clarityScore} />
                <ScoreBadge label="CTA" score={scores.ctaScore} />
              </div>
            </div>
          )}
        </div>

        {/* Right: Output */}
        <div className="space-y-4">
          {versions.length > 0 && (
            <>
              {/* Version tabs */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="flex border-b border-gray-200">
                  {versions.map((v, i) => (
                    <button
                      key={v.variant}
                      onClick={() => setSelectedVersion(i)}
                      className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                        selectedVersion === i
                          ? "bg-orange-50 text-orange-700 border-b-2 border-orange-600"
                          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      Versão {v.variant}
                    </button>
                  ))}
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
                    {versions[selectedVersion]?.text}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-5 py-3 border-t border-gray-100 bg-gray-50">
                  <Button variant="secondary" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <Check className="w-4 h-4 mr-1 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 mr-1" />
                    )}
                    {copied ? "Copiado!" : "Copiar"}
                  </Button>

                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setScheduling(!scheduling)}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Agendar
                  </Button>

                  <Button
                    size="sm"
                    loading={saving}
                    onClick={() => handleSave(false)}
                  >
                    <Save className="w-4 h-4 mr-1" />
                    {saved ? "Salvo!" : "Salvar"}
                  </Button>
                </div>
              </div>

              {/* Schedule */}
              {scheduling && (
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
                  <h3 className="text-sm font-medium text-gray-700">
                    Agendar publicação
                  </h3>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                      {error}
                    </div>
                  )}
                  <input
                    type="datetime-local"
                    value={scheduleDate}
                    onChange={(e) => setScheduleDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                  <Button
                    size="sm"
                    loading={saving}
                    onClick={() => handleSave(true)}
                    disabled={!scheduleDate}
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Confirmar agendamento
                  </Button>
                </div>
              )}
            </>
          )}

          {!versions.length && !loading && (
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenLine className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">
                As versões humanizadas vão aparecer aqui
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Cole seu rascunho e clique em &quot;Humanizar texto&quot;
              </p>
            </div>
          )}

          {loading && (
            <div className="bg-white rounded-xl border border-gray-200 p-10 shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Sparkles className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-sm font-medium text-gray-900">
                Humanizando seu texto...
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Gerando 3 versões mais naturais e engajantes
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PenLine(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 20h9" />
      <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
    </svg>
  );
}
