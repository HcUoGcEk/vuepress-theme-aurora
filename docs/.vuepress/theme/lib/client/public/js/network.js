//import axios from "axios"
const axios = require('axios')

module.exports = {
    req: function (option) {
        return new Promise((resolve, reject) => {
            let timeout = option.timeout
            let method = option.method
            let baseURL = option.baseURL

            if (timeout === undefined) {
                timeout = 5000
            }

            if (method === undefined) {
                method = "get"
            }

            if (baseURL === undefined) {
                baseURL = 'https://international.v1.hitokoto.cn/?c=k&max_length=45'
            }

            const instance = axios.create({
                baseURL,
                timeout,
                method,

            })

            //拦截器
            instance.interceptors.request.use(config => {
                return config
            },err => {
                return err
            })

            //响应拦截器
            instance.interceptors.response.use(response => {
                return response
            },err => {

                return err
            })

            instance(option)
            .then(res => {
                //res为响应结果 执行这里，跳转回到调用该方法处
                resolve(res.data)
            }).catch(err => {
                //err为异常结果
                reject(err)
            })
        })
    }
}
