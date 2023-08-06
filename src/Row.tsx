import {useEffect, useState} from "react";
import "./styles/Row.scss";
import axios from "./axios";

export const baseIMGURL: string = "https://image.tmdb.org/t/p/original/";

type Props = {
    title: string;
    fetchUrl: string;
    isLargeRow?: boolean;
};

type Movie = {
    id: string;
    name: string;
    title: string;
    original_name: string;
    poster_path: string;
    backdrop_path: string;
};

export const Row = ({title, fetchUrl, isLargeRow}: Props) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return (
        <div className="Row">
            <h2>{title}</h2>
            <div className="Row-posters">
                {movies.map((movie, i) => (
                    <img
                    key={movie.id}
                    className={`Row-poster ${isLargeRow && "Row-poster-large"}`}
                    src={`${baseIMGURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}
                    alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
};
