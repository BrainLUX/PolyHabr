export namespace Authorization {
  export interface SignUp {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  }

  export interface SignIn {
    username: string,
    password: string
  }
}
