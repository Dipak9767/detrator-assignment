import React from 'react'

const Blog = ({ blog }) => {
    return (
        <div className='blogCard'>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <span>{`Reactions : ${blog.reactions}`}</span>
            <div className="tags">
                <span>Tags : </span>
                {
                    blog.tags.map((tag,idx)=>(
                        <span key={idx}>{tag}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default Blog