import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAlbum, getTracks, likeAlbum } from "./napster-service";

function NapsterAlbumDetails() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState([]);
  const fetchAlbum = async () => {
    const album = await getAlbum(id);
    setAlbum(album);
    const tracks = await getTracks(id);
    setTracks(tracks);
    console.log(album);
  };
  useEffect(() => {
    fetchAlbum();
  }, []);
  return (
    <div>
      <h1>{album.name}</h1>
      <button
        onClick={() => {
          likeAlbum({ name: album.name, albumId: album.id });
        }}
        className="btn btn-warning"
      >
        Like
      </button>
      <br />
      <img
        src={`https://api.napster.com/imageserver/v2/albums/${id}/images/300x300.jpg`}
      />
      <h2>Tracks</h2>
      <ul className="list-group">
        {tracks.map((track) => (
          <li className="list-group-item">
            <>
              {track.name}
              <audio className="float-end" controls>
                <source src={track.previewURL} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </>
          </li>
        ))}
      </ul>
      <div className="row">
        <div className="col-6">
          <pre>{JSON.stringify(album, null, 2)}</pre>
        </div>
        <div className="col-6">
          <pre>{JSON.stringify(tracks, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default NapsterAlbumDetails;
