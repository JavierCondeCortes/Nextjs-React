
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProductCard({ product }) {
  return (
    <Card className="w-full max-w-sm mx-auto flex flex-col h-full">
      <CardHeader className="flex flex-col items-center text-center p-4 pb-0">
        <div className="relative w-full h-48 mb-4">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            className="rounded-t-lg object-contain mx-auto h-full w-full"
            />
        </div>
        <CardTitle className="text-lg font-semibold line-clamp-2 min-h-[3rem]">{product.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground line-clamp-1">{product.category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow p-4 pt-2">
        <p className="text-2xl font-bold text-right mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm line-clamp-3 text-gray-600 dark:text-gray-400">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/product${product.id}`} className="w-full">
          <Button className="w-full">Ver Detalles</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
