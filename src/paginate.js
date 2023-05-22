function paginate(followers) {
  const itemPerPage = 10
  const numOfPages = Math.ceil(followers.length / itemPerPage)

  const newPaginate = Array.from({ length: numOfPages }, (_, index) => {
    const start = index * itemPerPage
    return followers.slice(start, start + 10)
  })

  return newPaginate
}

export default paginate
