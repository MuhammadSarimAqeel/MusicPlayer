import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ArtistCard, Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery, useGetTopChartsQuery } from '../redux/services/Core';


const TopArtists = () => {

    const {activeSong, isPlaying } = useSelector((state)=> state.player);
   
    const {data, isFetching, error } = useGetTopChartsQuery()

if(isFetching ) return <Loader title="Loading Songs around you ......"/>
if(error ) return <Error />

return(
    <div className='flex flex-col'>
        <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
Top Artists
        </h2>
        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
{data?.map((track,i)=>(
    <ArtistCard
    key={track.key}
     track={track}
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
export default TopArtists;
