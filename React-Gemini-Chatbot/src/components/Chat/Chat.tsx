import {React, useState, useContext} from 'react';
import './Chat.css';
import { Context } from '../../context/Context';
import { FaRegPaperPlane, FaSpinner } from "react-icons/fa";

const Chat = () => {

    const {
        setInputPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        onSent, activeProfile,
    } = useContext(Context);

    const [chatboxInputValue, setChatboxInputValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            onSent();
            setChatboxInputValue('');
        }
    }

    return (
        <div className="chat">
            <div className="activeProfile">
                <img src={activeProfile.image} alt={activeProfile.name} className="headerImage" />
                {!showResult
                    ? <h1>Hello, I am <span className="text-gradient">{activeProfile.name}</span></h1>
                    : <div className="result">
                        {loading
                            ? <div className="loader">
                                <FaSpinner className="custom-spinner"/>
                            </div>
                            : <span>
                                <div className="resultTitle">
                                    <p>You: <br />{recentPrompt}</p>
                                </div>
                                <div className="resultData">
                                    <p>{activeProfile.name}: <br /><span dangerouslySetInnerHTML={{__html:resultData}}></span></p>
                                </div>
                            </span>
                        }
                    </div>
                }
            </div>
            <div className="responseBox">
            </div>
            <div className="chatBox">
                <input type="text"
                    className="chat-input"
                    placeholder="Type your message here..."
                    value={chatboxInputValue}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => {
                    setInputPrompt(e.target.value);
                    setChatboxInputValue(e.target.value);
                }} />
                <FaRegPaperPlane className="icon" onClick={() => {
                    onSent();
                    setChatboxInputValue('');
                }} />
            </div>
        </div>
    );
}

export default Chat;