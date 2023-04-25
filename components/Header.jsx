'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';

export default function Header() {
    const currentPath = usePathname();

    return (
        <header aria-label="Site Header" className="bg-white">
            <div
                className="flex items-center h-16 max-w-screen-xl gap-8 px-6 mx-auto shadow-sm sm:px-8 lg:px-12"
            >
                <Link className="flex items-center gap-2 text-lime-950" href="/">
                    <span className="sr-only">Home</span>
                    <h1 className="text-lg">Fav Fonts</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                </Link>

                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav aria-label="Site Nav" className="justify-end hidden w-full md:flex">
                        <ul className="flex items-center gap-6 text-sm">
                            <Navlink name="Catalog" path="/" currentPath={currentPath} />
                            <Navlink name="Featured" path="/featured" currentPath={currentPath} />
                            <Navlink name="Articles" path="/articles" currentPath={currentPath} />
                            <Navlink name="About" path="/about" currentPath={currentPath} />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


const Navlink = ({ path, name, currentPath }) => {
    return (<li>
        <Link className={`${currentPath == path && "underline"} transition text-neutral-500 hover:text-neutral-500/75`} href={path}>
            {name}
        </Link>
    </li>)
}