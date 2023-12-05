const AxiosConfig = {
    baseURL: process.env.REACT_APP_API_URL ,
    timeout: 10000,
    headers: {'X-User-Token': ''}
  };
  
  export default AxiosConfig;