import { useQuery } from '@tanstack/react-query'

import { apiOauthToken } from '../apis'

export const useOuthToken = (code: string) => {
  return useQuery(['outhToken', code], async () => {

    return await apiOauthToken(code)
  })
}
