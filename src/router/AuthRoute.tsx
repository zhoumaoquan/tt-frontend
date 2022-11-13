import { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoute(props: PropsWithChildren<{}>) {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to="/login" />
  }

  return <>{props.children ?? null}</>
}

export default AuthRoute
