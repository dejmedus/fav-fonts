import { filtersKey } from "@/data/filtersKey";

// dark/light mode, grid/list mode, and reset
export default function Filters({ setOptions, options }) {
    return (<div className="flex items-center justify-center gap-2 mb-2 border-black">

        <label htmlFor="search">Search:</label>
        <input className="border-b-2 focus:border-black focus:outline-none" id="sampleText" type="text" placeholder='Search...' value={options.search} onChange={(e) => setOptions.search(e.target.value)} />

        <label htmlFor="sampleText">Sample Text:</label>
        <input className="border-b-2 focus:border-black focus:outline-none" id="sampleText" type="text" placeholder='Spinx of black quartz' value={options.sampleText} onChange={(e) => setOptions.sampleText(e.target.value)} />

        <label htmlFor="fontSize">Font Size:</label>
        <input className="border-b-2 focus:border-black focus:outline-none" id="fontSize" type="number" placeholder='12' min="12" max="90" value={options.fontSize} onChange={(e) => setOptions.fontSize(e.target.value)} />

        <label htmlFor="amount">Per page:</label>
        <select name="amount" id="amount" defaultValue="50" value={options.amount} onChange={(e) => {
            setOptions.amount(parseInt(e.target.value));
        }}>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="150">150</option>
        </select>

        <label htmlFor="theme">Theme:</label>
        <select name="theme" id="theme" value={options.theme} onChange={(e) => {
            e.target.value == 'none' ? setOptions.theme([]) : setOptions.theme([e.target.value])
        }}>
            <option value="none">none</option>
            {Object.keys(filtersKey).map(theme => <option key={theme} value={theme}>{theme}</option>)}
        </select>

        <button onClick={setOptions.reset} className="p-1 rounded-full hover:bg-neutral-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg>
        </button>
    </div>)
}