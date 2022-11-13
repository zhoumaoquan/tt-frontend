import { request } from './request'

export const apiOauthToken = async (code: string) => {
  return await request
    .post('api/qcode_auth', {
      json: {
        code
      }
    })
    .json<API.Response>()
}
