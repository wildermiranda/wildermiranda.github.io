export interface ProjetoEspecificacao {
  label: string;
  value: string;
  href?: string;
}

export interface ProjetoEtapa {
  label: string;
  description: string;
}

export interface Projeto {
  slug: string;
  img: string;
  title: string;
  shortDescription: string;
  lead: string;
  coverSrc: string;
  coverAlt: string;
  specifications: ProjetoEspecificacao[];
  challenge: string[];
  solution: {
    paragraphs?: string[];
    bullets?: string[];
    steps?: ProjetoEtapa[];
  };
  result: string[];
  nextSlug: string;
}

export const PROJETOS: Projeto[] = [
  {
    slug: "gestao-de-contratos",
    img: "/gestão-de-contratos.svg",
    title: "Gestão de Contratos",
    shortDescription:
      "Dashboard interativo projetado para explorar dados, cruzar informações estratégicas e extrair insights valiosos no próprio Excel.",
    lead: "Painel interativo em Excel que reúne o status de todos os contratos da companhia e mostra, em um só lugar, quais precisam de ação.",
    coverSrc: "/contratos.png",
    coverAlt: "Visualização do Dashboard de Gestão de Contratos",
    specifications: [
      { label: "Tipo", value: "Dashboard interativo" },
      { label: "Ferramentas", value: "Excel, Power Query, Tabela Dinâmica" },
      { label: "Contexto", value: "Área comercial do Grupo GPS" },
      {
        label: "Vídeo",
        value: "Assistir vídeo",
        href: "https://www.youtube.com/watch?v=yniZXFbitWw&t=15s",
      },
    ],
    challenge: [
      "Acompanhar os contratos de uma companhia exige uma visão única: quais estão regularizados, com que acuracidade e quais pendências precisam de ação. O desafio era reunir essa informação em um só lugar, de forma que a Diretoria pudesse explorá-la sem depender de relatórios manuais.",
    ],
    solution: {
      paragraphs: [
        "Construí o painel inteiramente no Excel. O Power Query importa e padroniza os dados dos contratos, e as Tabelas Dinâmicas cruzam as informações e alimentam as visões do painel. A pessoa que usa explora os dados e filtra os cruzamentos sem sair do Excel.",
        "O painel destaca três tipos de pendência:",
      ],
      bullets: [
        "Contratos sem cláusula de reajuste",
        "Contratos sem assinatura",
        "Contratos com cliente inexistente",
      ],
    },
    result: [
      "O Diretor passou a acompanhar a acuracidade dos contratos regularizados e a atuar sobre as pendências a partir de uma única fonte, que concentra o status de todos os contratos da companhia.",
    ],
    nextSlug: "dashboard-de-vendas",
  },
  {
    slug: "dashboard-de-vendas",
    img: "/dashboard-de-vendas.svg",
    title: "Dashboard de Vendas de Automóveis",
    shortDescription:
      "Projeto prático de análise de dados onde dados brutos armazenados em PostgreSQL foram transformados em um painel interativo dinâmico.",
    lead: "Solução de dados completa, do banco de dados ao painel interativo, que responde às perguntas de negócio de uma base de vendas de automóveis.",
    coverSrc: "/dashboard-de-vendas.png",
    coverAlt: "Visualização do Dashboard de Vendas de Automóveis",
    specifications: [
      { label: "Tipo", value: "Projeto prático de análise de dados" },
      {
        label: "Ferramentas",
        value: "PostgreSQL, SQL, Python, Streamlit, Plotly",
      },
      { label: "Contexto", value: "Base de vendas de automóveis" },
      {
        label: "Vídeo",
        value: "Assistir vídeo",
        href: "https://www.youtube.com/watch?v=Rnu03wLBQzU&t=46s",
      },
      {
        label: "Código-fonte",
        value: "github.com/wildermiranda/SalesDashboard",
        href: "https://github.com/wildermiranda/SalesDashboard",
      },
    ],
    challenge: [
      "Transformar dados brutos de vendas em respostas que qualquer pessoa consiga explorar, sem precisar escrever consultas. O projeto cobre o caminho inteiro: do armazenamento dos dados até a visualização dos indicadores.",
    ],
    solution: {
      steps: [
        {
          label: "Armazenamento",
          description:
            "Os dados brutos de vendas ficam armazenados em um banco PostgreSQL.",
        },
        {
          label: "Extração",
          description:
            "Consultas SQL extraem do banco os dados necessários para responder aos questionamentos sobre as vendas.",
        },
        {
          label: "Visualização",
          description:
            "Um painel em Python, com Streamlit, transforma o resultado das consultas em gráficos interativos com Plotly.",
        },
        {
          label: "Exploração",
          description:
            "O painel permite explorar os principais indicadores de desempenho de forma dinâmica.",
        },
      ],
    },
    result: [
      "Um painel interativo e dinâmico, construído sobre dados brutos e com o código-fonte disponível no GitHub.",
    ],
    nextSlug: "gestao-de-contratos",
  },
];

export function getProjetoBySlug(slug: string): Projeto | undefined {
  return PROJETOS.find((p) => p.slug === slug);
}