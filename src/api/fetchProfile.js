import axios from "axios";
import fetchContributions from "./fetchContributions";

const fetchProfile = async (username, inputId) => {
    const url = `https://api.github.com/users/${username}`
    const res = await axios.get(url)

    const profile = {
        name: res.data.name,
        login: res.data.login,
        bio: res.data.bio || "",
        avatar_url: res.data.avatar_url,
        profile_url: res.data.html_url,
        contributions: await fetchContributions(username, inputId)
    }

    return (profile)
}

export default fetchProfile;