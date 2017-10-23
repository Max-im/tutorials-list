import React from 'react';
import './NotFound.css';

function NotFound(props){
  return (
    <div className="NotFound">
      <div className="container flex">
        <div className="content">
          <h1 className="notFound__header">The page is not found</h1>
          <p className="notFound__parag">404 error</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
