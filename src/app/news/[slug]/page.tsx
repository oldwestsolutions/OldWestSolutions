import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImmersiveSiteShell from "@/components/ImmersiveSiteShell";
import { getTrendingArticle, trendingArticles } from "@/lib/trendingNews";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return trendingArticles.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getTrendingArticle(params.slug);
  if (!article) return { title: "News" };
  return {
    title: article.headline,
    description: article.dek,
    alternates: { canonical: `/news/${params.slug}` },
    openGraph: {
      title: article.headline,
      description: article.dek,
      url: `/news/${params.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function TrendingArticlePage({ params }: Props) {
  const article = getTrendingArticle(params.slug);
  if (!article) notFound();

  return (
    <ImmersiveSiteShell>
      <article className="border-b border-white/[0.06] bg-[#08090e]">
        <div className="border-b border-white/[0.08] px-4 py-4 sm:px-8">
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 text-[11px] text-text-muted">
            <Link href="/news" className="font-medium text-accent hover:text-accent-muted">
              ← News feed
            </Link>
            <span className="tabular-nums">{formatDate(article.publishedAt)}</span>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 sm:py-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{article.category}</span>
          <h1 className="mt-4 font-serif text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl md:text-[2.5rem]">
            {article.headline}
          </h1>
          <p className="mt-2 text-sm text-text-muted">{article.byline}</p>
          <p className="mt-8 text-lg leading-relaxed text-text-secondary">{article.dek}</p>
          <div className="prose prose-invert mt-10 max-w-none space-y-6 text-sm leading-relaxed text-text-muted">
            {article.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 border-t border-white/[0.08] pt-8">
            <Link
              href="/news"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.12] px-6 text-sm font-medium text-text-secondary hover:border-accent/30 hover:text-white"
            >
              Back to all news
            </Link>
          </div>
        </div>
      </article>
    </ImmersiveSiteShell>
  );
}
