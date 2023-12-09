import Gallery from './Gallery'
import SearchForm from './SearchForm'
import ThemeToggle from './ThemeToggle'
import Pagination from './Pagination'

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
