// Catálogo Russo Store — Linha Mizuno Wave Prophecy (todos os modelos, todos os tamanhos)

export type Product = {
  id: string;
  name: string;
  category: "Mizuno Wave Prophecy";
  variant: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  highlight?: string;
  badge?: string;
  colors?: string[];
};

export const WHATSAPP_NUMBER = "5516992800385";
export const STORE_NAME = "Russo Store";

// Tamanhos brasileiros disponíveis para todos os modelos
export const SIZES = [37, 38, 39, 40, 41, 42, 43, 44, 45] as const;

// Variantes/linhas dentro da coleção Prophecy — para filtros rápidos
export const CATEGORIES = [
  {
    id: "Todos",
    name: "Todos os modelos",
    description: "Coleção completa Mizuno Wave Prophecy",
    icon: "Footprints",
  },
  {
    id: "Prophecy M",
    name: "Prophecy M",
    description: "Edição principal — performance máxima",
    icon: "Zap",
  },
  {
    id: "Prophecy LE",
    name: "Prophecy LE",
    description: "Limited Edition — acabamento premium",
    icon: "Crown",
  },
  {
    id: "Prophecy LS",
    name: "Prophecy LS",
    description: "Lifestyle — uso urbano e casual",
    icon: "Sparkles",
  },
  {
    id: "Prophecy Edge",
    name: "Prophecy Edge",
    description: "Borda reforçada — estabilidade",
    icon: "Hexagon",
  },
  {
    id: "Prophecy Glide",
    name: "Prophecy Glide",
    description: "Deslizamento suave — corrida longa",
    icon: "Wind",
  },
  {
    id: "Prophecy Bolt",
    name: "Prophecy Bolt",
    description: "Explosão — treinos de velocidade",
    icon: "Flame",
  },
  {
    id: "Prophecy Sonic",
    name: "Prophecy Sonic",
    description: "Leveza — treino diário",
    icon: "Rocket",
  },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "mzp-001",
    name: "Mizuno Wave Prophecy M",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy M",
    price: 1299.0,
    oldPrice: 1899.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/38fd70f0d27d.jpg",
    description:
      "Modelo principal da linha Prophecy. Tecnologia Infinity Wave com amortecimento premium, cabedal em mesh respirável e solado de borracha de alta durabilidade. Disponível do 37 ao 45.",
    highlight: "Mais vendido",
    badge: "Principal",
    colors: ["Preto", "Branco"],
  },
  {
    id: "mzp-002",
    name: "Mizuno Wave Prophecy LE",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy LE",
    price: 1799.0,
    oldPrice: 2399.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9f0b4c48656c.jpg",
    description:
      "Limited Edition com acabamento premium em couro sintético nobuck. Numeração exclusiva, detalhes em metal escovado e palmilha memory foam. Tiragem limitada — apenas 100 pares por tamanho.",
    badge: "Edição Limitada",
    colors: ["Onyx", "Champagne"],
  },
  {
    id: "mzp-003",
    name: "Mizuno Wave Prophecy LS",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy LS",
    price: 1149.0,
    oldPrice: 1499.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/12c6ddf6cc90.jpg",
    description:
      "Versão lifestyle para uso urbano e casual. Design clean que combina com qualquer look, mantendo o amortecimento Infinity Wave para o dia a dia. Conforto premium em qualquer superfície.",
    badge: "Lifestyle",
    colors: ["Off-White", "Sand"],
  },
  {
    id: "mzp-004",
    name: "Mizuno Wave Prophecy Edge",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Edge",
    price: 1399.0,
    oldPrice: 1749.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d7ae70a48a9d.jpg",
    description:
      "Borda lateral reforçada com placa de TPU para estabilidade máxima em mudanças de direção. Ideal para treinos funcionais, HIIT e CrossFit. Solado com grip multiterreno.",
    badge: "Performance",
    colors: ["Preto/Vermelho", "Preto/Laranja"],
  },
  {
    id: "mzp-005",
    name: "Mizuno Wave Prophecy Glide",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Glide",
    price: 1249.0,
    oldPrice: 1599.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4ee0d36f2551.jpg",
    description:
      "Desenvolvido para corridas longas. Espuma U4icX com retorno de energia otimizado, mesh translúcido super respirável e drop de 10mm. Perfeito para meia maratona e maratona.",
    badge: "Long Run",
    colors: ["Azul", "Verde Fluo"],
  },
  {
    id: "mzp-006",
    name: "Mizuno Wave Prophecy Bolt",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Bolt",
    price: 1349.0,
    oldPrice: 1699.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/737b6de4af5b.jpg",
    description:
      "Construção leve para treinos de velocidade e tiros. Placa de carbono na entressola para impulsão explosiva. Peso reduzido a 248g (tamanho 40). Drop de 8mm para corrida natural.",
    badge: "Speed",
    colors: ["Amarelo Fluo", "Laranja"],
  },
  {
    id: "mzp-007",
    name: "Mizuno Wave Prophecy Sonic",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Sonic",
    price: 1099.0,
    oldPrice: 1399.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b6bf8f29a630.jpg",
    description:
      "Modelo de entrada da linha Prophecy, mas com toda a tecnologia Infinity Wave. Ideal para treino diário, uso casual e quem está começando no mundo running. Custo-benefício imbatível.",
    badge: "Daily",
    colors: ["Cinza", "Preto"],
  },
  {
    id: "mzp-008",
    name: "Mizuno Wave Prophecy Classic",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy M",
    price: 1199.0,
    oldPrice: 1549.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/15e8048dbf0e.jpg",
    description:
      "Colorway clássico preto total — a peça mais versátil da coleção. Combina com qualquer produção, do esportivo ao casual chic. Cabedal em mesh premium com detalhes em camurça sintética.",
    highlight: "Clássico",
    badge: "Colorway",
    colors: ["Preto Total"],
  },
  {
    id: "mzp-009",
    name: "Mizuno Wave Prophecy White Silver",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy M",
    price: 1199.0,
    oldPrice: 1549.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0f5e91c10beb.jpg",
    description:
      "Colorway branco com prata — clean e atemporal. Reflexos em detalhes holográficos que brilham sob a luz. Perfeito para looks urbanos e composições minimalistas.",
    badge: "Colorway",
    colors: ["Branco/Prata"],
  },
  {
    id: "mzp-010",
    name: "Mizuno Wave Prophecy Red Black",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Edge",
    price: 1349.0,
    oldPrice: 1699.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/badca8525a70.jpg",
    description:
      "Colorway vermelho e preto — para quem não passa despercebido. Detalhes em vermelho vivo sobre base preta fosca. A combinação mais agressiva e esportiva da linha.",
    badge: "Colorway",
    colors: ["Vermelho/Preto"],
  },
  {
    id: "mzp-011",
    name: "Mizuno Wave Prophecy Blue Navy",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy Glide",
    price: 1249.0,
    oldPrice: 1599.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4a575307974d.jpg",
    description:
      "Colorway azul marinho com detalhes em azul royal. Visual sofisticado para atletas exigentes. Espuma U4icX com retorno de energia premium para corridas de longa distância.",
    badge: "Colorway",
    colors: ["Navy", "Royal Blue"],
  },
  {
    id: "mzp-012",
    name: "Mizuno Wave Prophecy Grey Premium",
    category: "Mizuno Wave Prophecy",
    variant: "Prophecy LS",
    price: 1149.0,
    oldPrice: 1499.0,
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9312e192c1ae.jpg",
    description:
      "Colorway cinza premium — o tênis lifestyle perfeito. Tons de cinza em degradê com palmilha memory foam de 8mm de espessura. Conforto para o dia inteiro, estilo para qualquer ocasião.",
    badge: "Colorway",
    colors: ["Cinza Claro", "Cinza Chumbo"],
  },
];

/**
 * Monta a URL do WhatsApp com a mensagem pré-preenchida,
 * já incluindo o tamanho selecionado pelo cliente.
 */
export function buildWhatsappUrl(product: Product, size?: number): string {
  const sizeText = size ? ` — Tamanho: ${size}` : "";
  const msg = `Olá! Acessei o site da Russo Store e gostaria de comprar o produto: ${product.name} (R$ ${product.price.toFixed(2).replace(".", ",")}). Código: ${product.id}${sizeText}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildGenericWhatsappUrl(): string {
  const msg = `Olá! Acessei o site da Russo Store e gostaria de mais informações sobre a linha Mizuno Wave Prophecy disponível.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
