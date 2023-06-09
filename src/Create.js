import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bobby');
    const [isPending, setIsPending] = useState(false);
    const redirect = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method:'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("new blog added");
            setIsPending(false)
            redirect('/');
        })
    }

  return (
    <div className='create'>
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>

            <label>Blog title:</label>
            <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label>Blog Body:</label>
            <textarea
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="Bobby">Bobby</option>
                <option value="Errol">Errol</option>
                <option value="Jason">Jason</option>
                <option value="Nanditha">Nanditha</option>
            </select>
            { !isPending && <button>Add Blog</button>}
            { isPending && <button disabled >Adding blog.....</button>}
        </form>
    </div>
  )
}
