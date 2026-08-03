import './Chatbox.css';
import { FaRegPaperPlane } from "react-icons/fa";

const Chatbox = ({ inputPrompt, setInputPrompt, onSent, loading }) => {
    // This component represents the chat input box where users can type their messages.
    // It includes an input field for the message and a send button (paper plane icon).
    // When the user presses Enter or clicks the send button, it triggers the onSent function.

    const handleSend = () => {
        if (!inputPrompt.trim() || loading) return;
        onSent();
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSend();
        }
    }

    return (
        <div className="chatBox">
            <input type="text"
                className="chat-input"
                placeholder="Type your message here..."
                value={inputPrompt}
                disabled={loading}
                onKeyDown={handleKeyDown}
                onChange={(e) => setInputPrompt(e.target.value)}
            />
            <button type="button" className="send-button" aria-label="Send" disabled={loading} onClick={handleSend}>
                <FaRegPaperPlane className="icon" />
            </button>
        </div>
    );
}

export default Chatbox;
