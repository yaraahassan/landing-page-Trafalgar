"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import signInApi from "../api/signInApi";
import { useQueryClient } from "@tanstack/react-query";
import { TokenService } from "@/services/tokenService";

export default function useSignInApi() {
    const queryClient=useQueryClient()
  return useApiMutation({
    mutationFn:signInApi, 
    options:{
        onSuccess:(data) =>{
            queryClient.invalidateQueries({queryKey:["users"]});
            TokenService.setToken(data.accessToken);        },
    }
  })
}
