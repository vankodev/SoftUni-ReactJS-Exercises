import Header from './Header'
import Banner from './Banner'
import Features from './Features'
import Posts from './Posts'

export default function Main() {
  return (
    <div id="main">
    <div className="inner">

        <Header />

        <Banner />

        <Features />

        <Posts />

    </div>
  </div>
  )
}