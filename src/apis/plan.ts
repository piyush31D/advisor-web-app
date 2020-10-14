import axios from 'axios';

export default {
  createPlan: (data: object,advisorId:string) => axios.post(`/api/advisor/${advisorId}/subscriptionplan`, data),
};