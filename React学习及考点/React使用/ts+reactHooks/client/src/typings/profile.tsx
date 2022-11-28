

export interface IRegisterPayload {
    username: string
    password: string
    confirmPassword: string
    email: string
}

export interface ILoginPayload {
    username: string
    password: string
}