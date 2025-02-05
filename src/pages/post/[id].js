import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetchMethod = (...args) =>  fetch(...args).then(( res ) => res.json()   ).catch((error)=>  console.log(error) );  

const FetchDataById = ()=> {
const router = useRouter();

const {id} = router.query;

// Simple by fetch method

 
 
// By swr for cache management 


const {data , error} = useSWR("https://jsonplaceholder.typicode.com/posts/" + id , fetchMethod)

if(!data) return <h2>Loading...</h2>
if(error) return <h2>Error happened...</h2>

    return (
        <>

        <h1>{data.title}</h1>

<h3>{data.body}</h3>


        </>
    )
}

export default FetchDataById;