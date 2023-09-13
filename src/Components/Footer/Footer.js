
import { useDispatch, useSelector } from 'react-redux';
import './Footer.css';
import { getYear, setYear } from '../Redux/SoundsSlice';
import { useEffect } from 'react';
import myLogo from '../../Assets/Sitting5.png';

const Footer = ({ playModalItems }) => {
    
    const year = useSelector(getYear);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setYear(new Date().getFullYear()))
    })

    return (
        <div className="container">
            <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <button 
                            className="btn btn-link rounded-pill px-3" 
                            type="button"
                            data-bs-toggle="modal" 
                            data-bs-target="#manualModal"
                            onClick={playModalItems}
                            >
                            FAQs
                        </button>
                    </li>
                </ul>
                <p className="text-center text-body-secondary">
                    © {year} Created with <i className="bi bi-heart-fill me-2" /> 
                    by 
                    <a 
                        className='ms-2' 
                        href="https://www.linkedin.com/in/alimzhan-islamkulov-109b8b257/" 
                        target='_blank' 
                        rel='noreferrer'
                        >
                        <img className='myLogo' src={myLogo} alt="myLogo" />
                    </a>
                </p>
            </footer>
        </div>
    )
}

export default Footer;