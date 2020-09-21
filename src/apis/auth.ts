import axios from 'axios';

export default {
  generateOtp: (data: object) => axios.post("/api/auth/user", data),
  validateOtp: (data: object) => axios.post("/api/auth/otp", data),
  generatePin: (data: object) => axios.put("/api/auth/pin", data),
  validatePin: (data: object) => axios.post("/api/auth/pin", data),
};