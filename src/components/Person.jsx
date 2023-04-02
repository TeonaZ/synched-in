import React from 'react'
import Card from 'react-bootstrap/Card'

export default function Person(props) {
   let fullName = props.person.fullName
   let company = props.person.company
   let devLevel = props.person.devLevel
   let favoriteColor = props.person.favoriteColor

  return (
    <Card className='person-card col-2'>
        <Card.Body>
            <Card.Subtitle className='mb-2 text-muted'></Card.Subtitle>
            <Card.Text style={{color:favoriteColor}}>
                {favoriteColor}
            </Card.Text>
            <Card.Text>
                {fullName}
            </Card.Text>
            <Card.Text>
                {company}
            </Card.Text>
            <Card.Text>
                {devLevel}
            </Card.Text>
            <Card.Link href='#'>Portfolio</Card.Link>
            <Card.Link gref='#'>Contact Me</Card.Link>
        </Card.Body>
    </Card>
    
  )
}
