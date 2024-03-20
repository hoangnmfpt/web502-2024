import React from 'react'
import { Link } from 'react-router-dom'
import s from './NotFound.module.css'
type Props = {}

const NotFound = (props: Props) => {
  return (
    <div>
      <h1>404</h1>
      <h2>Not Found</h2>
      <Link to='/' className={s.navLink}>
        Go to back Home
      </Link>
    </div>
  )
}

export default NotFound
