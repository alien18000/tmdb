import React from 'react'
import { Image,  } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PersonCard({id, name , profile_path}) {
  return (
    <div className='mediaCard'>
        <div className='cast'>
          <Link to={`/person/${id}`}>
          <Image src={`http://image.tmdb.org/t/p/w500/${profile_path}`}
                className='img-fluid
                title={name}'
                alt={name}
                loading='lazy'/>
          </Link>
          <Link to={`/person/${id}`}>
            <p className='text-white small fw-bold mt-2 px-1'>{name}</p>
          </Link>

        </div>
    </div>
  )
}
