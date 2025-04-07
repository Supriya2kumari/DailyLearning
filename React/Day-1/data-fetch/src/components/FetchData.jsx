import React, {useState, useEffect} from 'react'
import axios from "axios"
import "../styles/fetchData.css"

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchData = async ()=>{
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        } catch(error){
            setError(error.message);
        } finally{
            setLoading(false);
        }
        
    }
    useEffect(() => {fetchData()}, []);

    if(loading){
        return  <h2 className='loading'>Loading....</h2>
    }
    if(error){
        return <p className="error">{error}</p>
    }

  return (
    <>
        <ul>
            {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </>
  )
}

export default FetchData;