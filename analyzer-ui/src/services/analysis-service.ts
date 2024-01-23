import axios from 'axios';

export default function analysisWebService() {
  const analysisService = axios.create({
    baseURL: process.env.ANALYSIS_SERVICE_URL || 'http://localhost:3000',
  });

  return analysisService;
}
