import './Container.css';
import PropTypes from 'prop-types';

const Container = ({ children, maxWidth = '1120px', margin = 'auto'}) => {
    return (
        <div className='container' style={{maxWidth, margin}}>
            {children}
        </div>
    );
};

Container.propTypes = { 
    children: PropTypes.node.isRequired,
    maxWidth: PropTypes.string,
    margin: PropTypes.string,
};

export default Container;