import React, { useEffect, useState } from 'react'
import SearchBar from './SearchBar.jsx'
import SelectMenu from './SelectMenu.jsx'
import CountriesList from './CountryList.jsx'
import { useOutletContext } from 'react-router-dom'
import useWindowSize from './utility/showSize.jsx'

const Home = () => {
  const windowSize = useWindowSize()
  const [query, setQuery] = useState('')
  const [dark] = useOutletContext()
  return (
    <>
      <main className={`${!dark ? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery} />
          <SelectMenu setQuery={setQuery} />
        </div>
        {/* <h1 style={{textAlign:'center'}}>{windowSize.width} X {windowSize.height}</h1> */}
        <CountriesList query={query} />
      </main>
    </>
  )
}

export default Home
