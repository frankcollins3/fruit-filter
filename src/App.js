import './App.css';
import FruitsContainer from './FruitsContainer';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange', 'dragonfruit']
  return (
    <div>
      <FruitsContainer fruits={fruits}/>
   </div>
  );
}

export default App;
