import Link from "next/link";

export default function ProductosBarba() {
    const productos = [
    { id: 1, nombre: "Aceite para barba", precio: "$4000", descripcion: "Aceite hidratante y acondicionador para barba." },
    ];

    return (
    <section className="flex flex-col w-full">
        <header className="bg-green-950 flex flex-col py-50 justify-center items-center">
        <h1 className="text-6xl font-bold text-white">Productos Premium</h1>
        <p className="mt-8 text-white text-2xl font-sans">Productos de calidad para el cuidado y estilo personal.</p>
        </header>

        <div className="gap-4m-12 flex p-40 justify-around flex-wrap bg-mauve-800 min-h-screen">
        {productos.map((p) => (
            <div
            key={p.id}
            className="flex flex-col justify-between bg-mauve-900 px-8 py-10 border-amber-500 border-2 rounded-xl  h-90 w-72"
            >
            <div>
                <h2 className="text-white text-2xl font-bold mb-2">{p.nombre}</h2>
                <p className="text-zinc-300 text-sm mb-4">{p.descripcion}</p>
            </div>
            
            <div>
                <p className="text-amber-400 text-2xl font-bold mb-4">{p.precio}</p>
                <button
                className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:from-amber-500 hover:to-amber-400 transition duration-300 font-semibold shadow-md"
                >
                Comprar
                </button>
            </div>
            </div>
        ))}
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