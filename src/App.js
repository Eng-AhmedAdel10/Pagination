import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
import Followers from './Followers'

function App() {
  const { data, isLoading } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  console.log(data)
  useEffect(() => {
    if (isLoading) return
    setFollowers(data[page])
  }, [isLoading, page, data])

  const computePage = (index) => {
    let num = null
    if (index > data.length - 1) {
      num = 0
      return num
    }
    if (index < 0) {
      num = data.length - 1
      return num
    }
    return index
  }

  const handleNext = () => {
    setPage((oldpage) => {
      oldpage += 1
      return computePage(oldpage)
    })
  }

  const handlePrev = () => {
    setPage((oldpage) => {
      oldpage -= 1
      return computePage(oldpage)
    })
  }

  const handleIndex = (index) => {
    setPage(index)
  }

  return (
    <main>
      <div className="section-title'">
        <h1>{isLoading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>

      <section className='followers'>
        <div className='container'>
          {followers.map((item) => {
            return <Followers key={item.id} {...item} />
          })}
        </div>

        {!isLoading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={handlePrev}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handleIndex(index)}
                >
                  {index + 1}
                </button>
              )
            })}
            <button className='next-btn' onClick={handleNext}>
              next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
