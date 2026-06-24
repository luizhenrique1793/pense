const path = (name) => `/imagens/cases/${encodeURIComponent(name)}`;
const projects = {
  punta: {
    id: "punta",
    title: "Punta del Este",
    category: "Cases • Branding e conteúdo",
    description: "Identidade, campanha e presença digital para transformar a experiência náutica em uma marca desejada.",
    services: ["Branding", "Campanha", "Social media"],
    images: [path("Rectangle 6.png"), path("Base-6.png"), path("Base-7.png")]
  },
  jaecoo: {
    id: "jaecoo",
    title: "JAECOO",
    category: "Cases • Comunicação de marca",
    description: "Uma presença visual de alto impacto para apresentar tecnologia, sofisticação e performance.",
    services: ["Direção criativa", "Campanha institucional"],
    images: [path("Base.png")]
  },
  silomax: {
    id: "silomax",
    title: "Silomax",
    category: "Cases • Marketing digital",
    description: "Estratégia e conteúdo que aproximam inovação industrial, agronegócio e oportunidades reais.",
    services: ["Estratégia", "Conteúdo", "Mídia digital"],
    images: [path("Base-1.png"), path("Base-12.png")]
  },
  sucatto: {
    id: "sucatto",
    title: "Sucatto",
    category: "Cases • Campanha institucional",
    description: "Posicionamento visual para comunicar eficiência, tecnologia e confiança no campo.",
    services: ["Posicionamento", "Design", "Campanha"],
    images: [path("Base-2.png")]
  },
  queens: {
    id: "queens",
    title: "Queen's",
    category: "Cases • Branding e produto",
    description: "Campanhas, embalagens e arquitetura de linha construídas para uma marca cheia de personalidade.",
    services: ["Embalagem", "Conteúdo", "Campanha"],
    images: [path("Base-3.png"), path("Base-4.png"), path("Base-11.png")]
  },
  lidermax: {
    id: "lidermax",
    title: "Lidermax",
    category: "Cases • Campanhas",
    description: "“Onde os sonhos acontecem”: conceito e direção criativa para uma comunicação leve, humana e memorável.",
    services: ["Conceito criativo", "Campanha", "Mídia"],
    images: [path("Campanha Publicitária Onde os Sonhos Acontecem.png")]
  },
  nautico: {
    id: "nautico",
    title: "30 anos no mundo náutico",
    category: "Cases • Campanha comemorativa",
    description: "Uma trajetória celebrada por meio de uma campanha elegante, humana e institucional.",
    services: ["Campanha", "Direção de arte"],
    images: [path("Base-5.png")]
  },
  jandaia: {
    id: "jandaia",
    title: "Café Jandaia",
    category: "Cases • Digital e conteúdo",
    description: "Conteúdo, website e campanhas que levam o sabor e a proximidade da marca a diferentes pontos de contato.",
    services: ["Website", "Conteúdo", "Campanha"],
    images: [path("Base-8.png"), path("Base-10.png")]
  },
  prime: {
    id: "prime",
    title: "Colégio Prime",
    category: "Cases • Mídia OOH",
    description: "Campanha de lançamento do Ensino Fundamental com mensagem clara, presença urbana e alta visibilidade.",
    services: ["Campanha", "Mídia exterior"],
    images: [path("Base-9.png")]
  },
  paris: {
    id: "paris",
    title: "Residencial Paris",
    category: "Cases • Campanha de lançamento",
    description: "Comunicação imobiliária orientada a desejo, localização e oportunidade de investimento.",
    services: ["Estratégia", "Campanha", "Mídia"],
    images: [path("Base-13.png")]
  }
};
const caseTiles = [
  { image: path("Rectangle 6.png"), alt: "Projeto de identidade visual Punta del Este", projectId: "punta", title: "Punta del Este", summary: "Identidade que traduz sofisticação e experiência náutica." },
  { image: path("Base.png"), alt: "Projeto de comunicação visual JAECOO", projectId: "jaecoo", title: "JAECOO", summary: "Comunicação de marca para uma presença marcante." },
  { image: path("Base-1.png"), alt: "Campanha digital Silomax", projectId: "silomax", title: "Silomax", summary: "Estratégia digital conectada ao campo e à inovação." },
  { image: path("Base-2.png"), alt: "Campanha institucional Sucatto", projectId: "sucatto", title: "Sucatto", summary: "Posicionamento institucional para soluções agrícolas." },
  { image: path("Base-3.png"), alt: "Campanhas para cervejas Queen's", projectId: "queens", title: "Queen's", summary: "Conteúdo que transforma sabor em personalidade." },
  { image: path("Campanha Publicitária Onde os Sonhos Acontecem.png"), alt: "Campanha Onde os Sonhos Acontecem", projectId: "lidermax", title: "Lidermax", summary: "Campanha publicitária “Onde os sonhos acontecem”." },
  { image: path("Base-4.png"), alt: "Embalagem Queen's Framboesa", projectId: "queens", title: "Queen's Framboesa", summary: "Design de embalagem com apelo, frescor e identidade." },
  { image: path("Base-5.png"), alt: "Campanha comemorativa de 30 anos", projectId: "nautico", title: "30 anos no mundo náutico", summary: "Campanha comemorativa que celebra uma trajetória." },
  { image: path("Base-6.png"), alt: "Campanha Punta del Este", projectId: "punta", title: "Punta del Este", summary: "Campanha de marca feita para viver bons momentos." },
  { image: path("Base-7.png"), alt: "Conteúdo digital Embarque", projectId: "punta", title: "Embarque", summary: "Conteúdo inspirado em experiências no mar." },
  { image: path("Base-8.png"), alt: "Conteúdo digital Café Jandaia", projectId: "jandaia", title: "Café Jandaia", summary: "Gestão de conteúdo com sabor, afeto e consistência." },
  { image: path("Base-9.png"), alt: "Campanha Colégio Prime", projectId: "prime", title: "Colégio Prime", summary: "Campanha OOH para o Ensino Fundamental." },
  { image: path("Base-10.png"), alt: "Website Café Jandaia", projectId: "jandaia", title: "Café Jandaia", summary: "Experiência digital para aproximar marca e consumidor." },
  { image: path("Base-11.png"), alt: "Linha de produtos Queen's", projectId: "queens", title: "Queen's", summary: "Arquitetura visual para uma linha completa." },
  { image: path("Base-12.png"), alt: "Comunicação digital Silomax", projectId: "silomax", title: "Silomax", summary: "Conteúdo técnico em comunicação acessível." },
  { image: path("Base-13.png"), alt: "Campanha Residencial Paris", projectId: "paris", title: "Residencial Paris", summary: "Lançamento focado em desejo e oportunidade." }
];
Object.keys(projects).map((id) => `/cases/${id}`);
export {
  caseTiles as c,
  projects as p
};
//# sourceMappingURL=projects-kL72p_0w.js.map
