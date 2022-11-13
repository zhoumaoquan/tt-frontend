import { useOuthToken } from '@/server/query/user'
import { useParams } from 'react-router-dom'

const FsLogin = () => {
  const { code } = useParams<{ code: string }>()

  const { isLoading, data } = useOuthToken(String(code))
  console.log(data)

  if (isLoading) {
    return <div>正在进行飞书登录中...</div>
  }

  return <div>飞书登录成功</div>
}

export default FsLogin
