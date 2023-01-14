import React, { useRef } from "react";

import "./ProfileInput.css"

const ProfileInput = ({ createProfile }) => {
    const username = useRef()
    const handleCreateProfile = async (e) => {
        e.preventDefault();

        await createProfile(username.current.value)
    }

    return (
        <form className="profile__form" onSubmit={handleCreateProfile}>
            <input className="profile__form__input" type="text" name="ProfileInput" ref={username} required />
            <button className="profile__form__submit" type="submit">SELECT PLAYER</button>
        </form>
    )
}

export default ProfileInput;