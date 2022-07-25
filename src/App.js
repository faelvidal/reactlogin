import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sua Impressora Parou?
        </p>
        <a
          className="App-link"
          href="https:zendesk.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Abra Seu Ticket no Zendesk
        </a>
      </header>
    </div>
  );
}

export default App;
