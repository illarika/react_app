import React, {useEffect, useMemo, useState} from 'react';
import MyModal from './MyModal/MyModal';
import http from '../http'
import Crud from '../services/crud.service';


const Posts = () => {
    const postsCrud = new Crud('posts');
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null)
    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [usersPosts, setUsersPosts] = useState([]);
        useEffect(() =>{
            fetchAllPosts()
        }, [] );


    const fetchAllPosts = async () => {
        postsCrud.get('?_page=1&_limit=15').then((res) =>{
            console.log(res.data)
            setUsersPosts(res.data)
        })
    }

        const confirmDeletePost=(post)  =>{
            setCurrentPost(post);
            setShowModal(true);
        }

    const deletePost = () => {

        postsCrud.delete(currentPost.id).then((res)=>{
            setUsersPosts(usersPosts.filter((post) => post.id !== currentPost.id))
            setShowModal(false);
        }).catch((e) => console.log('err'))
    }
   

    const onSearch = (e) => {
        setSearchQuery(e.target.value)
    }

    const onSort = (e) => {
        setSorter(+e.target.value)
    }

    const sortedPosts = useMemo(() => {
        if (sorter) {
            return [...usersPosts].sort((a, b) => b.id - a.id)
        }
        return usersPosts
    }, [sorter, usersPosts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    return (
        <div className="container">
            <div className="input-group mt-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search post"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onSearch}
                />
            </div>
            <select className="form-select mt-3"
                    aria-label="Default select example"
                    onChange={onSort}
            >
                <option defaultValue value="0">from Min to Max</option>
                <option value="1">from Max to Min</option>
            </select>
            <div className="row">
                {sortedAndSearchedPosts.length ? sortedAndSearchedPosts.map((post, id) =>
                    <div className="col-sm-6 mt-3" key={post.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.id}. {post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <button onClick={() => confirmDeletePost(post)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                )
                : <h3 className='mt-3'>Posts not found</h3>
                }
            </div>
            <MyModal
            saveButtonShow 
            closeButtonShow
            visible={showModal}
            onCancel={()=> setShowModal(false)}
            onConfirm={()=> deletePost()}
            >
                <h3>Do you really?</h3>
            </MyModal>
        </div>

    );
};

export default Posts;
// deletePost(post.id)