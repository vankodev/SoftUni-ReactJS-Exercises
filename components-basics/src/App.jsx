import MovieList from './components/MovieList'
import Timer from './components/Timer'
import Counter from './components/Counter'
import './App.css'


const movies = [
  {
    title: 'The Matrix',
    description: 'askd asdgj asj laksjh '
  },
  {
    title: 'The Alien',
    description: 'askd asdgj asj laksjh '
  },
  {
    title: 'The Thing',
    description: 'askd asdgj asj laksjh '
  },
]

function App() {
  return (
    <div>
      <h1>My first Dynamic React Application</h1>

      <Timer startTime={5} />

      <Counter />

      <MovieList movies={movies} />
    </div>
  )
}

export default App
