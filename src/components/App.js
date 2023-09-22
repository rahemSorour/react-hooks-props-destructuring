import React from "react";
import MovieCard from "./MovieCard";

function App() {
  
  const socialLinks = {
    github: "https://github.com/liza",
    linkedin: "https://www.linkedin.com/in/liza/",
  };

  return (
    <div>
      <MovieCard links={socialLinks} />
    </div>
  )

}

export default App;
