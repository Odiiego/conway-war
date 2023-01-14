import React, { useState } from "react";
import { IoMdClose } from "react-icons/io"

import "./ProfileSection.css"
import ProfileInput from "../components/ProfileInput";
import Profile from "../components/Profile";
import fetchProfile from "../api/fetchProfile";

const ProfileSection = (props) => {
    const [player, setPlayer] = useState(null)

    const createProfile = async (username) => {
        const playerData = await fetchProfile(username, props.inputId)

        setPlayer(playerData)
        props.getPlayerData(props.inputId, playerData.contributions)
    }

    const resetUser = () => {
        setPlayer(null)
        props.getPlayerData(props.inputId, null)
    }

    return (
        <section className="profile__section">
            {player ? <Profile player={player} /> : <ProfileInput createProfile={createProfile} inputId={props.inputId} />}
            <button className={player ? "profile__reset--active" : "profile__reset--inactive"} onClick={resetUser}><IoMdClose size={28} /></button>
        </section>
    )
}

export default ProfileSection;