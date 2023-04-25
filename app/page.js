'use client'
import { useState, useContext } from 'react'
import { ThemeContext } from '@/context/ThemeContext'

import { useFonts } from '@/hooks/useFonts'

import Filters from '@/components/Filters';
import Fonts from '@/components/Fonts';
import LoadingFonts from '@/components/LoadingFonts';
import Pagination from '@/components/Pagination';
import Top from '@/components/Top'

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const { fonts, pageTotal, page, changePage, changeTheme, changeSearch, changeAmount, current, stylesheet } = useFonts();

  const [sampleText, setSampleText] = useState('Spinx of black quartz hear my vow');
  const [fontSize, setFontSize] = useState(24);

  function reset() {
    setSampleText('Spinx of black quartz hear my vow');
    setFontSize(24);
    changeTheme('none');
    changeSearch('');
    changeAmount(50);
  }

  const options = {
    sampleText: sampleText,
    fontSize: fontSize,
    amount: current.amount,
    theme: current.theme,
    search: current.search,
  }

  const setOptions = {
    sampleText: setSampleText,
    fontSize: setFontSize,
    amount: changeAmount,
    theme: changeTheme,
    search: changeSearch,
    reset: reset
  }

  return (
    <main id="top" className={`${theme} flex flex-col items-center justify-between min-h-screen p-2 sm:p-6 md:p-12 lg:px-20`}>
      <Filters setOptions={setOptions} options={options} />
      {fonts.length > 0 ? <Fonts fonts={fonts} options={options} stylesheet={stylesheet} /> : <LoadingFonts />}
      {pageTotal > 0 ? <Pagination page={page} changePage={changePage} pageTotal={pageTotal} /> : null}
      {fonts.length > 18 ? <Top /> : null}
    </main>
  )
}