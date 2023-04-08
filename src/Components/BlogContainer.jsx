import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    const [AllBlogs, setAllBlogs] = useState([]);
    const [tag, setTag] = useState('')

    const fetchBlogs = async () => {
        try {
            const res = await axios.get("https://dummyjson.com/posts");
            setAllBlogs(res.data.posts)
            setBlogs(res.data.posts)
        } catch (error) {
            alert(error)
        }
    }

    const filterByTag = () => {
        if (tag === '' || tag.toLowerCase() === 'all') {
            setBlogs(AllBlogs)
            setTag('')
            return;
        } else {
            const filteredBlogs = blogs.filter((blog) => blog.tags.includes(tag))
            setTag('')
            setBlogs(filteredBlogs)
        }

    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='blogContainer'>
            <div className="filters">
                <input type="text" name="tag" value={tag} id="" placeholder='Search by Tag' onChange={(e) => setTag(e.target.value)} />
                <button onClick={filterByTag}>search</button>
            </div>
            <div className="blogs">
                {
                    blogs ?
                        blogs.map((blog) => (
                            <Blog blog={blog} key={blog.id} />
                        ))

                        :
                        <span>no more posts</span>
                }
            </div>
        </div>
    )
}

export default BlogContainer