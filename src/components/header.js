import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <Link to="/">
        <img src="/lifefocus/tree.png" alt="Tree Icon" className="logo" />
      </Link>
      <Link to="/" className="title">Life Focus</Link>
    </div>
    <nav className="nav">
    </nav>
  </header>
);

// const Header = () => (
//   <header className="header">
//     <div className="logo-container">
//       <Link to="/">
//         <img src="/tree.png" alt="Tree Icon" className="logo" />
//       </Link>
//       <Link to="/" className="title">Overcome Midlife</Link>
//     </div>
//     <nav className="nav">
//       <Link to="/">Home</Link>
//       <Link to="/course">The Course</Link>
//       <Link to="/contact">Reach Out</Link>
//       <Link to="/try-for-free" className="try-free">Try for free</Link>
//     </nav>
//   </header>
// );

export default Header;
