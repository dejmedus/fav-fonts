import { filtersKey } from "@/data/filtersKey";

// dark/light mode, grid/list mode, and reset
export default function Filters({ setOptions, options }) {
    return (<div className="flex gap-2 mb-2">
        <div className='flex gap-2'>
            <label htmlFor="search">Search:</label>
            <input className="border border-black" id="sampleText" type="text" placeholder='Search...' onChange={(e) => setOptions.search(e.target.value)} />
        </div>
        <div className='flex gap-2'>
            <label htmlFor="sampleText">Sample Text:</label>
            <input className="border border-black" id="sampleText" type="text" placeholder='Spinx of black quartz' onChange={(e) => setOptions.sampleText(e.target.value)} />
        </div>
        <div className='flex gap-2'>
            <label htmlFor="fontSize">Font Size:</label>
            <input className="border border-black" id="fontSize" type="number" placeholder='12' min="12" max="90" value={options.fontSize} onChange={(e) => setOptions.fontSize(e.target.value)} />
        </div>
        <div className='flex gap-2'>
            <label htmlFor="amount">Per page:</label>
            <select name="amount" id="amount" defaultValue="50" onChange={(e) => {
                setOptions.amount(parseInt(e.target.value));
            }}>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="150">150</option>
            </select>
        </div>
        <div className='flex gap-2'>
            <label htmlFor="theme">Theme:</label>
            <select name="theme" id="theme" defaultValue="none" onChange={(e) => {
                e.target.value == 'none' ? setOptions.theme([]) : setOptions.theme([e.target.value])
            }}>
                <option value="none">none</option>
                {Object.keys(filtersKey).map(theme => <option value={theme}>{theme}</option>)}
            </select>
        </div>
    </div>)
}