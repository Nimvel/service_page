import './App.scss';
import Main from './components/Main/Main';
import About from './components/About/About';
import Service from './components/Service/Service';
import Feedback from './components/Feedback/Feedback';
import Clients from './components/Clients/Clients';

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Service />
      <Feedback />
      <Clients />
    </div>
  );
}

export default App;
