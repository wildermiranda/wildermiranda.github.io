import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJETOS, getProjetoBySlug } from "@/data/projetos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJETOS.map((projeto) => ({ slug: projeto.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const projeto = getProjetoBySlug(slug);

  if (!projeto) {
    return { title: "Projeto não encontrado | Wilder Miranda" };
  }

  return {
    title: `${projeto.title} | Wilder Miranda`,
    description: projeto.lead,
  };
}

export default async function ProjetoPage({ params }: PageProps) {
  const { slug } = await params;
  const projeto = getProjetoBySlug(slug);

  if (!projeto) {
    notFound();
  }

  const nextProjeto = getProjetoBySlug(projeto.nextSlug);

  return (
    <div className="max-w-[40rem] mx-auto px-[1.15rem] sm:px-6 pt-10 sm:pt-20 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]">
      <Link
        href="/#portfolio"
        className="inline-flex items-center min-h-[2.75rem] pr-2 text-[#555555] hover:text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px]"
      >
        Voltar
      </Link>

      <header className="mt-5 sm:mt-7">
        <h1 className="text-[1.25rem] font-bold leading-[1.25] tracking-[-0.01em] text-[#111111]">
          {projeto.title}
        </h1>
        <p className="mt-4 text-[1rem] leading-[1.55] text-[#555555]">
          {projeto.lead}
        </p>
      </header>

      <div className="mt-6 sm:mt-8 p-2 sm:p-[0.625rem] rounded-[14px] sm:rounded-[16px] bg-[#f6f6f6] border border-[rgba(128,128,128,0.2)]">
        <img
          src={projeto.coverSrc}
          alt={projeto.coverAlt}
          width={1600}
          height={900}
          decoding="async"
          className="block w-full h-auto max-h-[16rem] sm:max-h-[26rem] object-contain bg-white rounded-[8px] sm:rounded-[10px] border border-[rgba(128,128,128,0.2)]"
        />
      </div>

      <main>
        {/* ESPECIFICAÇÕES */}
        <section
          aria-labelledby="t-especificacoes"
          className="mt-12 sm:mt-16"
        >
          <h2
            id="t-especificacoes"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Especificações
          </h2>
          <dl className="grid gap-3">
            {projeto.specifications.map((spec, idx) => (
              <div
                key={spec.label}
                className={`grid grid-cols-1 gap-[0.1rem] ${
                  idx === projeto.specifications.length - 1
                    ? "pb-0 border-b-0"
                    : "pb-[0.65rem] border-b border-[#e5e5e5]"
                }`}
              >
                <dt className="text-[0.8rem] text-[#767676]">{spec.label}</dt>
                <dd className="text-[#111111]">
                  {spec.href ? (
                    <a
                      href={spec.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center min-h-[2.75rem] text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px] break-all"
                    >
                      {spec.value}
                    </a>
                  ) : (
                    spec.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* DESAFIO */}
        <section aria-labelledby="t-desafio" className="mt-12 sm:mt-16">
          <h2
            id="t-desafio"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Desafio
          </h2>
          <div className="space-y-4">
            {projeto.challenge.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* SOLUÇÃO */}
        <section aria-labelledby="t-solucao" className="mt-12 sm:mt-16">
          <h2
            id="t-solucao"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Solução
          </h2>

          {projeto.solution.paragraphs && (
            <div className="space-y-4">
              {projeto.solution.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}

          {projeto.solution.bullets && (
            <ul className="mt-3 space-y-[0.6rem]">
              {projeto.solution.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-[1.1rem] before:content-['–'] before:absolute before:left-0 before:text-[#767676]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          )}

          {projeto.solution.steps && (
            <ol className="grid gap-5 mt-3">
              {projeto.solution.steps.map((step) => (
                <li
                  key={step.label}
                  className="grid grid-cols-1 sm:grid-cols-[10rem_minmax(0,2fr)] gap-x-6 gap-y-[0.3rem] sm:gap-y-5"
                >
                  <div className="text-[0.82rem] sm:text-[0.92rem] font-semibold sm:font-normal text-[#767676] sm:text-[#555555] tabular-nums">
                    {step.label}
                  </div>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          )}
        </section>

        {/* RESULTADO */}
        <section aria-labelledby="t-resultado" className="mt-12 sm:mt-16">
          <h2
            id="t-resultado"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Resultado
          </h2>
          <div className="space-y-4">
            {projeto.result.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </section>
      </main>

      {nextProjeto && (
        <nav aria-label="Outros projetos" className="mt-12 sm:mt-16">
          <div className="grid gap-3">
            <div className="grid grid-cols-1 gap-[0.1rem]">
              <span className="text-[0.8rem] text-[#767676]">
                Próximo projeto
              </span>
              <Link
                href={`/projetos/${nextProjeto.slug}`}
                className="inline-flex items-center min-h-[2.75rem] text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px]"
              >
                {nextProjeto.title}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}