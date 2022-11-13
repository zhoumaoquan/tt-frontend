declare namespace API {
  interface Response<T = unknown> {
    data?: T
    code: number
    message: string
  }

}
