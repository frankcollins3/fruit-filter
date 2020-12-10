import './App.css';
import FruitsContainer from './FruitsContainer';

function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange']
  return (
    <div>
      <FruitsContainer fruits={fruits}/>
   </div>
  );
}

export default App;
