import './App.css';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

function App() {
  return (
    // install yarn react-redux
    // yarn add react-redux
    <div className="App">
      <Cart/>
      <Shop/>
    </div>
  );
}

export default App;
