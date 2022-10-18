import React from 'react';

const Dropdown = () => {
   return (
      <>
      <li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categorias</a>
         <div className="dropdown-menu">
            <a className="dropdown-item" href="#">MMORPG</a>
            <a className="dropdown-item" href="#">Shooter</a>
            <a className="dropdown-item" href="#">Deporte</a>
            <a className="dropdown-item" href="#">Estrategia</a>
            <a className="dropdown-item" href="#">Pelea</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Todos los juegos</a>
         </div>
      </li>
      </>
   );
}

export default Dropdown;
