
export default function Tarjeta({ producto }) {
    return (
    <div className="flex flex-col justify-between bg-mauve-900 px-8 py-10 border-amber-500 border-2 rounded-xl h-90 w-72">
        <div>
        <h2 className="text-white text-2xl font-bold mb-2">{producto.nombre}</h2>
        <p className="text-zinc-300 text-sm mb-4">{producto.descripcion}</p>
        </div>
        <div>
        <p className="text-amber-400 text-2xl font-bold mb-4">{producto.precio}</p>
        <button className="w-full bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-500 transition duration-300 font-semibold shadow-md">
            Comprar
        </button>
        </div>
    </div>
    );
}