import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {

    const { id } = useParams()

    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        image: '',
        tags: []
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))

        // fetch( `${url}/${id}`, { method: 'GET' } )
        //     .then( res => res.json() )
        //     .then( data => setPost( data ) )


    }, [id])

    return (
        <>
            {/* <h1 className="text-center">singolo post : {id}</h1> */}
            <h1 className="text-center">{post.title}</h1>
            <p className="text-center"> {post.content}</p>

        </>
    )
}

export default SinglePost