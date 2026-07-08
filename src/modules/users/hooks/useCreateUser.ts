"use client";
import { useApiMutation } from "@/shared/hooks/useApiMutation";
import createUser from "../api/createUser";
import { useQueryClient } from "@tanstack/react-query";
import { TokenService } from "@/services/tokenService";

export default function useCreateUser() {
    const queryClient=useQueryClient();
  return useApiMutation({
     mutationFn:createUser,
      options:{
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:["users"]});
            TokenService.setToken(data.accessToken);
        }
      },
  })
}
