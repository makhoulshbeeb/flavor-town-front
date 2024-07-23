import './styles/Header.css';
import Button from './Button';

export default function Header() {
    return (
        <div className='header-container flex'>
            <nav className='flex'>
                <div className='logo'>
                    Flavor<span>Town</span>
                </div>


                <a href='!#'>Home</a>
                <a href='!#'>About</a>
                <a href='!#'>Favorites</a>

            </nav>
            <div className="flex auth">
                <Button bgColor='--primary-color' text='Log In' borderRadius='2rem'></Button>
                <Button bgColor='--background-light' text='Sign Up' borderRadius='2rem' textColor='--primary-color'></Button>
            </div>

        </div>
    );
}