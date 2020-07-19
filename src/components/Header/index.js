import React from 'react';
import './styles.scss';
import Logo from './../../assets/smalllogo.jpg';
const Header = props => {

return (
    <header className ='header'>
        <div className='title' style={{color:'rgb(211, 186, 45)'}}>G7 Films</div>
        <div className='wrap'>
            <div className='logo'>
            <img src={Logo} style={{height:'6rem'}}alt='G7 Logo'/>
            </div>
          
        </div>
       
            <ul className='social'>
                <li><a href='https://www.youtube.com/channel/UCb34DyGj7Zr7g8s4IvUY2iw' className="fab fa-facebook"></a></li>
                <li><a href='https://twitter.com/explore'className ="fab fa-twitter"></a></li>
                <li><a hred='https://www.instagram.com/'className="fab fa-instagram"></a></li>
                <li><a href='https://www.youtube.com/channel/UCb34DyGj7Zr7g8s4IvUY2iw'className="fab fa-youtube"></a></li>

            </ul>
       
    </header>
)
};

export default Header;