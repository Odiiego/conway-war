import React, { useRef } from "react";

const ProfileInput = ({ createProfile }) => {
    const username = useRef()
    const handleCreateProfile = async (e) => {
        e.preventDefault();

        await createProfile(username.current.value)
    }

    return (
        <form className="form" onSubmit={handleCreateProfile}>
            <input className="form__input" type="text" name="ProfileInput" ref={username} required />
            <input className="form__submit" type="submit" value="submit" />
        </form>
    )
}

export default ProfileInput;