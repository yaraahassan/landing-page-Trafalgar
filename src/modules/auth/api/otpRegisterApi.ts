import ApiClient from "@/services/ApiClient";
interface otpRegisterPayload{
    email:string;
    otp:string;
}
interface otpRegisterResponse{
    success: boolean,
    message: string,
    data: {
        accessToken: string,
        refreshToken: string,
        user: {
            id:string ,
            email:string ,
            name:string ,
            role: string
        }
    }
}
export default function otpRegisterApi(payload:otpRegisterPayload):Promise<otpRegisterResponse> {
  return ApiClient.post<otpRegisterResponse>(`/auth/register/verify`,payload)
}
