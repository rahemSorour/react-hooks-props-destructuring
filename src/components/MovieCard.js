import React from "react";

function MovieCard({links,  posterSrc = "https://m.media-amazon.com/images/M/MV5BOTJjNzczMTUtNzc5MC00ODk0LWEwYjgtNzdiOTEyZmQxNzhmXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_UY268_CR1,0,182,268_AL_.jpg"}){

return(
  <div className="movie-card">
    <img src={posterSrc} alt={posterSrc} />
    <ul>
     <a href='{links.github}'>{links.github}</a>
     <a href='{links.linkedin}'>{links.linkedin}</a>
    </ul>
  </div>
)
}

export default MovieCard;
