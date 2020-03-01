// LOCAL
import { resources } from '../../assets'

class Gear extends React.Component {
  render() {
    return (
      <main className="Gear">
        <h1>Desktop Computer</h1>
        {resources.desktop.map(item => <p>{item.title}: {item.name}</p>)}
        <h1>Laptop Computer</h1>
        {resources.laptop.map(item => <p>{item.title}: {item.name}</p>)}
      </main>
    )
  }
}

export default Gear;
