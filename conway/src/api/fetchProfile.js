import axios from "axios";

const fetchProfile = async (username) => {
    const url = `https://api.github.com/users/${username}`
    const res = await axios.get(url)

    const profile = {
        name: res.data.name,
        login: res.data.login,
        bio: res.data.bio || "",
        avatar_url: res.data.avatar_url,
        profile_url: res.data.html_url,
    }
    
    return (profile)
}

export default fetchProfile;