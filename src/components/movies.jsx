import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/authcontext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movies = ({ item }) => {
    const [like, setlike] = useState(false)
    const [saved,setsaved ] = useState(false)
    const user = UserAuth()

    const movieId = doc(db,'users',`${user?.email}`)
    
    const savedShows = async ()=>{
        if(user?.email){
            setlike(!like)
            setsaved(true)
            await updateDoc(movieId,{
                savedShow:arrayUnion({
                    id:item.id,
                    title: item.title,
                    backdrop_path:item.backdrop_path
                })
            })
        }
        else{
            alert("login to save movies")
        }
    }

    return (
    
            <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
                <div className='top-0 absolute left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                    <p className='white-space-normal text-xs md:text-sm flex justify-center items-center h-full text-center'>{item?.title}</p>
                    <p onClick={savedShows}>{like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
                </div>
            </div>
    
    )
}

export default Movies