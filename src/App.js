import logo from './logo.svg';
import './App.css';
import StopWatch from './Components/StopWatch';
import { StopWatchProvider } from './Context/Store';

function App() {
  return (
    <>
    <StopWatchProvider>
    <StopWatch/>
    </StopWatchProvider>
    </>
  );
}

export default App;
