import axios from "axios";
import formatContributions from "../utils/formatContributions";

const fetchContributions = async (username, inputId) => {
    const proxy = "http://cors-anywhere.herokuapp.com/"
    const url = `https://github-contributions-api.deno.dev/${username}.json`
    const res = await axios.get(`${proxy}${url}`)
    const contributions = res.data.contributions

    return formatContributions(contributions, inputId)
}

export default fetchContributions;