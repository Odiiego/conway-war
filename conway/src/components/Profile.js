import React from "react";

const Profile = (player) => {
    return (
        <a target="_blank" href={`${player.player.profile_url}`}>
            <section className="profile">
                <img className="profile__image" src={`${player.player.avatar_url}`} alt="" />
                <h2 className="profile__name">{`${player.player.name}`}</h2>
                <h3 className="profile__name">{`${player.player.login}`}</h3>
                <p className="profile__description">{`${player.player.bio}`}</p>
            </section>
        </a>
    )
}

export default Profile;