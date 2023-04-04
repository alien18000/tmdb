import  {useState, useEffect } from 'react' 
import axios from 'axios'
import {API_KEY, BASE_URL } from '../api/config'

export default function useFetchData(URL) {
    const [data,setData] = useState([])
    const [newData,setNewData] = useState([])
    const [genres, setGenres] = useState([])
    const [error, setError ] = useState (null)
    const [page, setPage ] = useState(1)

    useEffect (() => {
        async function fetchData () {
            try {
                const response = await axios.get(`${BASE_URL}/${URL}?api_key=${API_KEY}&language=en-US&page=${page}`);
                const movieList = await response.data.results
                setGenres (response.data.genres)
                setData(movieList)
                setNewData([...newData,...data])

            } catch (err) {
                console.log (err)
                setError(err)
            } 

            }
            fetchData()
        },[URL,page]);
  return {data, error,genres, setPage ,newData ,setNewData}
}
