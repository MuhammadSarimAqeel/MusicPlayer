import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery, useGetSongDetailsQuery, useGetSongRelatedQuery } from "../redux/services/Core";

import { playPause, setActiveSong } from "../redux/features/playerSlice";

const ArtistDetails = () => {

    
    const dispatch = useDispatch();
    const {id:artistId} = useParams()
    const {activeSong , isPlaying}= useSelector((state)=> state.player)
const {data:artistData, isFetching: isFetchingartistDetails, error} =useGetArtistDetailsQuery({artistId})


if(isFetchingartistDetails ) return <Loader title="Loading artist details....."/>
if(error) return <Error/>
    return (
<div className="flex flex-col">
    <DetailsHeader artistId={artistId} artistData={artistData} />

    <RelatedSongs
    data={Object.values(artistData?.songs)}
    isPlaying={isPlaying}
    activeSong={activeSong}
    artistId={artistId} 
    />
</div>

 
    )
};

export default ArtistDetails;
