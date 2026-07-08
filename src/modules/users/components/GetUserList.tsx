"use client";
import useGetUser from "../hooks/useGetUser"

export default function GetUserList() {
    const {data,isLoading}=useGetUser();
    if(isLoading) return "loading";
    if(!data) return "no user";

  return (
    // console.log(data);
    <div>
      {
        data.map((user)=>(
          <div key={user.id}>
          <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
          <h1>{user.password}</h1>
          <h1>{user.email}</h1>
</div>
        ))
      }

    </div>
    
  )
}
