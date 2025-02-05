import { useEffect, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/router";


const Posts = ()=> {
const router = useRouter()

const [posts , setPosts] = useState([])




const fetchPosts = async  () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    data =  await data.json()
    setPosts(data);
}


useEffect(()=> {
fetchPosts()
} , [] )



    return (
        <>

        <h3>This is the All Posts Data.</h3>
        {
            posts.length && posts.map((post , index)=> {
return (
    <div className="post"  key={index} >   <li onClick={(e)=> router.push({
        pathname: "/post/[id]",
        query: { id: post.id }
    })  } > {post.title} </li>   </div>
)
            })
        }
        
        </>
    )
}

export default Posts
