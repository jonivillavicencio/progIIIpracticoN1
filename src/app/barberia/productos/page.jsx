export default function Productos() {
  const productos = [
    { id: 1, nombre: "Cera", precio: "$3000" },
    { id: 2, nombre: "Gel", precio: "$2500" },
    { id: 3, nombre: "Aceite para barba", precio: "$4000" },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">
        Productos
      </h1>

      <div className="grid gap-3">
        {productos.map((p) => (
          <div
            key={p.id}
            className="border p-3 rounded"
          >
            <h2>{p.nombre}</h2>
            <p className="text-gray-600">{p.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}