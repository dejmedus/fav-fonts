'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { SunSVG, MoonSVG, HeartSVG } from '@/assets/svg/icons'


export default function Header() {
    const currentPath = usePathname();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <header aria-label="Site Header" className={theme}>
            <div
                className="flex items-center h-16 max-w-screen-xl gap-8 px-6 mx-auto shadow-sm sm:px-8 lg:px-12 dark:border-b dark:border-gray-800"
            >
                <Link className="flex items-center gap-2 text-gray-900 dark:text-gray-100" href="/">
                    <span className="sr-only">Home</span>
                    <h1 className="text-lg">Fav Fonts</h1>
                    <HeartSVG />
                </Link>

                <div className="flex items-center justify-end flex-1 md:justify-between">
                    <nav aria-label="Site Nav" className="justify-end hidden w-full md:flex">
                        <ul className="flex items-center gap-6 text-sm">
                            <Navlink name="Catalog" path="/" currentPath={currentPath} />
                            <Navlink name="About" path="/about" currentPath={currentPath} />
                            <li>
                                <button onClick={() => toggleTheme()} className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
                                    {theme == 'dark' ? <MoonSVG /> : <SunSVG />}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}


const Navlink = ({ path, name, currentPath }) => {
    return (<li>
        <Link className={`${currentPath == path && "underline"} transition dark:text-gray-200 dark:hover:text-gray-200/75  text-gray-500 hover:text-gray-500/75`} href={path}>
            {name}
        </Link>
    </li>)
}