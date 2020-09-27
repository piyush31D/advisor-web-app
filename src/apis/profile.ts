import axios from 'axios';

export default {
  getProfile: () => axios.get("/api/advisor/profile")
};