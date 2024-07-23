import './styles/Header.css';
import Button from './Button';
import Input from '../components/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
                <FontAwesomeIcon icon={faSearch} size='lg'></FontAwesomeIcon>
                <Input name='search' id='search' placeholder='Search'></Input>
                <Button bgColor='--primary-color' text='Log In' borderRadius='2rem'></Button>
                <Button bgColor='--background-light' text='Sign Up' borderRadius='2rem' textColor='--primary-color'></Button>
            </div>

        </div>
    );
}