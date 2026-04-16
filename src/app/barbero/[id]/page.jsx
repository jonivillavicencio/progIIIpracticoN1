export default function BarberoDetalle({ params }) {
  const barberos = [
    { id: "1", nombre: "Joni", especialidad: "Fade" },
    { id: "2", nombre: "Ivan", especialidad: "Clásico" },
    { id: "3", nombre: "Santi", especialidad: "Barba" },
  ];

  const barbero = barberos.find((b) => b.id === params.id);

  if (!barbero) {
    return <h1 className="p-6">Barbero no encontrado</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        {barbero.nombre}
      </h1>
      <p className="text-gray-600">
        Especialidad: {barbero.especialidad}
      </p>
    </div>
  );
}