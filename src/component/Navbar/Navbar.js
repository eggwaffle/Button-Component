import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">
        <h2><b>Dev</b>challenges.io</h2>
      </div>
      <nav className='Nav'>
        <ul className='List'>
          <li className='List-item'>Colors</li>
          <li className='List-item'>Typography</li>
          <li className='List-item'>Spaces</li>
          <li className='List-item Selected'>Buttons</li>
          <li className='List-item'>Inputs</li>
          <li className='List-item'>Grid</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;