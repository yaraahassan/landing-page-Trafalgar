import ApiClient from "@/services/ApiClient";
interface signUpPayload{
    email:string,
    password:string,
    name:string
}

interface signUpResponse{
    success: boolean,
    message: string,
    data: {
        otp: string
    }
}
export default function signUpApi(payload:signUpPayload):Promise<signUpResponse> {
  return ApiClient.post<signUpResponse>(`/auth/register`,payload)
}
