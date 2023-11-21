import React, { useEffect, useState } from 'react'
import axios from 'axios'
import requestsApi from '../request'

const Main = () => {
    const [movies, setmovies] = useState([])

    const movie = movies[Math.floor(Math.random() * movies.length)]

    const truncateStr = (str, num)=>{
        if(str?.length>num){
            return str.slice(0,num)+'...'
        }
        else{
            return str
        }
    }

    useEffect(() => {
        axios.get(requestsApi.requestToprated)
            .then((response) => {
                setmovies(response.data.results)
            })
    }, [])
    // console.log(movie)

    return (
        <div className='w-full text-white h-[550px]'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className='w-full h-full  object-cover' src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} alt={movie?.title} />
                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                    <div className='my-4'>
                        <button className="border bg-gray-300 text-black py-2 px-5 border-gray-300">Play</button>
                        <button className="border text-white py-2 px-5 border-gray-300 ml-4">Watch Later</button>
                    </div>
                    <p className='text-sm text-gray-400'>Released : {movie?.release_date}</p>
                    <p className='w-full text-white md:max-w-[70%] lg:max-w-[50] xl:max-w-[35%]'>{truncateStr(movie?.overview,150)}</p>
                </div>
            </div>
        </div>
    )
}

export default Main