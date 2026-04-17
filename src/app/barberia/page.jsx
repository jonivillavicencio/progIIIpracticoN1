import Link from "next/link";

export default function Barberia() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Sección Barbería:
      </h2>
      <div className="bg-gray-900 text-white p-4 flex gap-4">
    
        <Link href="/barberia/productos">Ver Nuestros Productos</Link>
      </div>
    </div>
  );
}