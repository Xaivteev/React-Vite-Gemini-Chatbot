import {React, useContext} from 'react';
import './Chat.css';
import { Context } from '../../context/Context';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import Chatbox from '../Chatbox/Chatbox';
import ChatSegment from '../ChatSegment/ChatSegment';

const Chat = () => {
    // This component represents the main chat interface.
    // It displays the active profile's image and name, and shows the chat history or a loading indicator based on the state.
    // It also includes the chat input box for sending messages.

    const {
        recentPrompt,
        showResult,
        loading,
        resultData,
        activeProfile,
        setInputPrompt,
        onSent
    } = useContext(Context);

    return (
        <div className="chat">
            <div className="activeProfile">
                <img src={activeProfile.image} alt={activeProfile.name} className="headerImage" />
                {!showResult
                    ? <h1>Hello, I am <span className="text-gradient">{activeProfile.name}</span></h1>
                    : <div className="result">
                        {loading
                            ? <LoadingIndicator size="200" margin="100"/>
                            : <span>
                                <ChatSegment name='You' text={recentPrompt} />
                                <ChatSegment name={activeProfile.name} text={resultData} />
                            </span>
                        }
                    </div>
                }
            </div>
            <Chatbox setInputPrompt={setInputPrompt} onSent={onSent} />
        </div>
    );
}

export default Chat;