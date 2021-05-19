import { AxiosInstance } from "axios";

export function config(instance: AxiosInstance) {
  instance.interceptors.response.use(function(response) {
    return response.data
  }, function(err) {
    console.log(err)
  })
}