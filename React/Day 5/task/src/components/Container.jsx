
import Userlist from './Userlist'

const Container = () => {

    const users={
        name:"Aswitha",
        age:23,
        id:2,
        marks:50
    }
  return (
<>

<h1>User Details</h1>
<Userlist  Userdata={users}/>

</>
  )
}

export default Container
