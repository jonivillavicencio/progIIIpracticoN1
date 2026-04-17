import Link from "next/link";

export default function Barberia() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      
      <h2 className="text-4xl font-bold mb-8 p-10 text-center">
        Sobre nosotros
      </h2>

      <section className="text-lg leading-relaxed space-y-4 text-amber-100">
        <p>
          Empezamos cortando desde casa y sumando experiencia a través de cursos, lo que nos permitió ampliar nuestra clientela.
          A tal punto que decidimos abrir nuestro propio espacio <span className="font-semibold">"BARBER CORTE & NAVAJA"</span>.
        </p>

        <p>
          Hoy contamos con varios productos para la venta y buenos profesionales que nos posicionan como una de las mejores barberías de la zona.
        </p>

        <p>
          La meta fue siempre atender de la mejor manera a los clientes, por eso decidimos hacer una página para organizar mejor los turnos y un e-commerce para nuestros productos.
        </p>

        <p>
          Queremos agradecer a todo el personal y a las personas que nos eligen en cada momento.
        </p>
      </section>

    </div>
  );
}