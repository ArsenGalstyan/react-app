import './App.css';
import Test2 from './comp/Test2'

function App() {
  function plus(tiv) {
    console.log(`avelacrelenq`,tiv);
  }



  return (
    
    <div className="App">
        <Test2 plus={plus} />

    </div>
  );
}

export default App;
