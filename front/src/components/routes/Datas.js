import axios from 'axios';
import { useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'react-bootstrap/Spinner';

function Datas() 
{

    const [data, setData] = useState([])

    useEffect(() => {
          axios.get('http://localhost/api/moduleData.php')
          .then(res => {
            console.log(res)
            setData(res.data)
          })
          .catch(error => {
            console.log(error)
          })
    }, []);
    
    return(
        <>
            <h1>Datas</h1>
            <ListGroup>
            {
              data.length > 0 ?
              data.map((module, i) => {
                return (
                    <div key={i}>
                        <ListGroup.Item>Id : { module.id } / Date : { module.name } / Value : { module.uv }</ListGroup.Item>
                    </div>
                )
              })
              :
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
            </ListGroup>
        </>
    )
}

export default Datas;