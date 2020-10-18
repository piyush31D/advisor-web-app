import axios from 'axios';

export default {
  getInvestors: (advisorId: string) => axios.get(`/api/advisor/${advisorId}/investor`),
  getInvestorsByName: (advisorId: string, queryString: string) => axios.get(`/api/advisor/${advisorId}/investor?name=${queryString}`),
  getGroups: (advisorId: string) => axios.get(`/api/advisor/${advisorId}/investorgroup`),
  createGroup: (data: object, advisorId: string) => axios.post(`/api/advisor/${advisorId}/investorgroup`, data),
  getGroup: (advisorId: string, groupId: string) => axios.get(`/api/advisor/${advisorId}/investorgroup/${groupId}`),
  addInvestorsToGroup: (advisorId: string, investorGroupId: string, data: object) => axios.post(`/api/advisor/${advisorId}/investorgroup/${investorGroupId}/investor`, data)
};