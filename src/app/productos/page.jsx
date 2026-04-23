import Link from "next/link";

export default function Productos() {


  return (
    <section className="flex flex-col w-full">
      <header className="bg-green-950 flex flex-col py-50 justify-center items-center">
        <h1 className="text-6xl font-bold text-white">Productos Premium</h1>
        <p className="mt-8 text-white text-2xl font-sans">Productos de calidad para el cuidado y estilo personal.</p>
      </header>

      <div className="gap-4m-12 flex p-40 justify-around flex-wrap bg-mauve-800">
        <p className="text-2xl text-white">Encontra aqui los porductos que necesites para tu cuidado personal y tu estilo.</p>
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