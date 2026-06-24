import Link from "next/link";
import Tarjeta from "@/components/Tarjeta";

export default function ProductosBarba() {

    return (
        <section className="flex flex-col w-full">
            <header className="bg-green-950 flex flex-col py-50 justify-center items-center">
                <h1 className="text-6xl font-bold text-white">Productos Premium</h1>
                <p className="mt-8 text-white text-2xl font-sans">Productos de calidad para el cuidado y estilo personal.</p>
            </header>
            <div className="mt-30 flex p-10 gap-50 justify-center flex-wrap bg-mauve-800 mb-30">
                {productos.map((p) => (
                    <Tarjeta key={p.id} producto={p} />
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