import axios from 'axios';
import { useEffect, useState } from "react";
import Base from '../modules/Base';
import Spinner from 'react-bootstrap/Spinner';
import CardGroup from 'react-bootstrap/esm/CardGroup';

function Dashboard() 
{

    const [modules, setModules] = useState([])

    useEffect(() => {
          axios.get('http://localhost/api/module.php')
          .then(res => {
            console.log(res)
            setModules(res.data)
          })
          .catch(error => {
            console.log(error)
          })
    }, []);

    return(
        <>
            <h1>Dashboard</h1>
            <CardGroup>
            {
              modules.length > 0 ?
              modules.map((module, i) => {
                return (
                    <Base key={i} moduleData={module}></Base>
                )
              })
              :
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            }
            </CardGroup>
        </>
    )
}

export default Dashboard;