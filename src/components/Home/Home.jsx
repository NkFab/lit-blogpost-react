import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <ul>
      <li>
        <Link to="/auth">Auth</Link>
      </li>
    </ul>
  </div>
);

export default Home;
