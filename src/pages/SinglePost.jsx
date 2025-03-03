import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SinglePost = () => {

    const { id } = useParams()

    const navigate = useNavigate()

    const [post, setPost] = useState({
        id: 0,
        title: '',
        content: '',
        image: null,
        tags: []
    })

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))

        // fetch( `${url}/${id}`, { method: 'GET' } )
        //     .then( res => res.json() )
        //     .then( data => setPost( data ) )



    }, [id])

    const { title, content, image, tags } = post

    return (
        <>
            {/* <h1 className="text-center">singolo post : {id}</h1> */}
            <div className="container text-center">
                <figure>
                    <figure>
                        <img src={image} alt={title} />
                    </figure>
                </figure>
                <h1>{title}</h1>
                <p > {content}</p>


                <button className="btn btn-danger" onClick={() => navigate(-1)}>
                    Torna alla pagina precedente
                </button>
            </div>

        </>
    )
}

export default SinglePost