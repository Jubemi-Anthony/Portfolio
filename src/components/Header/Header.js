import "./Header.css";
import { Link } from "react-router-dom"
import { useState } from "react";

export default function Header(){
    const [active, setActive] = useState('home');
    return(
        <nav>
            <Link to = '/'><p className={active==='home' ? 'active' : ''} onClick={() => setActive('home')}>Home</p></Link>
            <Link to = '/Blog'><p className={active==='blog' ? 'active' : ''} onClick={() => setActive('blog')}>Blog$</p></Link>
            <Link to = '/Projects'><p className={active==='project' ? 'active' : ''} onClick={() => setActive('project')}>Project$</p></Link>
            <Link to = '/Quotes'><p className={active==='quote' ? 'active' : ''} onClick={() => setActive('quote')}>Quote$</p></Link>
            <Link to = '/Questions'><p className={active==='question' ? 'active' : ''} onClick={() => setActive('question')}>Question$</p></Link>
        </nav>
    )
}