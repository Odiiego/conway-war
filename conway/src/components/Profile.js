import React from "react";

const Profile = (player) => {
    return (
        <section className="profile">
            <a target="_blank" rel="noreferrer" href={`${player.player.profile_url}`}>
                <img className="profile__image" src={`${player.player.avatar_url}`} width="100px" alt="" />
                <h2 className="profile__name">{`${player.player.name}`}</h2>
                <h3 className="profile__name">{`${player.player.login}`}</h3>
            </a>
            <p className="profile__description">{`${player.player.bio}`}</p>
        </section>

    )
}

export default Profile;