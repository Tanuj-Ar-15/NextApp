const PostById = (props) => {
    console.log(props);
  
    return (
      <>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
      </>
    );
  };
  
  export const getStaticPaths = async () => {
    return {
      paths: [{ params: { id: "1" } }, { params: { id: "2" } }], // Define pre-rendered pages
      fallback: false, // false means "404 for missing pages"
    };
  };
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
  
    const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
    const result = await data.json();
  
    return {
      props: result, // Pass post data as props
    };
  };
  
  export default PostById;
  