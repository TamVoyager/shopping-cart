import axios from "axios"

const baseDomain = "https://fovehealthcare-dev.appspot.com"
const baseURL = `${baseDomain}/api/v1`

const instance = axios.create({ baseURL })

instance.interceptors.request.use((request) => {
  // Do something before request is sent
  const headers = {
    ...request.headers.common,
    ...request.headers[request.method],
    ...request.headers
  };
  console.log(123);
  ['common','get', 'post', 'head', 'put', 'patch', 'delete'].forEach(header => {
    delete headers[header]
  })

  const printable = `${new Date()} | Request: ${request.method.toUpperCase()} | ${request.url}`
  console.log(printable)
  return request
}, (error) => {
  // Do something with request error
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log(`${new Date()} | Response: ${response.status}`)
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error.response);
})


export default instance

