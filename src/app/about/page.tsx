import GetUserList from '@/modules/users/components/GetUserList'
import CreateUserForm from '@/modules/users/components/createUserForm'

export default function page() {
  return (
    <div>    
      <GetUserList/>
      <CreateUserForm/>
</div>
  )
}
