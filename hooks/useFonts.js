'use client'
import { useState, useEffect } from 'react';
import { filtersKey } from '@/data/filtersKey';

export function useFonts() {
  const [allFonts, setAllFonts] = useState([]);
  const [fonts, setFonts] = useState([]);

  const [filters, setFilters] = useState([]);
  const [amount, setAmount] = useState(50);

  const [pageTotal, setPageTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [reset, setReset] = useState(false);
  const resetPage = () => {
    page == 0 ? setReset(cur => !cur) : setPage(0);
  }

  const [paginatedFonts, setPaginatedFonts] = useState([]);
  const [stylesheet, setStylesheet] = useState('');


  useEffect(() => {
    console.log('fetching google fonts');
    async function getFontsData() {
      // fetch webfonts from api route
      const res = await fetch('/api/webfonts');

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const webfonts = await res.json();
      setFonts(webfonts.data.items);
      setAllFonts(webfonts.data.items);
    }
    getFontsData();
  }, [])

  useEffect(() => {
    if (allFonts.length > 0) {
      let shownFonts = allFonts;
      if (filters.length !== 0) {
        const families = new Set(filters.flatMap(key => filtersKey[key]));
        shownFonts = allFonts.filter(a => families.has(a.family));

        if (shownFonts.length == 0) {
          console.error('No fonts of filter families')
          shownFonts = allFonts
        }
      }
      setFonts(shownFonts);
      setPageTotal(Math.ceil(shownFonts.length / amount) - 1);
      resetPage();
    }
  }, [allFonts, filters]);

  useEffect(() => {
    if (allFonts.length > 0) {
      console.log('Updating paginated fonts.');
      const start = page * amount;
      const end = Math.min(start + amount, fonts.length);
      const newPaginatedFonts = fonts.slice(start, end)

      let query = ''
      for (let i = 0; i < amount; i++) {
        query += (newPaginatedFonts[i].family).replace(' ', '+') + '|'
      }

      setStylesheet(`https://fonts.googleapis.com/css?family=${query}`);
      setPaginatedFonts(newPaginatedFonts);
    }
  }, [page, reset])

  function changePage(newPage) {
    if (newPage >= 0 && newPage <= pageTotal) {
      setPage(newPage);
    }
  }

  function changeFilters(newFilters) {
    setFilters(newFilters);
  }

  function changeAmount(newAmount) {
    setAmount(newAmount);
    setPageTotal(Math.ceil(fonts.length / newAmount) - 1);
    resetPage();
  }

  return { fonts: paginatedFonts, pageTotal, page, changePage, changeFilters, changeAmount, stylesheet };
}
