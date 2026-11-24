import Link from "next/link";
import { PROJETOS } from "@/data/projetos";

const GALLERY_PHOTOS = [
  { src: "/1.jpg", alt: "Foto 1 da vivência na operação" },
  { src: "/2.jpg", alt: "Foto 2 da vivência na operação" },
  { src: "/3.jpg", alt: "Foto 3 da vivência na operação" },
  { src: "/4.jpg", alt: "Foto 4 da vivência na operação" },
];

export default function HomePage() {
  return (
    <div
      id="inicio"
      className="max-w-[40rem] mx-auto px-[1.15rem] sm:px-6 pt-10 sm:pt-20 pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))]"
    >
      {/* APRESENTAÇÃO */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center gap-[1.1rem] sm:gap-6">
        <img
          src="/me.jpg"
          alt="Foto de perfil de Wilder Miranda"
          width={272}
          height={272}
          decoding="async"
          className="shrink-0 w-[6.25rem] h-[6.25rem] sm:w-[8.5rem] sm:h-[8.5rem] object-cover object-top rounded-full outline outline-1 -outline-offset-1 outline-[rgba(128,128,128,0.2)]"
        />
        <div>
          <h1 className="text-[1.45rem] sm:text-[1.5rem] font-bold leading-[1.25] tracking-[-0.01em] text-[#111111]">
            Wilder Miranda
          </h1>
          <p className="text-[0.98rem] sm:text-[1rem] leading-[1.4] text-[#555555]">
            Analista de Dados
          </p>
          <a
            href="/Wilder Miranda.pdf"
            download="Wilder Miranda.pdf"
            className="inline-flex items-center min-h-[2.75rem] sm:min-h-[2.5rem] mt-3 px-[1.1rem] sm:px-4 py-2 rounded-full bg-[#f6f6f6] hover:bg-[#ececec] text-[#949394] hover:text-[#111111] font-medium no-underline transition-colors"
          >
            Baixar currículo
          </a>
        </div>
      </header>

      <main>
        {/* SOBRE */}
        <section
          id="sobre"
          aria-labelledby="titulo-sobre"
          className="mt-12 sm:mt-16 scroll-mt-5 sm:scroll-mt-8"
        >
          <h2
            id="titulo-sobre"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Sobre
          </h2>
          <div className="space-y-4">
            <p>
              Analista com experiência em logística e na área comercial do Grupo
              GPS, empresa especializada em serviços terceirizados. Como Analista
              Comercial, desenvolvi uma ferramenta de automação em Excel que
              reduziu em 80% o tempo de elaboração de propostas. Antes, como
              Analista de Projetos, trabalhei com mapeamento de processos
              (BPMN), Cronoanálise e indicadores para áreas técnicas e gestores.
            </p>
            <p>
              Atualmente direciono essa base para a análise de dados, resolvendo
              problemas de negócio com SQL, Python e Power BI. Construí uma
              solução de dados completa respondendo os questionamentos de uma
              base de vendas de automóveis com consultas a um banco de dados{" "}
              <b className="font-medium text-[#111111]">PostgreSQL</b> para
              extração dos dados e um dashboard interativo com{" "}
              <b className="font-medium text-[#111111]">Python</b> para
              visualização e exploração dos principais indicadores de desempenho,
              que você pode conferir no portfólio.
            </p>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section
          id="experiencia"
          aria-labelledby="titulo-experiencia"
          className="mt-12 sm:mt-16 scroll-mt-5 sm:scroll-mt-8"
        >
          <h2
            id="titulo-experiencia"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Experiência
          </h2>

          <ol className="timeline">
            <li>
              <h3 className="text-[1.02rem] sm:text-[1.0625rem] font-bold leading-[1.35] tracking-[-0.01em] text-[#111111]">
                Analista Comercial
              </h3>
              <div className="text-[0.82rem] sm:text-[0.85rem] text-[#767676] mt-[0.15rem] mb-[0.45rem] tabular-nums">
                Grupo GPS • Julho 2025 – Setembro 2026
              </div>
              <div className="text-[0.82rem] sm:text-[0.85rem] font-semibold text-[#111111] mb-[0.85rem]">
                Excel • PowerPoint • Orçamentação
              </div>
              <ul className="role-list">
                <li>
                  Desenvolvi uma ferramenta de automação orçamentária em Excel
                  com preenchimento dinâmico, que centraliza a base de custos de
                  mão de obra e equipamentos e distribui as informações para as
                  demais frentes da proposta, reduzindo em{" "}
                  <b className="font-medium text-[#111111]">80%</b> o tempo de
                  elaboração de propostas comerciais.
                </li>
                <li>
                  Criei uma solução em Excel que centraliza o status de todos os
                  contratos da companhia, permitindo ao Diretor acompanhar a
                  acuracidade dos contratos regularizados e atuar sobre
                  pendências (sem cláusula de reajuste, sem assinatura ou com
                  cliente inexistente).
                </li>
                <li>
                  Elaborei minutas contratuais e apresentações comerciais em
                  PowerPoint, traduzindo requisitos técnicos em documentos claros
                  para clientes e parceiros.
                </li>
                <li>
                  Alinhei as demandas comerciais com a equipe operacional para
                  garantir a execução dos serviços conforme o proposto.
                </li>
              </ul>
            </li>

            <li>
              <h3 className="text-[1.02rem] sm:text-[1.0625rem] font-bold leading-[1.35] tracking-[-0.01em] text-[#111111]">
                Analista de Projetos Júnior
              </h3>
              <div className="text-[0.82rem] sm:text-[0.85rem] text-[#767676] mt-[0.15rem] mb-[0.45rem] tabular-nums">
                Grupo GPS • Novembro 2024 – Julho 2025
              </div>
              <div className="text-[0.82rem] sm:text-[0.85rem] font-semibold text-[#111111] mb-[0.85rem]">
                BPMN • Cronoanálise • Excel
              </div>
              <ul className="role-list">
                <li>
                  Mapeei e diagnostiquei processos operacionais da área de
                  logística, identificando gargalos e oportunidades de aumento do
                  rendimento operacional.
                </li>
                <li>
                  Padronizei processos críticos com fluxogramas em BPMN e POPs
                  (Procedimentos Operacionais Padrão), garantindo retenção de
                  conhecimento e conformidade operacional.
                </li>
                <li>
                  Conduzi estudos de Tempos e Movimentos (Cronoanálise) para
                  definir KPIs de produtividade, otimizar postos de trabalho e
                  dimensionar headcount.
                </li>
                <li>
                  Consolidei indicadores em Excel, transformando dados brutos em
                  informações para apoiar a tomada de decisão gerencial.
                </li>
                <li>
                  Levantei requisitos com a equipe operacional, traduzindo
                  necessidades em soluções técnicas.
                </li>
              </ul>
            </li>
          </ol>

          <div
            className="gallery"
            role="group"
            aria-label="Fotos da vivência na operação"
          >
            {GALLERY_PHOTOS.map((photo) => (
              <figure key={photo.src} className="gallery__item">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </figure>
            ))}
          </div>
          <p className="text-[0.8rem] sm:text-[0.85rem] text-left sm:text-right text-[#767676]">
            Grupo GPS
          </p>
        </section>

        {/* PORTFÓLIO */}
        <section
          id="portfolio"
          aria-labelledby="titulo-portfolio"
          className="mt-12 sm:mt-16 scroll-mt-5 sm:scroll-mt-8"
        >
          <h2
            id="titulo-portfolio"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Portfólio
          </h2>

          <ul className="grid grid-cols-1 gap-4">
            {PROJETOS.map((projeto) => (
              <li key={projeto.slug} className="flex">
                <Link
                  href={`/projetos/${projeto.slug}`}
                  className="group flex-1 flex flex-col gap-3 p-[1.1rem] sm:px-[1.3rem] sm:py-[1.2rem] rounded-[14px] sm:rounded-[16px] bg-[#f6f6f6] hover:bg-[#ececec] active:bg-[#ececec] text-[#555555] no-underline transition-colors"
                >
                  <div className="flex-1 flex flex-col gap-[0.35rem]">
                    <h3 className="text-[1rem] font-semibold leading-[1.4] text-[#111111]">
                      {projeto.title}
                    </h3>
                    <p>{projeto.shortDescription}</p>
                    <span className="inline-flex items-center min-h-[2.75rem] sm:min-h-[2.25rem] mt-[0.4rem] sm:mt-[0.35rem] font-medium text-[#111111] group-hover:underline group-hover:underline-offset-[3px]">
                      Ver case
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          aria-labelledby="titulo-contato"
          className="mt-12 sm:mt-16 scroll-mt-5 sm:scroll-mt-8"
        >
          <h2
            id="titulo-contato"
            className="mb-4 sm:mb-5 text-[1.18rem] sm:text-[1.25rem] font-bold leading-[1.3] text-[#111111]"
          >
            Contato
          </h2>
          <p className="mb-5">
            Vamos conversar? Fique à vontade para entrar em contato.
          </p>
          <ul className="grid gap-3">
            <li className="grid grid-cols-1 gap-[0.1rem] pb-[0.65rem] border-b border-[#e5e5e5]">
              <span className="text-[0.8rem] text-[#767676]">E-mail</span>
              <a
                href="mailto:contatowildermiranda@gmail.com"
                className="inline-flex items-center min-h-[2.75rem] text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px] break-all"
              >
                contatowildermiranda@gmail.com
              </a>
            </li>
            <li className="grid grid-cols-1 gap-[0.1rem] pb-[0.65rem] border-b border-[#e5e5e5]">
              <span className="text-[0.8rem] text-[#767676]">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/wildermiranda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[2.75rem] text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px] break-all"
              >
                linkedin.com/in/wildermiranda
              </a>
            </li>
            <li className="grid grid-cols-1 gap-[0.1rem] pb-0 border-b-0">
              <span className="text-[0.8rem] text-[#767676]">GitHub</span>
              <a
                href="https://github.com/wildermiranda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center min-h-[2.75rem] text-[#111111] underline decoration-[#c8c8c8] hover:decoration-current underline-offset-[3px] break-all"
              >
                github.com/wildermiranda
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}