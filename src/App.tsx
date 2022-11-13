import { RouterProvider } from 'react-router-dom'
import router, { Loading } from './router'

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loading />}
    ></RouterProvider>
  )
}

export default App
