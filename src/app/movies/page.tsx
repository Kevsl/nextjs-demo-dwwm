'use client'
import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import { MovieProps } from '../utils/types'
import { MovieCard } from '../components/MovieCard'

const Movies = () => {
    const [moviesList, setMoviesList] = useState<MovieProps[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    let [count, setCount] = useState(0)

    useEffect(() => {
        console.log(count)
    }, [count])

    async function displayMovies(query: string) {
        setTotalResults(0)
        setIsLoading(true)
        if (query.length > 2) {
            const reponse = await fetch(
                `https://www.omdbapi.com/?s=${query}&apikey=41bd6dbb`
            )
            const characters = await reponse.json()
            setMoviesList(characters.Search)
            setTotalResults(characters.totalResults)
        }
        setIsLoading(false)
    }

    return (
        <div className="w-full bg-black flex flex-col justify-center">
            <h1 className="text-white text-3xl my-20 text-center">
                Search a movie
            </h1>
            <p className="text-center py-2">
                {totalResults > 0 && `There are ${totalResults} movies.`}
            </p>
            <input
                type="text"
                placeholder="Enter a title"
                className="text-black mx-auto w-72 indent-3"
                onChange={(e) => displayMovies(e.target.value)}
            />
            <div className="flex items-center justify-center flex-col mt-24">
                <Oval
                    visible={isLoading}
                    height="80"
                    width="80"
                    color="#fca311"
                    secondaryColor="#14213D"
                    ariaLabel="oval-loading"
                    wrapperStyle={{ ColorRing: 'white' }}
                    wrapperClass=""
                />
            </div>

            <div className=" flex flex-wrap justify-center ">
                {moviesList &&
                    moviesList.map((movie: MovieProps) => {
                        return (
                            <div key={movie.Poster} className="w-1/3 mx-4 my-4">
                                <MovieCard
                                    Title={movie.Title}
                                    Poster={movie.Poster}
                                    Year={movie.Year}
                                />
                            </div>
                        )
                    })}
            </div>

            <button onClick={() => setCount((count += 1))}>+</button>
            <p className="text-center">{count}</p>
            <button onClick={() => setCount((count -= 1))}>-</button>
        </div>
    )
}

export default Movies
