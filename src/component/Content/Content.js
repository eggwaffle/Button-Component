import Item from '../Item/Item';
import logo from '../../logo.svg';
import './Content.css';

function Content() {
  return (
    <div className="Content">
      <h1>Buttons</h1>
      <div className='row'>
        <Item />
      </div>
      <div className='row'>
        <Item variant="outline" />
      </div>
      <div className='row'>
        <Item variant="text" />
      </div>
      <div className='row'>
        <Item disableShadow />
      </div>
      <div className='row'>
        <Item disabled />
        <Item variant="text" disabled/>
      </div>
      <div className='row'>
        <Item startIcon="local_grocery_store"/>
        <Item endIcon="local_grocery_store"/>
      </div>
      <div className='row'>
        <Item size="sm"/>
        <Item size="md"/>
        <Item size="lg"/>
      </div>
      <div className='row'>
        <Item color="default" />
        <Item color="primary" />
        <Item color="secondary" />
        <Item color="danger" />
      </div>
      <p className='Icon-Source'>
        Icons: <a
          href="https://material.io/resources/icons/"
          target="_blank"
          rel="noopener noreferrer"
          >
            https://material.io/resources/icons/
          </a>
        </p>
      <footer>created by <b>
          <a
            href="https://github.com/eggwaffle"
            target="_blank"
            rel="noopener noreferrer"
          >
            eggwaffle
          </a>
        </b> - devChallenges.io
      </footer>
    </div>
  );
}

export default Content;