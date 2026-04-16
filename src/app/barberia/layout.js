import Link from "next/link";

export default function BarberiaLayout({ children }) {
  return (
    <div>
      {/* Sub navbar */}
      <div className="bg-gray-900 text-white p-4 flex gap-4">
    
        <Link href="/barberia/productos">Productos</Link>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">
          Sección Barbería
        </h2>

        {children}
      </div>
    </div>
  );
}