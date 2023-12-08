import { useContext, createContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

const getInitialDarkScheme = () => {
  const newDarkScheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  console.log(newDarkScheme)
  const storedTheme = localStorage.getItem('darkTheme')
  if (storedTheme === null) {
    return newDarkScheme
  }
  return storedTheme === 'true'
}

export const AppContext = ({ children }) => {
  const [isThemeDark, setIsThemeDark] = useState(getInitialDarkScheme())
  const [searchResult, setSearchResult] = useState('dog')
  const [currentPage, setCurrentPage] = useState(1)
  const [total_pages, setTotalPage] = useState(5)

  const toggleDarkTheme = () => {
    const newThemeColor = !isThemeDark
    setIsThemeDark(newThemeColor)
    localStorage.setItem('darkTheme', newThemeColor)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isThemeDark)
  }, [isThemeDark])
  return (
    <GlobalContext.Provider
      value={{
        isThemeDark,
        toggleDarkTheme,
        searchResult,
        setSearchResult,
        currentPage,
        setCurrentPage,
        total_pages,
        setTotalPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
