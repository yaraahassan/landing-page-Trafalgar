 import ApiClient from "@/services/ApiClient";
interface getUserResponse{
email:string
password:string ,
name:string ,
id: number
}
export default function getUserApi():Promise<getUserResponse[]> {
  return ApiClient.get<getUserResponse[]>(`/users`);
   
}
