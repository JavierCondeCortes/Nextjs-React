import { ProductCard } from "@/components/product-card"
import getProducts from "@/api/get-products/get-products"


export default async function HomePage() {
  const products = await getProducts()

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 lg:p-12 bg-gray-50 dark:bg-gray-900">
      <h1
        className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-50">Nuestros Productos</h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
