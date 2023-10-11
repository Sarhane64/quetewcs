import PropTypes from 'prop-types'

const Navbar = ({next, precedent}) => {
    return (
        <div>
            <button onClick={next} >Next</button>
            <button onClick={precedent}>Precedent</button>
        </div>
    );
};

Navbar.propTypes = {
    next : PropTypes.func,
    precedent : PropTypes.func
}

export default Navbar;