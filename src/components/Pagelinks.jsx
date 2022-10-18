import React from 'react';

const Pagelinks = () => {
   return (
      <>
      <li className="nav-item">
         <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
         </a>
      </li>
      <li className="nav-item">
         <a className="nav-link" href="#">Novedades</a>
      </li>
      </>
   );
}

export default Pagelinks;
