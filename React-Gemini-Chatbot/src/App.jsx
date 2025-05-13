import { useEffect } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

const App = () => {

    useEffect(() => {
        console.log('App rendered')
    }, []);

    return (
        <div className="main">
            <Sidebar />
            <Chat />
        </div>
    )
}

export default App
