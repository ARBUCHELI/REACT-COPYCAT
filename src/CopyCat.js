import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://raw.githubusercontent.com/ARBUCHELI/REACT-COPYCAT/master/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA1.png',
  quietcat: 'https://raw.githubusercontent.com/ARBUCHELI/REACT-COPYCAT/master/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA2.png'
};

export class CopyCat extends React.Component {  
  render() {
    const { copying, value, toggleTape, handleChange, name } = this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style= {{marginBottom: 80}}>
        BUCHELI COPYCAT {name || 'APP'}</h1>
        <input 
            type='text'
            value={value}
            onChange={handleChange}
            style={{fontSize: '1em', border: 'solid white 10px', borderRadius: '5px'}}
            />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>
        {copying && value}
        </p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}

