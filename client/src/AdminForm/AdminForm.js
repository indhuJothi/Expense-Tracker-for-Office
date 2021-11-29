import React from "react";
import {Button} from 'react-bootstrap'
import './AdminForm.css'
function Form(){
    return(
<>
<div className="button">
  <Button variant="primary" className="innerButton">Add Employee</Button>{' '}
  <Button variant="secondary"  className="innerButton">Add Category</Button>{' '}
  <Button variant="success" className="innerButton">Add Department</Button>{' '}
  {/* <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button> */}
  </div>
</>
    )
}

export default Form;