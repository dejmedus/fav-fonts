'use client'
import { useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'
import { filtersKey } from "@/data/filtersKey";
import { SunSVG, MoonSVG, ResetSVG } from '@/assets/svg/icons';

export default function Filters({ setOptions, options }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const inputCSS = "bg-white border-b-2 dark:bg-black text-inherit dark:border-gray-700 focus:border-black dark:focus:border-white focus:outline-none"

    return (<div className="flex flex-wrap items-center justify-center w-full mb-4 border-black gap-x-2 dark:border-white">
        <label htmlFor="search">Search:</label>
        <input className={inputCSS} id="sampleText" type="text" placeholder='Search...' value={options.search} onChange={(e) => setOptions.search(e.target.value)} />

        <label htmlFor="sampleText">Sample Text:</label>
        <input className={inputCSS} id="sampleText" type="text" placeholder='Spinx of black quartz' value={options.sampleText} onChange={(e) => setOptions.sampleText(e.target.value)} />

        <label htmlFor="fontSize">Font Size:</label>
        <input className={inputCSS} id="fontSize" type="number" placeholder='24' min="24" max="90" value={options.fontSize} onChange={(e) => {
            setOptions.fontSize(e.target.value)
        }} />

        <label htmlFor="amount">Per page:</label>
        <select className="bg-white text-inherit dark:bg-black" name="amount" id="amount" value={options.amount} onChange={(e) => {
            setOptions.amount(parseInt(e.target.value));
        }}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
        </select>

        <label htmlFor="theme">Theme:</label>
        <select className='bg-white text-inherit dark:bg-black' name="theme" id="theme" value={options.theme} onChange={(e) => {
            e.target.value == 'none' ? setOptions.theme('none') : setOptions.theme(e.target.value)
        }}>
            <option value="none">none</option>
            {Object.keys(filtersKey).map(theme => <option key={theme} value={theme}>{theme}</option>)}
        </select>

        <button onClick={setOptions.reset} className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <ResetSVG />
        </button>

        <button onClick={() => toggleTheme()} className="p-1 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
            {theme == 'dark' ? <MoonSVG /> : <SunSVG />}
        </button>

    </div>)
}
