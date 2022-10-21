import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery, useGetSongsBySearchQuery, useGetTopChartsQuery } from '../redux/services/Core';
import { useParams } from 'react-router-dom';


const Search = () => {
const {search} = useParams();
    const {activeSong, isPlaying } = useSelector((state)=> state.player);
   
    const {data, isFetching, error } = useGetSongsBySearchQuery({search})
    console.log(search);

    const songs = data?.tracks?.hits?.map((song)=> song.track )

if(isFetching ) return <Loader title="Loading Songs around you ......"/>
if(error ) return <Error />

return(
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
Showing Result for <span className='font-black'>{search}</span>
        </h2>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
{songs?.map((song,i)=>(
    <SongCard
    key={song.key}
     song={song}
     isPlaying={isPlaying}
     activeSong={activeSong}y
     data={data}
     i={i}
    />
))}
        </div>
    </div>
)
}
export default Search;