import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/loader/loader';
export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comment, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComment, isCommentLoading, errorComment] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComment(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста c ID = {params.id}</h1>
            {
                isLoading
                    ? <Loader />
                    : <div>
                        {post.id}. {post.title}
                    </div>
            }
            <h1>
                Комментарий
            </h1>
            {
                isCommentLoading
                    ? <Loader />
                    : <div>
                        {comment.map(comm =>
                            <div style={{ marginTop: 15 }}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }
        </div>
    )
}
