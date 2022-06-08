import React from 'react'
import { Link } from 'react-router-dom'
export default function ShowList({show}) {
    const {title, description, listedIn, duration, id} = show
  return (
    <article className='show'>
        <h3> 
            <Link to={`/shows/${id}`}>{ title }</Link>
        </h3>
        <p className='description'>{ description }</p>
        <aside>
            <p><span>Listed Categories:</span> { listedIn}</p>
            <p><span>Duration:</span> { duration }</p>
        </aside>
    </article>
  )
}
