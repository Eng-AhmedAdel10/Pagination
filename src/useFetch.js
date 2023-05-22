import { useEffect, useState } from 'react'
import paginate from './paginate'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

function useFetch() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    setIsLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setData(paginate(data))
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, isLoading }
}

export default useFetch
