import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import Pagination from './pagination'

const App = () => {
  return (
    <main>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
      <Pagination />
    </main>
  )
}
export default App
