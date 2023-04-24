'use client'
import { Pagination } from '@/components/Pagination';
import { useFonts } from '@/hooks/useFonts'
import { useEffect, useState } from 'react'

export default function Home() {
  const { fonts, pageTotal, page, changePage, changeFilters, changeAmount, stylesheet } = useFonts();
  const [sampleText, setSampleText] = useState('Spinx of black quartz');

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Filters setSampleText={setSampleText} />
      {fonts.length > 0 ? <Fonts fonts={fonts} sampleText={sampleText} stylesheet={stylesheet} /> : <p>Loading...</p>}
      {page > 0 ? <Pagination page={page} changePage={changePage} pageTotal={pageTotal} /> : null}
    </main>
  )
}

function Filters({ setSampleText }) {
  return (<div className="flex gap-2 mb-2">
    <label htmlFor="sampleText">Sample Text:</label>
    <input className="border border-black" id="sampleText" type="text" placeholder='Spinx of black quartz' onChange={(e) => setSampleText(e.target.value)} />
  </div>)
}

function Fonts({ fonts, sampleText, stylesheet }) {
  return (<div className="grid grid-cols-4 gap-2">
    <link rel="stylesheet" href={stylesheet} />
    {fonts !== null ? fonts?.map(font => {
      return <FontCard fontObj={font} family={font.family} category={font.category} sampleText={sampleText} />
    }) : null}
  </div>)
}

// {"category": "sans-serif", "family": "ABeeZee", "files": {"regular": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN6tKukbcHCpE.ttf", "italic": "http://fonts.gstatic.com/s/abeezee/v22/esDT31xSG-6AGleN2tCklZUCGpG-GQ.ttf"}, "kind": "webfonts#webfont", "lastModified": "2022-09-22", "menu": "http://fonts.gstatic.com/s/abeezee/v22/esDR31xSG-6AGleN2tOklQ.ttf", "subsets": ["latin", "latin-ext"], "variants": ["regular", "italic"], "version": "v22"}

function FontCard({ fontObj, family, category, sampleText }) {
  sampleText = sampleText == '' ? 'Spinx of Black Quartz' : sampleText;
  return (<div
    className="p-4 border border-gray-100 rounded shadow-xl sm:p-6"
  >
    <div key={family} value={fontObj} className="text-black ">
      <p className="mt-2 font-semibold marker:file:text-sm">
        {family}
      </p>
      <p className="text-sm italic border-b-1 border-black/80">
        {category}
      </p>
      <h3 style={{ fontFamily: family + ', ' + category }} className='mt-4 text-lg font-semibold sm:text-xl'>
        {sampleText}
      </h3>
    </div>
  </div>
  )
}

