import React, { useState, useEffect } from 'react'
import axios from "../axios"
import "./Row.css"
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerUrl] = useState("")

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        console.log(trailerURL)
        if (trailerURL) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'))
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h1>{title}</h1>
            <div className="row__posters">
                {movies.map((movie) =>
                    <img key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__postersLarge"}`}
                        src={base_url + (isLargeRow ? movie.poster_path : movie?.backdrop_path)}
                        alt={movie.name} />
                )}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
        </div>
    )
}

export default Row
