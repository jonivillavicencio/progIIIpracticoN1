import Link from "next/link";


export default async function BarberoDetalle({ params }) {
  const { id } = await params;
  
  const barberos = [
    { id: 1, nombre: "Joni", especialidad: "Fade & Degradados", descripcion: "Experto en cortes modernos y estilos urbanos." },
    { id: 2, nombre: "Ivan", especialidad: "Corte Clásico", descripcion: "Especialista en cortes tradicionales a tijera y navaja." },
    { id: 3, nombre: "Santi", especialidad: "Barbía Integral", descripcion: "Perfilado de barba y ritual de toalla caliente." },
    { id: 4, nombre: "Mati", especialidad: "Colorimetría", descripcion: "Especialista en platinados, tintes y cambios de look." },
  ];

  const barbero = barberos.find((b) => b.id === parseInt(id));

  if (!barbero) {
    return <h1 className="p-6 text-2xl text-red-600">Barbero no encontrado. Parámetro: {params.id}</h1>;
  }

  return (
    <section>
      <article className="bg-mauve-800 w-full h-lvh flex flex-col items-center">        
        <h1 className="mt-30 py-20 text-amber-500 text-7xl font-bold mb-6">
          {barbero.nombre}
        </h1>
        <p className="text-4xl font-semibold text-amber-300 mb-20 ">
          Especialidad: {barbero.especialidad}
        </p>
        <p className="text-2xl font-sans text-zinc-300">
          {barbero.descripcion}
        </p>
        <Link href={"/barbero"} className="bg-emerald-800 text-white font-sans py-4 px-10 rounded-2xl mt-20 hover:scale-110 inline-block"> Ver todos los barberos
        </Link>
        </article>
    </section>
  );
}