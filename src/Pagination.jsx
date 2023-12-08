import { FaCircleLeft, FaCircleRight } from 'react-icons/fa6'
import { useGlobalContext } from './context'
export default function Pagination() {
  const { total_pages, setTotalPage, setCurrentPage, currentPage } =
    useGlobalContext()
  const handlePaginate = (page) => {
    setCurrentPage(page)
  }
  const backClick = () => {
    if (currentPage == 1) {
      return
    }
    setCurrentPage(currentPage - 1)
  }
  const forwardClick = () => {
    if (currentPage >= 10) {
      return
    }
    setCurrentPage(currentPage + 1)
  }
  return (
    <div className="pagination__container">
      <span>
        <FaCircleLeft
          onClick={backClick}
          className={currentPage == 1 && 'grey-icon'}
        />
        Prev
      </span>
      <span>{currentPage}</span>
      {/* <span onClick={() => handlePaginate(2)}>2</span>
      <span onClick={() => handlePaginate(3)}>3</span> */}
      <span>
        Next
        <FaCircleRight
          onClick={forwardClick}
          className={currentPage >= 10 && 'grey-icon'}
        />
      </span>
    </div>
  )
}
