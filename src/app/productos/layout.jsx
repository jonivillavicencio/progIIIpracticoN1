import Link from "next/link"

export default function productosLayout({children}) {
    return(
        <div className="flex min-h-screen bg-mauve-800">
            <aside className="w-72 py-8 px-6 border-r flex flex-col pt-20 text-amber-400 gap-10">
                <Link href={"/productos/productos_cabello"} className="hover:text-zinc-200 hover:scale-105 transition">Productos para cabello</Link>
                <Link href={"/productos/productos_barba"} className="hover:text-zinc-200 hover:scale-105 transition">Productos para barba</Link>
            </aside>
            {children}
        </div>
    )
}