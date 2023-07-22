import axios from "@/axios/base"

export default {
  install: (app, options) => {

    app.config.globalProperties.$get = (path) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.get(process.env.VUE_APP_BACKEND_URL + path).then(r => {

        return r
      })
    }

    app.config.globalProperties.$post = (path, data) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.post(process.env.VUE_APP_BACKEND_URL + path, data).then(r => {

        return r
      })
    }

    app.config.globalProperties.$put = (path, data) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.put(process.env.VUE_APP_BACKEND_URL + path, data).then(r => {

        return r
      })
    }

    app.config.globalProperties.$delete = (path, data) => {
      // retrieve a nested property in `options`
      // using `key` as the path
      return axios.delete(process.env.VUE_APP_BACKEND_URL + path, data).then(r => {

        return r
      })
    }

    app.provide('axiosOp', options)
  }
}