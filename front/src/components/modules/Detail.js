import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useParams } from "react-router-dom"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Detail(props) 
{

  const params = useParams()
  const { id, name, working, new_update, description, dataTypeName, dataType } = params;

  const [data, setData] = useState([])

  useEffect(() => {
    console.log(`http://localhost/api/moduleData.php?id=${id}`)
    axios.get(`http://localhost/api/moduleData.php?id=${id}`)
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(error => {
      console.log(error)
    })
}, [id]);


    return(
      <>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Id : { id }</Card.Title>
              <Card.Text>Name : { name }</Card.Text>
              <Card.Text>Description : { description }</Card.Text>
              <Card.Text>Time of update : { new_update }</Card.Text>
              <Card.Text>data type name : { dataTypeName }</Card.Text>
              <Card.Text>data type : { dataType }</Card.Text>
              <Card.Text>datas number : {  data.length > 0 ? data.length : 0 } </Card.Text>
              <Card.Text>
              Is working : {
                  working == true ? 
                  <Image src="/circleGreen.png" rounded width={32}/>
                  : <Image src="/circleRed.png" rounded width={32}/>
                }
              </Card.Text>
              <Link to={"/"}><Button variant="primary">Go to dashboard</Button></Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '72rem' }}>
            <Card.Body>
              {
                data.length > 0 ?
                <LineChart width={600} height={500} data={data}>
                  <XAxis dataKey="name"/>
                  <YAxis/>
                  <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
                :
                <Image src="/noData.png" rounded width={32}/>
              }
            </Card.Body>
          </Card>
        </CardGroup>
      </>
    )
}

export default Detail;