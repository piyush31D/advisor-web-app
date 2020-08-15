import axios from 'src/utils/axios';

export default {
  signIn: (data: object) => axios.post("/api/advisor/signin", data),
  validateOtp: (data: object) => axios.post("/api/advisor/otp", data),
};