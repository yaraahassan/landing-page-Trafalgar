import { useApiMutation } from "@/shared/hooks/useApiMutation";
import otpRegisterApi from "../api/otpRegisterApi";
import { useQueryClient } from "@tanstack/react-query";
import { TokenService } from "@/services/tokenService";

export default function useOtpRegister() {
    const queryClient=useQueryClient();
  return useApiMutation({
    mutationFn:otpRegisterApi,
     options:{
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["users"]});
            TokenService.setToken(data.accessToken);        
        }
     }
  })
}
