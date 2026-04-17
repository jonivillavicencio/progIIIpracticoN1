import Link from "next/link";

export default function Barberos() {
  const barberos = [
    { id: 1, nombre: "Joni", especialidad: "Fade & Degradados", descripcion: "Experto en cortes modernos y estilos urbanos."},
    { id: 2, nombre: "Ivan", especialidad: "Corte Clásico", descripcion: "Especialista en cortes tradicionales a tijera y navaja." },
    { id: 3, nombre: "Santi", especialidad: "Barbía Integral", descripcion: "Perfilado de barba y ritual de toalla caliente." },
    { id: 4, nombre: "Mati", especialidad: "Colorimetría", descripcion: "Especialista en platinados, tintes y cambios de look." },
  ];

  return (
    <section>
      <header className="bg-green-950 flex flex-col py-35 justify-center items-center">
        <h1 className="text-6xl font-bold text-white">Barberos</h1>
        <p className="mt-8 text-white text-2xl font-sans">Nuestro equipo consta de 4 barberos/peluqueros, cada uno es el mejor en una especialidad.</p>
      </header>

        <div className="flex p-40 justify-around flex-wrap bg-mauve-800 ">
        {barberos.map((barbero) => (
            <Link
            key={barbero.id}
            href={`/barbero/${barbero.id}`}
            className="flex flex-col justify-around bg-mauve-900 px-10 py-20 border-amber-500 border-2 rounded-xl hover:scale-120 transition duration-400 h-90 w-70"
            >
            <div>
            <h2 className="text-white text-xl font-semibold">
                {barbero.nombre}
            </h2>
            </div>
            <p className="mt-2 mb-2 text-amber-500">
                {barbero.especialidad}
            </p>
            <p className="text-zinc-500">{barbero.descripcion}</p>
            </Link>
        ))}
        </div>
            
    </section>
    
  );
}