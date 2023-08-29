import React, {useState, useEffect} from 'react';
import './Navbar.css';

function Navbar(props) {

    const [toggleMenu, setToggleMenu] = useState(false);

    const [largeur, setLargeur] = useState(window.innerWidth);

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        };
    }, []);


    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <nav>
            {(toggleMenu || largeur > 500) &&
                <ul className="liste">
                    <li className="items">Accueil</li>
                    <li className="items">Service</li>
                    <li className="items">Contact</li>
                </ul>
            }
            <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    );
}

export default Navbar;