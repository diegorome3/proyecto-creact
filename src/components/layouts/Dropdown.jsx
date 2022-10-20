import React from 'react';

const Dropdown = () => {
    return (
        <>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Juegos</a>
            <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Fifa 23</a>
            <a className="dropdown-item" href="#">Dead island 2</a>
            <a className="dropdown-item" href="#">Returnal</a>
            <a className="dropdown-item" href="#">God of war ragnarok</a>
            </div>
            </li>
        </>
    );
}

export default Dropdown;
