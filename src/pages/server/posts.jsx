const Allposts = (props)=> {




    return (
        <>
        <h1>This is the all posts page</h1>
        {
            props.posts.map((post, index) => {
                return (
<>
<div  key={index} > <li> {post.title}  </li> </div>

</>
                )
            })
        }
        </>
    )
}


export const getServerSideProps = async  ()=> {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts" , {cache: "no-store"}) 
    const result = await data.json()
    console.log(result);
    
return {
    props: {
        posts: result
    }
}

}


export default Allposts
