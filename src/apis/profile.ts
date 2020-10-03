import axios from 'axios';

export default {
  getProfile: () => axios.get("/api/advisor/profile"),
  createProfile: (data: object) => axios.post("/api/advisor/profile", data)
};