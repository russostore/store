/**
 * Helper para construir caminhos de assets respeitando o basePath.
 *
 * No GitHub Pages, o site é servido em https://russostore.github.io/store/
 * então TODOS os caminhos de assets (imagens, ícones, etc.) precisam
 * ser prefixados com /store.
 *
 * Como estamos usando <img> tags (não next/image) em vários lugares,
 * precisamos aplicar o basePath manualmente.
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Retorna o caminho do asset com o basePath aplicado.
 * Ex: assetPath("/products/foo.jpg") -> "/store/products/foo.jpg"
 */
export function assetPath(path: string): string {
  if (!path) return path;
  // Se já tem domínio completo (http/https), não aplicar
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  // Garantir que começa com /
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
