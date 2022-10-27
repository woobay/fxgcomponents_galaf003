import { Alert as AlertAntD } from 'antd';
import PropTypes from 'prop-types';



export const Alert = ({text, type}) => {

  
  return (
    <>
        <AlertAntD 
          message={text} type={type} style={{textAlign: 'center'}}>
        </AlertAntD>
      </>
      )
}

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};
