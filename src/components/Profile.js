import React from "react";

import "./Profile.css"

const Profile = (player) => {
    return (
        <section className="profile">
            <img className="profile__image" src={`${player.player.avatar_url}`} alt="" />
            <a target="_blank" rel="noreferrer" href={`${player.player.profile_url}`}>
                <h2 className="profile__name">{`${player.player.name}`}</h2>
                <h3 className="profile__login">{`${player.player.login}`}</h3>
            </a>
            <p className="profile__description">{`${player.player.bio}`}</p>
        </section>

    )
}

export default Profile;