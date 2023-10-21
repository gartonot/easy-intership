import axios from "axios";
import settings from '../../config/settings.js'
export default {
  usersFetch: async () => {
    const { data } = await axios.get(`${settings.apiUrl}/api/users`)
    return data
  }
}