import { useEffect, useContext } from 'react'

import { Context } from '../../context/Context';
import './Sidebar.css';

const Sidebar = () => {
    // Sidebar component to display profile images and other content

    const { profiles, activeProfile, setActiveProfile, setShowResult, loading } = useContext(Context);

    return (
        <div className="sidebar">
            <ProfileList activeProfile={activeProfile} setActiveProfile={setActiveProfile} profiles={profiles} setShowResult={setShowResult} loading={loading} />
        </div>
    );
}

function ProfileList({ activeProfile, setActiveProfile, profiles, setShowResult, loading }) {
    // Function to display a list of profile images

    // Whenever the active profile changes
    useEffect(() => {
        setShowResult(false);
    }, [activeProfile]);

    return (
        <div className="profile-list">
            {profiles.map((profile) => {
                const isActive = activeProfile.id === profile.id;

                return (
                    <div className="profile" key={profile.id}>
                        <button
                            type="button"
                            className="profile-button"
                            aria-label={`Select ${profile.name}`}
                            aria-pressed={isActive}
                            disabled={loading}
                            onClick={() => setActiveProfile(profile)}
                        >
                            <img src={profile.image} alt={profile.name} className="profileImage" />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default Sidebar;
