import React, { useEffect, useMemo, useState } from 'react';
import Counter from './components/Counter';
import './styles/App.css'
import axios from 'axios'
import PostItem from './components/PostItem';
import PostFilter from './components/PostFilter';
import PostLists from './components/PostLists';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/mySelect';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
import Loader from './components/UI/loader/loader';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService.js';

function App() {

  const [posts, setPosts] = useState([])
  const [isPostLoading, setIsPostLoading] = useState(false)
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  async function fetchPosts() {
    setIsPostLoading(true)
    setTimeout(async () => {
      const posts = await PostService.getAll()
      setPosts(posts)
      setIsPostLoading(false)
    }, 1000)
  }
  useEffect(() => { fetchPosts() }, [])




  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)





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
      {isPostLoading
        ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div>
        : <PostLists remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }



    </div>
  );
}
//1:46
export default App;
