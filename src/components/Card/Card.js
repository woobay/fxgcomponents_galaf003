import Button from 'react-bootstrap/Button';
import {Card as CardComp} from 'react-bootstrap';
import PropTypes from 'prop-types';



export const Card = ({width}) => {

  return (
    <>
      <CardComp style={{ width: `${width}`}}>
       <CardComp.Img variant="top" src="holder.js/100px180" />
        <CardComp.Body>
          <CardComp.Title>CardComp Title</CardComp.Title>
          <CardComp.Text>
            Some quick example text to build on the CardComp title and make up the
            bulk of the CardComp's content.
          </CardComp.Text>
          <Button variant="primary">Go somewhere</Button>
        </CardComp.Body>
      </CardComp>
    </>
  );
}

Card.PropTypes = {
  width: PropTypes.string
}