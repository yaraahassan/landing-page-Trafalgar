import ApiClient from "@/services/ApiClient";
interface signInPayload{
    email:string;
    password:string;
}
interface signInResponse{
    message:string
    accessToken:string
    refreshToken: string
    user: {
        id:string ,
        email: string,
        name: string,
        role: string
    }
}
export default function signInApi(payload:signInPayload):Promise<signInResponse> {
  return ApiClient.post<signInResponse>(`/auth/login`,payload)
}
