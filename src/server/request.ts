import ky from 'ky'
import { Toast } from '@douyinfe/semi-ui'
import { host } from './config'

console.log(host)

export const request = ky.extend({
  prefixUrl: host,
  timeout: 60 * 1000,
  retry: 1,
  hooks: {
    beforeRequest: [
      (req) => {
        const token = localStorage.getItem('token')
        if (token) {
          req.headers.set('Authorization', token)
        }
      }
    ],
    afterResponse: [
      async (req, option, res) => {
        res
          .clone()
          .json()
          .then((data) => {
            if (data?.code !== 200) {
              Toast.error(data?.message ?? '请求出错啦')
            }
          })
          .catch((err) => {
            const error = new Error(err)
            Toast.error(error.message)
          })

        return res
      }
    ]
  }
})
