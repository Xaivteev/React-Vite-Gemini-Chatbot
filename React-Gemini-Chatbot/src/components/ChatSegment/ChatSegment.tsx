import { React } from 'react';
import './ChatSegment.css';
import DOMPurify from 'dompurify';

const Chat = ({ name, text }) => {
    const cleanText = DOMPurify.sanitize(text);

    return (
        <div className="resultData">
            <p>{name}: <br /><span dangerouslySetInnerHTML={{ __html: cleanText }}></span></p>
        </div>
    );
}

export default Chat;