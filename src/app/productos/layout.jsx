import Link from "next/link"

export default function productosLayout({children}) {
    return(
        <div className="flex min-h-screen bg-mauve-700">
            <aside className="w-72 py-8 px-6 border-r flex flex-col">
                <Link href={"/productos/productos_cabello"} className="hover:text-white">Productos para cabello</Link>
                <Link href={"/productos/productos_barba"} className="hover:text-white">Productos para barba</Link>
            </aside>
            {children}
        </div>
    )
}