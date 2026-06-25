import Link from "next/link";
import Tarjeta from "@/components/Tarjeta";

async function getProductosBarba() {
    const res = await fetch("https://fakestoreapi.com/products?limit=4", {
    next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error("Error al cargar la API de productos");
    return res.json();
}

export default async function ProductosBarba() {
    const productosAPI = await getProductosBarba();

    return (
    <section className="flex flex-col w-full">
        <header className="bg-green-950 flex flex-col py-50 justify-center items-center">
        <h1 className="text-6xl font-bold text-white">Productos para la Barba</h1>
        <p className="mt-8 text-white text-2xl font-sans">
            Cuidado, hidratación y estilo premium para tu barba.
        </p>
        </header>

        <div className="gap-4 m-12 flex p-40 justify-around flex-wrap bg-mauve-800">
        <p className="text-2xl text-white">
            Encuentra aquí los mejores productos seleccionados para el mantenimiento de tu barba.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
            {productosAPI.map((prod) => (
            <Tarjeta
                key={prod.id}
                producto={{
                nombre: prod.title.slice(0, 25) + "...",
                precio: `$${Math.round(prod.price * 500)}`,
                descripcion: prod.description.slice(0, 60) + "...",
                imagen: prod.image
                }}
            />
            ))}
        </div>
        </div>

        <div className="bg-mauve-800 p-8 flex justify-center">
        <Link 
            href="/"
            className="bg-emerald-800 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition font-semibold border-amber-300 border-2 inline-block shadow-md hover:shadow-lg"
        >
            Volver al Inicio
        </Link>
        </div>
    </section>
    );
}