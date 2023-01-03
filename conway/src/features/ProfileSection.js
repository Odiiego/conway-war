import React, { useState } from "react";
import fetchProfile from "../api/fetchProfile";
import Profile from "../components/Profile";
import ProfileInput from "../components/ProfileInput";

const ProfileSection = (inputId) => {
    const [player, setPlayer] = useState(null)

    const createProfile = async (username) => {
        const playerData = await fetchProfile(username)

        setPlayer(playerData)
    }

    return (
        <div>
            {player ? <Profile player={player} /> : <ProfileInput createProfile={createProfile} inputId={inputId} />}
        </div>
    )
}

export default ProfileSection;