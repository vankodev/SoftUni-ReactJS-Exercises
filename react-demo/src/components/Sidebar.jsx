import Search from './Search'
import Menu from './Menu'
import MiniPosts from './MiniPosts'
import Contact from './Contact'
import Footer from './Footer'

export default function Sidebar() {
  return (
    <div id="sidebar">
    <div className="inner">

        <Search />

        <Menu />

        <MiniPosts />

        <Contact />

        <Footer />

    </div>
  </div>
  )
}