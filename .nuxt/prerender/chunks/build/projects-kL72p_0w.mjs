const path = (name) => `/imagens/cases/${encodeURIComponent(name)}`;
const projects = {
  punta: {
    id: "punta",
    title: "Punta del Este",
    category: "Cases \u2022 Branding e conte\xFAdo",
    description: "Identidade, campanha e presen\xE7a digital para transformar a experi\xEAncia n\xE1utica em uma marca desejada.",
    services: ["Branding", "Campanha", "Social media"],
    images: [path("Rectangle 6.png"), path("Base-6.png"), path("Base-7.png")]
  },
  jaecoo: {
    id: "jaecoo",
    title: "JAECOO",
    category: "Cases \u2022 Comunica\xE7\xE3o de marca",
    description: "Uma presen\xE7a visual de alto impacto para apresentar tecnologia, sofistica\xE7\xE3o e performance.",
    services: ["Dire\xE7\xE3o criativa", "Campanha institucional"],
    images: [path("Base.png")]
  },
  silomax: {
    id: "silomax",
    title: "Silomax",
    category: "Cases \u2022 Marketing digital",
    description: "Estrat\xE9gia e conte\xFAdo que aproximam inova\xE7\xE3o industrial, agroneg\xF3cio e oportunidades reais.",
    services: ["Estrat\xE9gia", "Conte\xFAdo", "M\xEDdia digital"],
    images: [path("Base-1.png"), path("Base-12.png")]
  },
  sucatto: {
    id: "sucatto",
    title: "Sucatto",
    category: "Cases \u2022 Campanha institucional",
    description: "Posicionamento visual para comunicar efici\xEAncia, tecnologia e confian\xE7a no campo.",
    services: ["Posicionamento", "Design", "Campanha"],
    images: [path("Base-2.png")]
  },
  queens: {
    id: "queens",
    title: "Queen's",
    category: "Cases \u2022 Branding e produto",
    description: "Campanhas, embalagens e arquitetura de linha constru\xEDdas para uma marca cheia de personalidade.",
    services: ["Embalagem", "Conte\xFAdo", "Campanha"],
    images: [path("Base-3.png"), path("Base-4.png"), path("Base-11.png")]
  },
  lidermax: {
    id: "lidermax",
    title: "Lidermax",
    category: "Cases \u2022 Campanhas",
    description: "\u201COnde os sonhos acontecem\u201D: conceito e dire\xE7\xE3o criativa para uma comunica\xE7\xE3o leve, humana e memor\xE1vel.",
    services: ["Conceito criativo", "Campanha", "M\xEDdia"],
    images: [path("Campanha Publicit\xE1ria Onde os Sonhos Acontecem.png")]
  },
  nautico: {
    id: "nautico",
    title: "30 anos no mundo n\xE1utico",
    category: "Cases \u2022 Campanha comemorativa",
    description: "Uma trajet\xF3ria celebrada por meio de uma campanha elegante, humana e institucional.",
    services: ["Campanha", "Dire\xE7\xE3o de arte"],
    images: [path("Base-5.png")]
  },
  jandaia: {
    id: "jandaia",
    title: "Caf\xE9 Jandaia",
    category: "Cases \u2022 Digital e conte\xFAdo",
    description: "Conte\xFAdo, website e campanhas que levam o sabor e a proximidade da marca a diferentes pontos de contato.",
    services: ["Website", "Conte\xFAdo", "Campanha"],
    images: [path("Base-8.png"), path("Base-10.png")]
  },
  prime: {
    id: "prime",
    title: "Col\xE9gio Prime",
    category: "Cases \u2022 M\xEDdia OOH",
    description: "Campanha de lan\xE7amento do Ensino Fundamental com mensagem clara, presen\xE7a urbana e alta visibilidade.",
    services: ["Campanha", "M\xEDdia exterior"],
    images: [path("Base-9.png")]
  },
  paris: {
    id: "paris",
    title: "Residencial Paris",
    category: "Cases \u2022 Campanha de lan\xE7amento",
    description: "Comunica\xE7\xE3o imobili\xE1ria orientada a desejo, localiza\xE7\xE3o e oportunidade de investimento.",
    services: ["Estrat\xE9gia", "Campanha", "M\xEDdia"],
    images: [path("Base-13.png")]
  }
};
const caseTiles = [
  { image: path("Rectangle 6.png"), alt: "Projeto de identidade visual Punta del Este", projectId: "punta", title: "Punta del Este", summary: "Identidade que traduz sofistica\xE7\xE3o e experi\xEAncia n\xE1utica." },
  { image: path("Base.png"), alt: "Projeto de comunica\xE7\xE3o visual JAECOO", projectId: "jaecoo", title: "JAECOO", summary: "Comunica\xE7\xE3o de marca para uma presen\xE7a marcante." },
  { image: path("Base-1.png"), alt: "Campanha digital Silomax", projectId: "silomax", title: "Silomax", summary: "Estrat\xE9gia digital conectada ao campo e \xE0 inova\xE7\xE3o." },
  { image: path("Base-2.png"), alt: "Campanha institucional Sucatto", projectId: "sucatto", title: "Sucatto", summary: "Posicionamento institucional para solu\xE7\xF5es agr\xEDcolas." },
  { image: path("Base-3.png"), alt: "Campanhas para cervejas Queen's", projectId: "queens", title: "Queen's", summary: "Conte\xFAdo que transforma sabor em personalidade." },
  { image: path("Campanha Publicit\xE1ria Onde os Sonhos Acontecem.png"), alt: "Campanha Onde os Sonhos Acontecem", projectId: "lidermax", title: "Lidermax", summary: "Campanha publicit\xE1ria \u201COnde os sonhos acontecem\u201D." },
  { image: path("Base-4.png"), alt: "Embalagem Queen's Framboesa", projectId: "queens", title: "Queen's Framboesa", summary: "Design de embalagem com apelo, frescor e identidade." },
  { image: path("Base-5.png"), alt: "Campanha comemorativa de 30 anos", projectId: "nautico", title: "30 anos no mundo n\xE1utico", summary: "Campanha comemorativa que celebra uma trajet\xF3ria." },
  { image: path("Base-6.png"), alt: "Campanha Punta del Este", projectId: "punta", title: "Punta del Este", summary: "Campanha de marca feita para viver bons momentos." },
  { image: path("Base-7.png"), alt: "Conte\xFAdo digital Embarque", projectId: "punta", title: "Embarque", summary: "Conte\xFAdo inspirado em experi\xEAncias no mar." },
  { image: path("Base-8.png"), alt: "Conte\xFAdo digital Caf\xE9 Jandaia", projectId: "jandaia", title: "Caf\xE9 Jandaia", summary: "Gest\xE3o de conte\xFAdo com sabor, afeto e consist\xEAncia." },
  { image: path("Base-9.png"), alt: "Campanha Col\xE9gio Prime", projectId: "prime", title: "Col\xE9gio Prime", summary: "Campanha OOH para o Ensino Fundamental." },
  { image: path("Base-10.png"), alt: "Website Caf\xE9 Jandaia", projectId: "jandaia", title: "Caf\xE9 Jandaia", summary: "Experi\xEAncia digital para aproximar marca e consumidor." },
  { image: path("Base-11.png"), alt: "Linha de produtos Queen's", projectId: "queens", title: "Queen's", summary: "Arquitetura visual para uma linha completa." },
  { image: path("Base-12.png"), alt: "Comunica\xE7\xE3o digital Silomax", projectId: "silomax", title: "Silomax", summary: "Conte\xFAdo t\xE9cnico em comunica\xE7\xE3o acess\xEDvel." },
  { image: path("Base-13.png"), alt: "Campanha Residencial Paris", projectId: "paris", title: "Residencial Paris", summary: "Lan\xE7amento focado em desejo e oportunidade." }
];
Object.keys(projects).map((id) => `/cases/${id}`);

export { caseTiles as c, projects as p };
//# sourceMappingURL=projects-kL72p_0w.mjs.map
