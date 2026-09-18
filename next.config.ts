import type { NextConfig } from "next";

/**
 * Configuração para deploy no GitHub Pages.
 *
 * O repositório é https://github.com/russostore/store
 * Portanto o site será servido em https://russostore.github.io/store/
 * — daí o basePath "/store".
 *
 * GitHub Pages só serve arquivos estáticos, então usamos:
 *  - output: "export"        -> gera a pasta /out com HTML/CSS/JS estático
 *  - images.unoptimized      -> desativa o otimizador de imagens (precisa de server)
 *  - trailingSlash: true     -> garante URLs amigáveis no GitHub Pages
 */
const repoName = "store";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
      },
      {
        protocol: "https",
        hostname: "sfile.chatglm.cn",
      },
    ],
  },
  // Não usar allowedDevOrigins em produção (era só para dev local).
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
