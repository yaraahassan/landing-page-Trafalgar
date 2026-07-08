import ApiClient from "@/services/ApiClient";
interface createUserPayload{
    name:string,
    email:string,
    password:string,
}
interface createUserResponse{
     accessToken: string,
    user: {
        email: string,
        name: string,
        id: number
    }
}
export default function createUser(payload:createUserPayload):Promise<createUserResponse> {
  return ApiClient.post<createUserResponse>(`users`,payload)
}
