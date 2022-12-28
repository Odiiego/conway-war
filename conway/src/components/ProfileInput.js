import React from "react";

const ProfileInput = () => {
    <form className="form" onSubmit={ handleFecthProfile }>
        <input className="form__input" type="text" name="ProfileInput" />
        <input className="form__submit" type="submit" value="submit" />
    </form>
}

export default ProfileInput;