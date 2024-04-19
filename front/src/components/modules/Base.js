import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function Base({moduleData}) 
{
    return(
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Name : {moduleData.name}</Card.Title>
            <Link to={`/detail/${moduleData.id}/${moduleData.name}/${moduleData.working}/${moduleData.new_update}/${moduleData.description}/${moduleData.dataTypeName}/${moduleData.dataType}`}><Button variant="primary">Details</Button></Link>
              <br/>Is working : {
                moduleData.working == true ? 
                <Image src="/circleGreen.png" rounded width={32}/>
                : <Image src="/circleRed.png" rounded width={32}/>
              }
          </Card.Body>
        </Card>
      </>
    )
}

export default Base;