import React from "react";
import "../assets/global.scss";

const ListItem = ({
  icon,
  artist,
  name,
  index,
  data,
  selectedSong,
  setSelectedSong,
}) => {
  const handleClick = () => {
    setSelectedSong(data);
  };

  const isSelected = selectedSong.name === name;

  return (
    <div key={index}>
      <div
        className={`list_item ${isSelected ? "selected" : ""}`}
        onClick={handleClick}
      >
        <div>
          <img
            src={`https://cms.samespace.com/assets/${icon}`}
            alt={name}
            width={48}
            height={48}
          />
        </div>
        <div>
          <div className="song_name">{name}</div>
          <div className="artist_name">{artist}</div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ListItem;
