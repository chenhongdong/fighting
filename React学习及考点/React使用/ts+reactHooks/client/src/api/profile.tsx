import { ILoginPayload, IRegisterPayload } from "@/typings/profile";
import request from "./index";

export function validate() {
    return request.get('/user/validate')
}

export function register<T>(values: IRegisterPayload) {
    return request.post<T, T>('/user/register', values)
}

export function login<T>(values: ILoginPayload) {
    return request.post<T, T>('/user/login', values)
}