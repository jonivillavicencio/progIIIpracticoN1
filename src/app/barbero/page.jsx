import Link from "next/link";

export default function Barberos() {
  const barberos = [
    { id: 1, nombre: "Joni", especialidad: "Fade" },
    { id: 2, nombre: "Ivan", especialidad: "Clásico" },
    { id: 3, nombre: "Santi", especialidad: "Barba" },
    { id: 4, nombre: "Mati", especialidad: "Tintureria" },
  ];

  return (
    <div className="p-6">
        <h1 className="text-3xl font-bold mt-25 mb-40 flex justify-center">Barberos</h1>

        <div className="gap-4m-12 flex p-20 justify-around flex-wrap">
        {barberos.map((barbero) => (
            <Link
            key={barbero.id}
            href={`/barbero/${barbero.id}`}
            className="flex flex-col items-center border p-8 border-amber-500 rounded-xl hover:bg-slate-900 transition"
            >
            <h2 className="mt-2 text-xl font-semibold">
                {barbero.nombre}
            </h2>
            <p className="mt-5 mb-5 text-amber-700">
                Especialidad: {barbero.especialidad}
            </p>
            </Link>
        ))}
        </div>
            
        <div className="mt-30 flex justify-end">
          <Link 
            href="/"
            className="bg-amber-600 text-white px-8 py-4 rounded-4xl font-semibold hover:bg-amber-800 transition "
          >
            Volver al Inicio
          </Link>
        </div>
    </div>
    
  );
}