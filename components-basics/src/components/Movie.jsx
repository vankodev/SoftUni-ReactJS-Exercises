export default function Movie(props) {
  return (
    <>
      <h2>{props.movie.title}</h2>
      <p>{props.movie.description}</p>
    </>
  )
}