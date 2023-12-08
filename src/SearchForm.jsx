import { MdDragHandle } from 'react-icons/md'
import { useGlobalContext } from './context'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import fetchUnsplash from './utils'
import { useEffect } from 'react'

export default function SearchForm() {
  // Mutate Search Result based on input
  const queryClient = useQueryClient()
  const { setSearchResult } = useGlobalContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value
    if (!searchValue) {
      return console.log('Enter some Data')
    }
    setSearchResult(searchValue)
  }
  return (
    <section>
      <h1 className="title">Unsplash Image</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="dog"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  )
}
