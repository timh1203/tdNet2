// LOCAL
import Nav from '../src/components/Nav'
import Blog from '../src/components/Blog'

class BlogPage extends React.Component {
  render() {
    return (
      <main className="BlogPage">
        <Nav />
        <Blog />
      </main>
    )
  }
}

export default BlogPage;
