import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery, useGetTopChartsQuery } from '../redux/services/Core';


const TopCharts = () => {

    const {activeSong, isPlaying } = useSelector((state)=> state.player);
   
    const {data, isFetching, error } = useGetTopChartsQuery()

if(isFetching ) return <Loader title="Loading Songs around you ......"/>
if(error ) return <Error />

return(
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
Discover Top Chart
        </h2>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
{data?.map((song,i)=>(
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
export default TopCharts;
