import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
    return(
       <Fragment>
        <header className={classes.header}>
           <h1>VALANMEALS❧</h1>
           <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
           <img src={mealsImage} alt="Yumyyyyy Yummmm!!!"/>
        </div>
       </Fragment>
    );
};

export default Header;