import UserProfile from './components/UserProfile';
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Conway's Game of Life - PVP Version!</h1>
      <UserProfile inputName={"playerOne"} />
    </div>
  )
};
