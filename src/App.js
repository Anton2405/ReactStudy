import React, { useEffect, useMemo, useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css'
import axios from 'axios'
import PostItem from './components/PostItem';
import PostFilter from './components/PostFilter';
import PostLists from './components/PostLists';
import PostForm from './components/PostForm';
import MyModal from './components/UI/MyModal/MyModal';
import Loader from './components/UI/loader/loader';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostService.js';
import {getPageCount, getPagesArray} from './utils/pages.js';
import Pagination from './components/UI/pagination/Pagination.jsx';

function App() {
  const [totalCount,setTotalCount] = useState(0)
  const [limit,setLimit] = useState(10)
  const [page,setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0)
  const [posts, setPosts] = useState([])
  
  


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
    
  }
  
  const [fetchPosts,isPostLoading,postError] = useFetching(async (limit,page)=>{
    const response  = await PostService.getAll(limit,page)
    setPosts(response.data)
    const totalCount=response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount,limit))
    
  })

  useEffect(() => { fetchPosts(limit,page) }, [])




  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const changePage = (page)=>{
      setPage(page)
      fetchPosts(limit,page)
  }



  return (
    <div className="App">

      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postError && 
        <h1> Произошла ошибка ${postError}</h1>}
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
        : <PostLists remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }
      <Pagination 
        totalPages={totalPages} 
        page={page}
        changePage={changePage}
      />



    </div>
  );
}
//1:46
export default App;
