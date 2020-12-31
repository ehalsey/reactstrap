import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Main from './main/main'

function App() {
    return (
    <div className = "App" >
        <header className = "App-header" >
            <img src = { logo } className = "App-logo" alt = "logo"/>
            <p>Edit <code>src/App.js</code> and save to reload.</p>
            <Button>Does this work Yes it does</Button>
            <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer">Learn React</a>
            <Main version="1"></Main>
        </header>
    </div>
    );
}

export default App;