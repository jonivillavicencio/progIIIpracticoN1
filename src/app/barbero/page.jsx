import Link from "next/link";

export default function Barberos() {
  const barberos = [
    { id: 1, nombre: "Joni", especialidad: "Fade" },
    { id: 2, nombre: "Ivan", especialidad: "Clásico" },
    { id: 3, nombre: "Santi", especialidad: "Barba" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Barberos</h1>

      <div className="grid gap-4">
        {barberos.map((barbero) => (
          <Link
            key={barbero.id}
            href={`/barbero/${barbero.id}`}
            className="border p-4 rounded-xl shadow hover:bg-emerald-900 transition"
          >
            <h2 className="text-xl font-semibold">
              {barbero.nombre}
            </h2>
            <p className="text-purple-700">
              Especialidad: {barbero.especialidad}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}