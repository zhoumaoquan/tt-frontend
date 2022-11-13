import { useEffect } from 'react'
import { redirect_uri, client_id } from './config'

const Login = () => {
  useEffect(() => {
    const gote = `https://passport.feishu.cn/suite/passport/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&state=STATE`

    const QRLoginObj = window.QRLogin({
      id: 'login_container',
      goto: gote,
      width: '500',
      height: '500',
      style: 'width:500px;height:600px' //可选的，二维码html标签的style属性
    })

    const handleMessage = function (event: any) {
      const origin = event.origin
      // 使用 matchOrigin 方法来判断 message 来自页面的url是否合法
      if (QRLoginObj.matchOrigin(origin)) {
        const loginTmpCode = event.data
        // 在授权页面地址上拼接上参数 tmp_code，并跳转
        window.location.href = `${redirect_uri}/${loginTmpCode}`
      }
    }
    if (typeof window.addEventListener != 'undefined') {
      window.addEventListener('message', handleMessage, false)
    } else if (typeof window.attachEvent != 'undefined') {
      window.attachEvent('onmessage', handleMessage)
    }
  }, [])

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div id="login_container"></div>
    </div>
  )
}

export default Login
