import React from 'react'
import { MovieProps } from '../utils/types'

export const MovieCard = ({ Title, Poster, Year }: MovieProps) => {
    return (
        <div className="max-w-32 md:max-w-72">
            <img
                src={
                    Poster !== 'N/A'
                        ? Poster
                        : 'https://m.media-amazon.com/images/M/MV5BZjE1YTA4ZDctOGM0ZS00MGRhLWJhNDgtZWFjNWEwODM4ODI2XkEyXkFqcGdeQXVyMTcwOTQzOTYy._V1_SX300.jpg'
                }
                alt={Title}
                className="w-full"
            />
            <p className="text-white text-center">
                {Title}
                {Year}
            </p>
        </div>
    )
}
