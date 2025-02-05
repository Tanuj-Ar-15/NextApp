import { signIn, useSession  , signOut} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
const session = useSession()
console.log(session);
const [buttons , setButton] = useState(false) 

if(session.data == null){

  return <button onClick={signIn} >Login With GitHub</button>

}



  return (
    <>
{/* <Image 
// src={UserImage} // import image from the public folder
src={'/download.jpeg'} //as public folder is static folder we can access directly by url.

height={100}
width={200}

/> */}
{/* // Auth with Git Hub */}
<h3>Hello Logged In </h3>


 <button  onClick={signOut} >Logout</button>
    
    </>
  )
}
