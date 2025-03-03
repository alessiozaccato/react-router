import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/posts')
            .then((res) => setPosts(res.data));

        // fetch('http://localhost:3000/posts', { method: 'GET' })
        //   .then((res) => res.json())
        //   .then((data) => setPosts(data));
    }, []);

    return (
        <div className="container ">
            <div className="row">

                {
                    posts.map((post) => {

                        const { id, title, content, image, tags } = post

                        return (
                            <div key={id} className='col-3'>

                                <NavLink to={`/posts/${id}`}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{title}</h4>
                                            <p className="card-text">{content}</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts