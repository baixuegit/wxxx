/*
 * @Author: liu.wei
 * @Date: 2018-06-05 14:42:20
 * @Last Modified by: liu.wei
 * @Last Modified time: 2018-06-06 20:53:15
 */

import axios from 'axios'
import Loading from 'element-ui/lib/loading'

let loadingInstance

/**
 * config axios
 *
 */
(function () {
  /* api前缀 */
  // axios.defaults.baseURL = process.env.apiBaseUrl
  axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5c26daa7b5e2c553ff532343/baixue-api'

  /* 请求超时 */
  axios.defaults.timeout = 20 * 1000

  /* 请求头类型 */
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'

  /* 请求拦截 */
  axios.interceptors.request.use(config => {
    config = Object.assign({loading: 'document.body'}, config)
    console.log(config.loading)
    // loading 加载
    if (config.loading) {
      loadingInstance = Loading.service({
        target: config.loading,
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0)'
      })
    }
    // 添加全局参数
    if (config.method === 'post') {
      // config.data.userId = 'test-user-id'
    }
    return config
  })

  /* 响应拦截 */
  axios.interceptors.response.use(response => {
    if (loadingInstance) { loadingInstance.close() }
    return response.data.data
  }, error => {
    if (loadingInstance) { loadingInstance.close() }
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.log('401')
          break
        case 500:
          console.log('500')
          break
        case 404:
          console.log('404')
          break
        case 504:
          console.log('504')
          break
      }
      return Promise.reject(error.response.data)
    }
  })
})()

/**
 * get封装
 * @param {String} url
 * @param {Object} params
 * @param {Object} config
 */
const get = (url, params, config = {}) => {
  let conf = Object.assign({
    url,
    method: 'get',
    params: params
  }, config)
  return axios(conf).then(respnose => {
    return none(respnose)
  })
}

/**
 * post封装
 * @param {String} url
 * @param {Object} data
 * @param {Object} config
 */
const post = (url, data, config) => {
  let conf = Object.assign({
    url,
    method: 'post',
    data: data
  }, config)
  return axios(conf).then(respnose => {
    return none(respnose)
  })
}

/**
 *
 * @param {Object} config
 */
const ajax = (config) => {
  return axios(config).then(respnose => {
    return none(respnose)
  })
}

/**
 * 错误code处理
 * @param {Object} respnose
 */
const none = (response) => {
  // 在此处理后台反馈的错误码
  if (response.code === 1) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(response.msg)
  }
}

export default {
  get,
  post,
  ajax
}
