import "./TrackList.css";

import Track from "../Track/Track";


const TrackList = ( {lists, isRemovel, onAdd, onRemove} ) => {
    return (
      <div className="TrackList">
        {lists &&
          lists.map((track) => (
            <Track 
              key={track.id} 
              track={track}
              isRemovel={isRemovel}
              onAdd={onAdd} 
              onRemove={onRemove}
            />
          ))
        }
      </div>
    )
};

  export default TrackList;