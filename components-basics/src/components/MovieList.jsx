import Movie from './Movie'

export default function MovieList(props) {

  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      <ul>
        <Movie movie={props.movies[0]} />
      </ul>
      <ul>
        <Movie movie={props.movies[1]} />
      </ul>
      <ul>
        <Movie movie={props.movies[2]} />
      </ul>
    </div>
  )
}