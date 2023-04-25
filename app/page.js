'use client'
import { useState } from 'react'
import { useFonts } from '@/hooks/useFonts'
import { filtersKey } from '@/data/filtersKey';
import { Pagination } from '@/components/Pagination';


export default function Home() {
  const { fonts, pageTotal, page, changePage, changeTheme, changeAmount, stylesheet } = useFonts();

  const [sampleText, setSampleText] = useState('Spinx of black quartz');
  const [fontSize, setFontSize] = useState(24);

  const options = {
    sampleText: sampleText,
    fontSize: fontSize
  }

  const setOptions = {
    sampleText: setSampleText,
    fontSize: setFontSize,
    amount: changeAmount,
    theme: changeTheme
  }

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-2 sm:p-6 md:p-12 lg:p-24">
      <Filters setOptions={setOptions} options={options} />
      {fonts.length > 0 ? <Fonts fonts={fonts} options={options} stylesheet={stylesheet} /> : <LoadingFonts />}
      {pageTotal > 0 ? <Pagination page={page} changePage={changePage} pageTotal={pageTotal} /> : null}
    </main>
  )
}

function Filters({ setOptions, options }) {
  return (<div className="flex gap-2 mb-2">
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

function LoadingFonts() {
  return <div className="flex flex-wrap gap-2">
    {[...Array(50).keys()].map(card => {
      return <div
        key={card}
        className="flex-1 p-4 pt-2 border border-gray-100 bg-gray-100 rounded shadow-md sm:p-6 sm:pt-4 basis-full sm:basis-5/12 md:basis-3/12 lg:basis-1/5 h-[220px]"
      ></div>
    })}
  </div>
}

function Fonts({ fonts, options, stylesheet }) {
  return (<div className="flex flex-wrap gap-2">
    <link rel="stylesheet" href={stylesheet} />
    {fonts !== null ? fonts?.map(font => {
      return <FontCard family={font.family} category={font.category} options={options} />
    }) : null}
  </div>)
}

// {"category": "sans-serif", "family": "ABeeZee", "files": {"regular": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf", "italic": "http://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCklZUCGpG-GQ.ttf"}, "kind": "webfonts#webfont", "lastModified": "2022-09-22", "menu": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tOklQ.ttf", "subsets": ["latin", "latin-ext"], "variants": ["regular", "italic"], "version": "v22"}

function FontCard({ family, category, options }) {

  const sampleText = options.sampleText == '' ? 'Spinx of Black Quartz' : options.sampleText;

  return (<div
    key={family}
    className="flex-1 grid justify-between p-4 pt-2 border border-gray-100 rounded shadow-md sm:p-6 sm:pt-4 basis-full sm:basis-5/12 md:basis-3/12 lg:basis-1/5 h-[220px]"
  >
    <div>
      <h2 className="font-semibold font-lg marker:file:text-sm">
        {family}
      </h2>
      <p className="text-sm italic border-b-1 border-black/80">
        {category}
      </p>
    </div>

    <div className="overflow-hidden">
      <h3 style={{ fontFamily: family + ', ' + category, fontSize: Math.max(Math.min(options.fontSize, 90), 12) }} className='p-1 overflow-scroll whitespace-nowrap'>
        {sampleText}
      </h3>
    </div>
  </div>
  )
}

