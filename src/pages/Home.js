import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/grade/1/addition">Grade 1 Addition</Link>
        </li>
        <li>
          <Link to="/grade/1/subtraction">Grade 1 Subtraction</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
