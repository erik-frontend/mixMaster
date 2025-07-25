import React from 'react'
import Wrapper from '../wrappers/About'
import aboutImg from "../assets/about-us.svg"

const About = () => {
  return (
    <Wrapper className='about'>
      <h1>About Us</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae quo facilis fugiat atque dolorem. Eius quas provident ab itaque repudiandae doloremque laudantium ut eligendi quisquam quod quidem beatae enim, maxime ipsum, nobis deserunt! Omnis, quo iure explicabo eveniet quaerat asperiores sapiente excepturi blanditiis saepe sed voluptate autem ad cupiditate voluptatem doloremque eius commodi laborum architecto. Excepturi suscipit autem error? Sit quaerat temporibus eum laborum sunt adipisci, consectetur blanditiis assumenda aut nisi ab esse velit eius rerum consequatur. Temporibus qui cumque repellat a velit sit natus nam architecto sunt possimus maiores quam perspiciatis vitae voluptates sint, veritatis est. Facilis, ipsum eum?</p>
      <figure>
        <img src={aboutImg} alt="about" />
      </figure>
    </Wrapper>
  )
}

export default About