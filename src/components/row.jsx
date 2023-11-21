import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movies from './movies'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
// import Home from '../pages/home'
const Row = ({title,fetchURl,rowId}) => {
    const [movies,setmovies]= useState([])

    useEffect(()=>{
        axios.get(fetchURl)
        .then((response)=>{
            setmovies(response.data.results)
        })

    },[fetchURl])

    console.log(movies)

    const sliderLeft = () =>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const sliderRight =()=>{
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft=slider.scrollLeft + 500
    }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='flex relative items-center group'>
        <MdChevronLeft onClick={sliderLeft} className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block cursor-pointer" size={40}/>
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item,index)=>(
                <Movies key={index} item={item}/>
            ))}
        </div>
        <MdChevronRight onClick={sliderRight} className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block cursor-pointer" size={40}/>
    </div>
    </>
  )
}

export default Row