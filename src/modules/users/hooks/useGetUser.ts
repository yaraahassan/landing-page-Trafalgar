"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";
import getUserApi from "../api/getUserApi";

// get=>useApiQuery
export default function useGetUser() {
  return useApiQuery({
    queryKey:["users"],
     queryFn:()=>getUserApi(),
      options:{
        retry:1,
      },

  })
}