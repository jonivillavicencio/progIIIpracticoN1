export default function Barberia() {


return (
  <div>
    <div className="bg-mauve-800 h200 w-full justify-center items-center flex flex-col px-70 pt-30 pb-40">
        <h2 className="text-6xl text-white font-bold mb-30 p-10 text-center border-b">
          Sobre nosotros
        </h2>
        <section className="text-xl leading-relaxed space-y-7 text-zinc-300 font-sans text-center">
          <p>
            Empezamos cortando desde casa y sumando experiencia a través de cursos, lo que nos permitió ampliar nuestra clientela.
            A tal punto que decidimos abrir nuestro propio espacio <span className="font-semibold text-xl">"BARBER CORTE & NAVAJA"</span>.
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
  </div>
  );
}