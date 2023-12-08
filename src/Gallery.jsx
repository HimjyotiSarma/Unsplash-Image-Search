import { useQuery } from '@tanstack/react-query'
import fetchUnsplash from './utils'
import SingleImage from './SingleImage'
import { nanoid } from 'nanoid'
import { useGlobalContext } from './context'
import { useEffect } from 'react'

export default function Gallery() {
  const { searchResult, currentPage } = useGlobalContext()
  // Fetch Data Initial Step
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['unsplash', searchResult, currentPage],
    queryFn: async () => {
      try {
        const request = await fetchUnsplash.get('/', {
          params: {
            query: `${searchResult}`,
            page: `${currentPage}`,
          },
        })
        const data = await request.data
        const results = data.results
        console.log(data.total_pages)
        return results
      } catch (error) {
        console.log(`The error is : ${error}`)
        throw new Error(error)
      }
    },
  })

  if (isError) {
    return <p>{error}</p>
  }
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="image-container">
      {data.map((item) => {
        return (
          <SingleImage
            link={item.urls.regular}
            description={item.alt_description}
            key={nanoid()}
          />
        )
      })}
    </div>
  )
}
