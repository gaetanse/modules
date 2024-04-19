import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function AddModule() 
{

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [dataTypeName, setdataTypeName] = useState("")
    const [dataType, setdataType] = useState("")
    const [text, setText] = useState("")

    function checkIfAllAreGood()
    {
      if(name != "" && description != "" && dataTypeName != "" && dataType != "")
      {
        return false;
      }
      else{
        return true;
      }
    }

    function addModule(e)
    {
      e.preventDefault();
      console.log(`http://localhost/api/moduleAdd.php?name=${name}&description=${description}&dataTypeName=${dataTypeName}&dataType=${dataType}`)
      axios.post(`http://localhost/api/moduleAdd.php?name=${name}&description=${description}&dataTypeName=${dataTypeName}&dataType=${dataType}`)
      .then(res => {
        setText(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }

    return(
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={(e)=>{ setName(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" onChange={(e)=>{ setDescription(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Data type name</Form.Label>
            <Form.Control type="text" placeholder="Data type name" onChange={(e)=>{ setdataTypeName(e.target.value)}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Data type</Form.Label>
            <Form.Control type="text" placeholder="Data type" onChange={(e)=>{ setdataType(e.target.value)}}/>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={checkIfAllAreGood()} onClick={(e)=>addModule(e)}>
            Add Module
          </Button>
          <Form.Group className="mb-3" controlId="formBasicText">
          {
            checkIfAllAreGood() == true &&
            <>
              <br/>
              <Alert variant={"danger"}>
                You need to complete all input !
              </Alert>
            </>
          }
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
          {
            text.length > 0  &&
            <>
              <br/>
              <Alert variant={"success"}>
                {text}
              </Alert>
            </>
          }
          </Form.Group>
        </Form>
      </>
    )
}

export default AddModule;