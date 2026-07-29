"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import ForgetApi from "../api/ForgetApi";
import { useQueryClient } from "@tanstack/react-query";
import { TokenService } from "@/services/tokenService";

export default function useForget() {
    const queryClient=useQueryClient()
  return useApiMutation({
    mutationFn:ForgetApi,
     options:{
        onSuccess:(data)=>{
           queryClient.invalidateQueries({queryKey:["users"]});
            TokenService.setToken(data.accessToken); 
        }
     }
  })
}
