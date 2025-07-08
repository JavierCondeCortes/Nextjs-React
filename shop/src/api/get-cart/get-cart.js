import Link from "next/link";

export default async function getCart() {
    const response = await fetch("https://fakestoreapi.com/carts")
    .then((res) => res.json()) 
    const cart = await response.json();
    return  cart.map((cart) => {
        return (
            <Link href={`/cart/${cart.id}`} key={cart.id}>
                <h2>{cart.title}</h2>
                <p>{cart.price}</p>
                <p>{cart.description}</p>
                <img src={cart.image} alt={cart.title} />
            </Link>
        )
    })
}