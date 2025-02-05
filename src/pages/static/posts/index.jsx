const Userspage = (props)=> {

console.log(props);


    return (
        <>
        {
            props.data.map((post)=> {
                return (
       
                    <h5>{post.title}</h5>
                )
            })
        }
        </>
    )
}


export const getStaticProps = async()=> {
const data = await fetch("https://jsonplaceholder.typicode.com/posts")
const result = await data.json()
return {
    props: {
        data: result
    }
}
}

export default Userspage

