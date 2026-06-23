import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="bg-mauve-900 text-white px-20">
            <section className="w-full flex justify-between items-center p-12">
                <div className="flex">
                <h1 className="text-lg font-bold text-amber-400">Corte & Navaja</h1>
                </div>
                <div className="flex items-center gap-6 text-zinc-300">
                <Link href={"/"} className=" hover:text-white">Home</Link>
                <Link href={"/barberia"} className=" hover:text-white">Barber</Link>
                <Link href={"/barbero"} className=" hover:text-white">Barberos</Link>
                <Link href={"/cortes"} className=" hover:text-white">Cortes</Link>
                <Link href={"/productos"} className=" hover:text-white">Productos</Link>
                </div>
            </section>
        </nav>
    );
}   