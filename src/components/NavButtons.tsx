import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

function NavButtons() {
    return(
        <div id="link-container">
            <CustomLink to='/'>
                <svg fill="white" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg"><path d="m6 20v-5.5c0-.8284271.67157288-1.5 1.5-1.5h3c.8284271 0 1.5.6715729 1.5 1.5v5.5h6.5c.8284271 0 1.5-.6715729 1.5-1.5v-8h1v8c0 1.3807119-1.1192881 2.5-2.5 2.5h-13c-1.38071187 0-2.5-1.1192881-2.5-2.5v-8h1v8c0 .8284271.67157288 1.5 1.5 1.5zm1 0h4v-5.5c0-.2761424-.2238576-.5-.5-.5h-3c-.27614237 0-.5.2238576-.5.5zm8-5.5v2c0 .2761424.2238576.5.5.5h1c.2761424 0 .5-.2238576.5-.5v-2c0-.2761424-.2238576-.5-.5-.5h-1c-.2761424 0-.5.2238576-.5.5zm-1 0c0-.8284271.6715729-1.5 1.5-1.5h1c.8284271 0 1.5.6715729 1.5 1.5v2c0 .8284271-.6715729 1.5-1.5 1.5h-1c-.8284271 0-1.5-.6715729-1.5-1.5zm-8-3.5h-2.5c-.82842712 0-1.5-.6715729-1.5-1.5v-.8074176c0-.19082914.0364128-.3799056.10728496-.55708601l1.92847669-4.82119173c.07593168-.18982919.25978606-.31430466.46423835-.31430466h15c.2044523 0 .3883067.12447547.4642383.31430466l1.9284767 4.82119173c.0708722.17718041.107285.36625687.107285.55708601v.8074176c0 .8284271-.6715729 1.5-1.5 1.5h-2.5c-.3841772 0-.7346218-.1444268-1-.3819467-.2653782.2375199-.6158228.3819467-1 .3819467h-3c-.3841772 0-.7346218-.1444268-1-.3819467-.2653782.2375199-.6158228.3819467-1 .3819467h-3c-.38417722 0-.73462175-.1444268-1-.3819467-.26537825.2375199-.61582278.3819467-1 .3819467zm-1.16148352-7-1.80275483 4.50688707c-.02362405.05906013-.03576165.12208562-.03576165.18569533v.8074176c0 .27614237.22385763.5.5.5h2.5c.27614237 0 .5-.22385763.5-.5v-1c0-.27614237.22385763-.5.5-.5s.5.22385763.5.5v1c0 .27614237.22385763.5.5.5h3c.2761424 0 .5-.22385763.5-.5v-1c0-.27614237.2238576-.5.5-.5s.5.22385763.5.5v1c0 .27614237.2238576.5.5.5h3c.2761424 0 .5-.22385763.5-.5v-1c0-.27614237.2238576-.5.5-.5s.5.22385763.5.5v1c0 .27614237.2238576.5.5.5h2.5c.2761424 0 .5-.22385763.5-.5v-.8074176c0-.06360971-.0121376-.1266352-.0357617-.18569533l-1.8027548-4.50688707z"/></svg>
                <p className="navButton">Dashboard</p>
            </CustomLink>
            <CustomLink to='/sales'>
                <svg fill="white" viewBox="0 0 496 512" xmlns="http://www.w3.org/2000/svg"><path d="m248 8c-136.97 0-248 111.03-248 248s111.03 248 248 248 248-111.03 248-248-111.03-248-248-248zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1 -18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01c10.64 5.32 23.16-2.41 23.16-14.31v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63l-4.69 4.68-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1 -5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0 -1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0 -15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0 -8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1 -13.72 32.98zm86.71-91.35c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49c13.52 26.92 21.32 57.2 21.32 89.33 0 8.67-.74 17.16-1.82 25.54z"/></svg>
                <p className="navButton">Sales</p>
            </CustomLink>
            <CustomLink to='/settings'>
                <svg fill="white" enableBackground="new 0 0 120 120" viewBox="0 0 120 120"  xmlns="http://www.w3.org/2000/svg"><path d="m114.251 70.731c2.211 0 4.271-1.793 4.572-3.985 0 0 .422-3.081.422-6.745s-.422-6.745-.422-6.745c-.304-2.193-2.361-3.986-4.572-3.986h-11.433c-2.214 0-4.512-1.411-5.106-3.135s-1.414-7.255.151-8.819l8.08-8.081c1.564-1.565 1.686-4.236.269-5.937l-9.507-9.51c-1.701-1.418-4.371-1.298-5.938.268l-8.08 8.081c-1.564 1.566-4.173 2.196-5.793 1.402s-6.163-4.143-6.163-6.356v-11.433c0-2.213-1.794-4.271-3.985-4.572 0 0-3.081-.424-6.745-.424s-6.745.424-6.745.424c-2.193.301-3.988 2.359-3.988 4.572v11.433c0 2.213-1.41 4.511-3.135 5.106s-7.255 1.414-8.82-.151l-8.081-8.081c-1.565-1.565-4.236-1.686-5.936-.269l-9.509 9.509c-1.418 1.701-1.298 4.371.268 5.937l8.08 8.081c1.565 1.565 2.197 4.172 1.402 5.792s-4.143 6.163-6.356 6.163h-11.431c-2.213 0-4.271 1.794-4.573 3.986 0 0-.424 3.081-.424 6.744 0 3.665.424 6.744.424 6.744.301 2.194 2.359 3.987 4.573 3.987h11.433c2.213 0 4.511 1.409 5.105 3.135.595 1.725 1.414 7.254-.152 8.818l-8.08 8.081c-1.565 1.565-1.686 4.236-.268 5.938l9.508 9.509c1.701 1.417 4.37 1.299 5.936-.269l8.081-8.08c1.565-1.564 4.172-2.195 5.793-1.401s6.162 4.143 6.162 6.355v11.433c0 2.212 1.794 4.27 3.988 4.57 0 0 3.08.424 6.745.424s6.745-.424 6.745-.424c2.193-.301 3.985-2.358 3.985-4.57v-11.433c0-2.213 1.411-4.512 3.136-5.106 1.726-.595 7.256-1.413 8.82.151l8.08 8.081c1.565 1.563 4.236 1.686 5.938.268l9.507-9.506c1.417-1.701 1.299-4.37-.269-5.938l-8.08-8.08c-1.565-1.564-2.197-4.172-1.401-5.793.794-1.62 4.143-6.163 6.355-6.163zm-54.251 10.956c-11.977 0-21.686-9.707-21.686-21.687 0-11.976 9.709-21.686 21.686-21.686s21.687 9.709 21.687 21.686-9.71 21.687-21.687 21.687z" /></svg>
                <p className="navButton">Settings</p>
            </CustomLink>
        </div>
    );
};

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path:resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active link-support" : "link-support"} >
            <Link to={to}>
                 {children}
            </Link>
        </li>
    )
}

export default NavButtons;

{/*
<Link to='/alerts' className="link-support">
    <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m2.20164 18.4695 7.96266-14.46444c.7378-1.34008 2.9336-1.34008 3.6714 0l7.9627 14.46444c.6459 1.1733-.3386 2.5305-1.8357 2.5305h-15.9254c-1.49708 0-2.48159-1.3572-1.83566-2.5305z"/><path d="m12 9v4"/><path d="m12 17.0195v-.0195"/></g></svg>
    <a>Alerts</a>
</Link>
*/}
    {/*
<Link to='/products' className="link-support">
    <svg fill="white"  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="#fff" fillOpacity=".01"/><path d="m4 14-.89443-1.7889c-.67757.3388-1.10557 1.0314-1.10557 1.7889zm20-10 .8944-1.78885c-.563-.28153-1.2258-.28153-1.7888 0zm20 10h2c0-.7575-.428-1.4501-1.1056-1.7889zm0 20 .8944 1.7889c.6776-.3388 1.1056-1.0314 1.1056-1.7889zm-20 10-.8944 1.7889c.563.2815 1.2258.2815 1.7888 0zm-20-10h-2c0 .7575.428 1.4501 1.10557 1.7889zm.89443-18.2111 19.99997-10.00005-1.7888-3.5777-20.00003 9.99995zm37.10557-1.7889v20h4v-20zm1.1056 18.2111-20 10 1.7888 3.5778 20-10zm-18.2112 10-19.99997-10-1.78886 3.5778 20.00003 10zm-18.8944-8.2111v-20h-4v20zm38.8944-21.7889-20-9.99995-1.7888 3.5777 20 10.00005z" fill="white"/><path d="m4 14 20 10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/><path clipRule="evenodd" d="m24 24v20z" fill="white" fillRule="evenodd"/><path d="m24 44v-20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/><path d="m44 14-20 10" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"/><path d="m34.8944 10.7889c.988-.494 1.3884-1.69537.8945-2.68333-.494-.98795-1.6954-1.3884-2.6833-.89442zm-21.7888 6.4222c-.988.494-1.3884 1.6954-.8945 2.6833.494.988 1.6954 1.3884 2.6833.8945zm20-9.99995-20 9.99995 1.7888 3.5778 20-10z" fill="white"/></svg>
    <a>Products</a>
</Link>
*/}
{/*
<Link to='/sales' className="link-support">
    <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
    <a>Sales</a>
</Link>
*/}
    {/*
<Link to='/logout' className="link-support">
    <svg fill="white"  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="m6 30h12a2.0023 2.0023 0 0 0 2-2v-3h-2v3h-12v-24h12v3h2v-3a2.0023 2.0023 0 0 0 -2-2h-12a2.0023 2.0023 0 0 0 -2 2v24a2.0023 2.0023 0 0 0 2 2z"/><path d="m20.586 20.586 3.586-3.586h-14.172v-2h14.172l-3.586-3.586 1.414-1.414 6 6-6 6z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>
    <a>Logout</a>
</Link>
*/}