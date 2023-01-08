import React, { useState } from "react";
import { IoMdClose } from "react-icons/io"
import fetchProfile from "../api/fetchProfile";
import Profile from "../components/Profile";
import ProfileInput from "../components/ProfileInput";

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
        <section>
            {player ? <Profile player={player} /> : <ProfileInput createProfile={createProfile} inputId={props.inputId} />}
            <button className={player ? "active" : "inactive"} onClick={resetUser}><IoMdClose/></button>
        </section>
    )
}

export default ProfileSection;