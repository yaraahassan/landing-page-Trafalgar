"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import signUpApi from "../api/signUpApi";
import { useQueryClient } from "@tanstack/react-query";
import { TokenService } from "@/services/tokenService";

export default function useSignUP() {
    const queryClient=useQueryClient();
  return useApiMutation({
    mutationFn:signUpApi,
     options:{
       onSuccess:(data)=>{
          queryClient.invalidateQueries({queryKey:["users"]});
        //   TokenService.setToken(data.accessToken);
       }
     }
  })
}
