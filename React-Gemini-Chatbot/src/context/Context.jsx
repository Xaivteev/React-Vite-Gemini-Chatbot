import { createContext, useState } from "react";
import runChat from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [inputPrompt, setInputPrompt] = useState(''); // Input text from user
    const [recentPrompt, setRecentPrompt] = useState(''); // Last prompt sent to the AI
    const [showResult, setShowResult] = useState(false); // Flag to show/hide result
    const [loading, setLoading] = useState(false); // Loading state for the AI response
    const [resultData, setResultData] = useState(''); // AI response data

    const [activeProfile, setActiveProfile] = useState({}); // Active profile for the AI response

    const profiles = [
        {
            id: 0,
            name: "Ken",
            image: "./ken mugshot.jpg",
            color1: "#F504F7",
            color2: "#0087FA",
            promptAdjustment: "Respond to the following prompt as Ken from the Barbie movie, who is highly charismatic, forthright, brash and slightly dim-witted, often serving as the butt of some jokes: "
        },
        {
            id: 1,
            name: "Spurgeon",
            image: "./spurgeon in the wild.png",
            color1: "#FF7582",
            color2: "#73D154",
            promptAdjustment: "Respond to the following prompt as Spurgeon, who is a blend of a pokemon named Spurgeon and the NHL hockey player Jared Spurgeon. You must begin your response with 'Spurgeon Spurgeon' and say 'Spurgeon' throughout your response: " // My little brother mispronounced Spurgeon's name to sound more like an Eevee evolution from pokemon, so that's where this joke comes from
        }
    ]

    const onSent = async () => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(inputPrompt);

        const adjustedPrompt = activeProfile.promptAdjustment + inputPrompt;

        const response = await runChat(adjustedPrompt);

        let responseArray = response.split("**");
        let boldedResponseArray = [];
        console.log(responseArray);
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                boldedResponseArray += responseArray[i];
            } else {
                boldedResponseArray += "<b>" + responseArray[i] + "</b>";
            }
        }

        let italicsResponseArray = boldedResponseArray.split("*");

        let finalResponseArray = [];

        for (let i = 0; i < italicsResponseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                finalResponseArray += italicsResponseArray[i];
            } else {
                finalResponseArray += "<i>" + italicsResponseArray[i] + "</i>";
            }
        }

        setResultData(finalResponseArray);
        setLoading(false);
        setInputPrompt("");
    }

    const contextValue = {
        inputPrompt, setInputPrompt,
        recentPrompt, setRecentPrompt,
        showResult, setShowResult,
        loading, setLoading,
        resultData, setResultData,
        activeProfile, setActiveProfile,
        onSent, profiles
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;