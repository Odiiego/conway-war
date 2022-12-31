import axios from "axios";

const fetchContributions = async (username) => {
    // const res = await axios.get(`http://cors-anywhere.herokuapp.com/https://github-contributions-api.deno.dev/${username}.text`)

    const proxy = "http://cors-anywhere.herokuapp.com/"
    const url = `https://github-contributions-api.deno.dev/${username}.json`
    const res = await axios.get(`${proxy}${url}`)

    console.log(res.data)
    return res
}

export default fetchContributions;