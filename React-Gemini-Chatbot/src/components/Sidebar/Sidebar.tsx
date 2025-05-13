import { React, useState, useEffect, useContext } from 'react'

import { Context } from '../../context/Context';
import './Sidebar.css';

const Sidebar = () => {
    // Sidebar component to display profile images and other content

    const { profiles, activeProfile, setActiveProfile, setShowResult  } = useContext(Context);

    return (
        <div className="sidebar">
            <ProfileList activeProfile={activeProfile} setActiveProfile={setActiveProfile} profiles={profiles} setShowResult={setShowResult} />
        </div>
    );
}

function ProfileList({ activeProfile, setActiveProfile, profiles, setShowResult }) {
    // Function to display a list of profile images

    // Set the initial active profile to the first one in the list
    useEffect(() => {
        setActiveProfile(profiles[0]);
    }, []);

    // Whenever the active profile changes
    useEffect(() => {
        setShowResult(false);
        console.log(activeProfile);
    }, [activeProfile]);

    return (
        <div className="profile-list">
            {profiles.map((profile, index) => (
                <div className="profile" key={profile.id}>
                    <img key={index} src={profile.image} alt={profile.name} className="profileImage" onClick={() => setActiveProfile(profiles[index])} />
                </div>
            ))}
        </div>
    );
}

export default Sidebar;