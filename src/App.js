import React, {useEffect, useState} from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

// a59b30cd
const API_URL = "http://www.omdbapi.com?apikey=a59b30cd";

const movie1 = {
    "Title": "Spiderman the Verse",
    "Year": "2019–",
    "imdbID": "tt12122034",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
};
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

   const searchMovies = async (title)=> {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
        setMovies(data.Search);
        //console.log(data);


   

    }

    useEffect(()=>{
        searchMovies('Spiderman');

    }, []);
    return(
        
        <div className ="app">
            <h1>Movie Land</h1>
        
         <div className="search">
            <input
            placeholder="search movies"
            value= {searchTerm}
            onChange={(e)=> {
                setSearchTerm(e.target.value);

            }}
            />
            <img
            src={SearchIcon}
            alt="Search"
            onClick={()=>{
                searchMovies(searchTerm);

            }}
            />
            

            </div>

            {
                movies?.length >0 ? (
                    <div className="container">
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))

                }

            </div>

                ) :
                <div className="empty"> 
                <h2>No movies found </h2>
                </div>

            }
            


        </div>
        
    );

} 
//above {} this means opening dynamic block of code.

export default App;