import ApiClient from "@/services/ApiClient";
interface forgetPayload{
    email:string;
}
interface forgetResponse{
    success:boolean;
    message:string;
    data:{
        otp:string;
    }
}
export default function forgetApi(payload:forgetPayload):Promise<forgetResponse> {
  return ApiClient.post<forgetResponse>(`/auth/forgot-password`,payload)
}
