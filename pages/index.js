// LOCAL
import Nav from '../src/components/Nav/index.js'
import Home from '../src/components/Home'

class HomePage extends React.Component {
  render() {
    return (
      <main className="HomePage">
        <Nav />
        <Home />
      </main>
    )
  }
}

export default HomePage;
