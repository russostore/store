// Catálogo Russo Store — produtos com imagens reais via z-ai image-search

export type Product = {
  id: string;
  name: string;
  category: "Perfumes" | "Tênis" | "Eletrônicos" | "Garrafas Térmicas";
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  highlight?: string;
  badge?: string;
};

export const WHATSAPP_NUMBER = "5516992800385";
export const STORE_NAME = "Russo Store";

export const CATEGORIES = [
  {
    id: "Perfumes",
    name: "Perfumes",
    description: "Fragrâncias importadas e premium",
    icon: "Sparkles",
  },
  {
    id: "Tênis",
    name: "Tênis",
    description: "Modelos originais e edição limitada",
    icon: "Footprints",
  },
  {
    id: "Eletrônicos",
    name: "Eletrônicos",
    description: "Tecnologia de ponta e áudio premium",
    icon: "Smartphone",
  },
  {
    id: "Garrafas Térmicas",
    name: "Garrafas Térmicas",
    description: "Performance térmica de elite",
    icon: "CupSoda",
  },
] as const;

export const PRODUCTS: Product[] = [
  // ===== Perfumes =====
  {
    id: "perf-001",
    name: "Élixir Noir Intense",
    category: "Perfumes",
    price: 489.9,
    oldPrice: 689.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d8a4eec1bc85.jpg",
    description:
      "Fragrância amadeirada intensa com notas de baunilha, oud e âmbar. Fixação de até 12 horas. Frasco de 100ml em vidro fumê.",
    highlight: "Mais vendido",
    badge: "Importado",
  },
  {
    id: "perf-002",
    name: "Gold Royale Eau de Parfum",
    category: "Perfumes",
    price: 649.0,
    oldPrice: 899.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/d5be3ed3629b.jpg",
    description:
      "Perfume premium com tampa banhada a ouro e notas de bergamota, jasmim e sândalo. Apresentação luxuosa para presentes.",
    badge: "Edição Limitada",
  },
  {
    id: "perf-003",
    name: "Amber Oud Reserva",
    category: "Perfumes",
    price: 759.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5641aa5835db.png",
    description:
      "Reserva exclusiva com âmbar líquido, oud tailandês e baunilha de Madagascar. Para quem busca sofisticação sem concessões.",
    badge: "Premium",
  },
  {
    id: "perf-004",
    name: "Fresh Aqua Sport",
    category: "Perfumes",
    price: 289.9,
    oldPrice: 369.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ff7483d3cce0.jpg",
    description:
      "Fragrância cítrica aquosa com notas de toranja, hortelã e musk. Ideal para o dia a dia e climas quentes. 100ml.",
    badge: "Promo",
  },
  // ===== Tênis =====
  {
    id: "tenis-001",
    name: "Air Jordan 1 Retro High",
    category: "Tênis",
    price: 1299.0,
    oldPrice: 1799.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/069a5d1cf51d.jpg",
    description:
      "Edição clássica em couro premium com câmara de ar e palmilha acolchoada. Tamanho 38 ao 45. Garantia de originalidade.",
    highlight: "Original",
    badge: "Best Seller",
  },
  {
    id: "tenis-002",
    name: "Ultraboost Light Running",
    category: "Tênis",
    price: 899.0,
    oldPrice: 1199.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/76204d440062.jpg",
    description:
      "Solado Boost com retorno de energia premium. Cabo Primeknit+ que se adapta ao pé. Ideal para corridas longas e treino.",
    badge: "Lançamento",
  },
  {
    id: "tenis-003",
    name: "Air Force 1 '07 Classic",
    category: "Tênis",
    price: 749.9,
    oldPrice: 999.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a069051df884.png",
    description:
      "O clássico branco imaculado em couro liso. Solado com câmara de ar para conforto o dia todo. Tamanhos 36 ao 44.",
    badge: "Clássico",
  },
  {
    id: "tenis-004",
    name: "Yeezy Boost 350 V2",
    category: "Tênis",
    price: 1899.0,
    oldPrice: 2499.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/91097fa7c1f4.jpg",
    description:
      "Edição premium em cinza com solado Boost. Acabamento Primeknit com padrão translúcido lateral. Stock limitado.",
    badge: "Premium",
  },
  // ===== Eletrônicos =====
  {
    id: "elec-001",
    name: "iPhone 15 Pro Max 256GB",
    category: "Eletrônicos",
    price: 7999.0,
    oldPrice: 9499.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/15cd955208ef.jpg",
    description:
      "Chip A17 Pro, estrutura em titânio, câmera de 48MP e tela Super Retina XDR de 6.7 polegadas. Lacrado na caixa.",
    highlight: "Top de linha",
    badge: "Lacrado",
  },
  {
    id: "elec-002",
    name: "AirPods Pro 2ª geração",
    category: "Eletrônicos",
    price: 1899.0,
    oldPrice: 2499.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/078ba79e107a.jpg",
    description:
      "Cancelamento ativo de ruído aprimorado, áudio espacial e case MagSafe com alto-falante. Até 30h de bateria.",
    badge: "Original",
  },
  {
    id: "elec-003",
    name: "Apple Watch Ultra 2",
    category: "Eletrônicos",
    price: 6499.0,
    oldPrice: 7999.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/69917b1d3680.jpg",
    description:
      "Caixa em titânio de 49mm, brilho de 3000 nits, GPS de dupla frequência e bateria de até 72h. Para esportes extremos.",
    badge: "Premium",
  },
  {
    id: "elec-004",
    name: "Samsung Galaxy S24 Ultra",
    category: "Eletrônicos",
    price: 6299.0,
    oldPrice: 7999.0,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2f5eb936d763.jpg",
    description:
      "Tela Dynamic AMOLED 2X de 6.8 polegadas, câmera de 200MP com zoom óptico 5x e S Pen integrada. 512GB.",
    badge: "Oferta",
  },
  // ===== Garrafas Térmicas =====
  {
    id: "gar-001",
    name: "Stanley Quencher H2.0 1.18L",
    category: "Garrafas Térmicas",
    price: 279.9,
    oldPrice: 379.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0ab49094e502.jpg",
    description:
      "Manter gelo por até 24h e quente por 12h. Tampa FlowState com 3 modos de beber. Alça ergonômica para transporte.",
    highlight: "Fenômeno",
    badge: "Top",
  },
  {
    id: "gar-002",
    name: "Hydro Flask 32oz Wide Mouth",
    category: "Garrafas Térmicas",
    price: 249.9,
    oldPrice: 329.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/51020fd7a101.jpg",
    description:
      "Construção em aço inox 18/8 com isolamento TempShield. Mantém frio por 24h e quente por 12h. BPA-free.",
    badge: "Premium",
  },
  {
    id: "gar-003",
    name: "Termo Premium Inox 1L",
    category: "Garrafas Térmicas",
    price: 179.9,
    oldPrice: 239.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6e0d0fca3e78.jpg",
    description:
      "Garrafa térmica de parede dupla em aço inox preto fosco. Mantém temperatura por 18h. Tampa com travas de segurança.",
    badge: "Promo",
  },
  {
    id: "gar-004",
    name: "Tumbler Térmico 600ml",
    category: "Garrafas Térmicas",
    price: 149.9,
    oldPrice: 199.9,
    image:
      "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a0f0fcfaa858.jpg",
    description:
      "Copo térmico com tampa deslizante e canudo de inox. Perfeito para café, sucos e drinks gelados. Manter frio por 12h.",
    badge: "Novidade",
  },
];

export function buildWhatsappUrl(product: Product): string {
  const msg = `Olá! Acessei o site da Russo Store e gostaria de comprar o produto: ${product.name} (R$ ${product.price.toFixed(2).replace(".", ",")}). Código: ${product.id}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildGenericWhatsappUrl(): string {
  const msg = `Olá! Acessei o site da Russo Store e gostaria de mais informações sobre os produtos disponíveis.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
