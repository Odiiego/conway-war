import React, { useRef } from "react";
import { GoMarkGithub } from "react-icons/go";

const ProfileInput = ({ createProfile }) => {
    const username = useRef()
    const handleCreateProfile = async (e) => {
        e.preventDefault();

        await createProfile(username.current.value)
    }

    return (
        <form className="form" onSubmit={handleCreateProfile}>
            <input className="form__input" type="text" name="ProfileInput" ref={username} required />
            <button type="submit"><GoMarkGithub /></button>
        </form>
    )
}

export default ProfileInput;