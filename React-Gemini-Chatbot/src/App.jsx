import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

const App = () => {

    return (
        <div className="main">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default App
