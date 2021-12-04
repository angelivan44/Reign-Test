const baseUrl = "https://hn.algolia.com/api/v1/"

const apiFetch =  async (query, page)=>{

  const data = await fetch(`${baseUrl}search_by_date?query=${query}&page=${page}`)
  return await data.json()
  
}

export default apiFetch;