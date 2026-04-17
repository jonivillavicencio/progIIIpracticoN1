import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>    
      <header className="bg-mist-800 py-60  w-full flex flex-col  items-center font-sans ">
        <section>
          <h1 className="text-zinc-200 text-6xl font-bold mb-2">
            Bienvenido a <span className="text-amber-300">Corte & Navajas</span>
          </h1>
        </section>
        <p className="text-gray-400 text-2xl mt-6">
          Ofrecemos los mejores cortes y atención al detalle.
        </p>
      </header>
      <main className="bg-green-950 w-full flex items-center justify-between pl-60 pr-40 py-20">
        <section className="flex flex-col text-white"> 
          <h2 className="text-3xl font-bold">Reserva tu corte</h2>
          <p className="text-xl font-semibold">Elegir tu barbero favorito ahora es facil, rapido<br />y comodo. </p>
        </section>
        <section>
          <Link href={"/barbero"} className="inline-block bg-emerald-800 py-6 px-15 border text-white text-xl border-amber-300 rounded-xl hover:bg-amber-600 hover:scale-110 transition-all duration-300 cursor">Reservar</Link>
        </section>
      </main>
    </div>
  );
}
