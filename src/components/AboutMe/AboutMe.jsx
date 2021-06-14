import React from 'react'
import * as Styled from "./AboutMe.styles"
import IconList from "../IconList/IconList"
import SectionTitle from '../SectionTitle/SectionTitle'
import Intro from '../Intro/Intro'
import IconColumn from '../IconColumn/IconColumn'
import ImageColumn from '../ImageColumn/ImageColumn'

const AboutMe = ({ posts }) => {

  const articles = (
    posts.nodes.map((post, i) => {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date(post.published).toLocaleDateString(undefined, options)

      return <ImageColumn 
        columnClasses='col-sm-12 col-md-6 col-lg-4'
        title={post.title}
        imageSrc={post.featured_image}
        imageAlt={post.featured_image_alt}
        timestamp={post.published} 
        slug={post.slug}
        summary={post.summary}
        date={date} 
        key={post.published} />
    })
  )

  return (
    <Styled.Container>
      <div className="row">
        <div className="col-sm-12">
          <SectionTitle
            text="A Little About Me"
            icon="fal fa-user-astronaut"
          />
          <Intro />
        </div>
      </div>


      <SectionTitle text="Services" icon="fas fa-concierge-bell"/>
      <div className="row">
        <IconColumn
          columnClasses="col-sm-6 col-md-3"
          icon="fal fa-code"
          title="Web Development"
          classes='rainbow-box-shadow-rounded dark'
          text="This is my primary area of expertise. I have <b>10+ years of experience</b> in the field."
        />
        <IconColumn
          columnClasses="col-sm-6 col-md-3"
          icon="fal fa-graduation-cap"
          title="Code Tutoring"
          classes='rainbow-box-shadow-rounded dark'
          text="I focus on <b>teaching with compassion</b>. I love tutoring and I can work with all ages. <a href='mailto:her@cristin.io' class=
          rainbow-box-shadow'>Contact me about tutoring</a>."
        />
        <div className="col-sm-12 col-md-6">
          <div className="testo">
            <span className="icon-wrapper"><i className="fal fa-quote-left"></i></span>
            <blockquote>
              <p><strong>Cristin O'Connor is a lifesaver!</strong> Being new to Gatsby, I was having a difficult time finding a solution for a blocker. I scoured documentation, tried every combination of keywords, and went to every forum I could think of to find the solution. I came across Cristin's website and reached out. Cristin was responsive, fast, and knowledgeable. She was also kind and concise which was exactly what a newbie like me needed.</p>
              <cite>– <b>Mariah W.</b>, Freelance Developer</cite>
            </blockquote>
          </div>
        </div>
      </div> 


      <SectionTitle text="Latest from the Blog" icon="fas fa-rss" />
      <div className="row">{articles}</div>

          <SectionTitle
            text="Connect"
            icon="fal fa-handshake"
          />
          <IconList 
            classes='' 
            listItems={[
            {
              icon: 'fab fa-codepen',
              link: 'https://codepen.io/cnocon',
              text: 'CodePen',
              classes: 'rainbow-box-shadow-rounded dark'
            },
            {
              icon: 'fab fa-github',
              link: 'https://github.com/cnocon',
              text: 'GitHub',
              classes: 'rainbow-box-shadow-rounded'
            },
            {
              icon: 'fal fa-hashtag',
              link: 'https://twitter.com/cnocon',
              text: 'Twitter',
              classes: 'rainbow-box-shadow-rounded'
            },
            {
              icon: 'fab fa-linkedin-in',
              link: 'https://www.linkedin.com/in/cristinoconnor',
              text: 'LinkedIn',
              classes: 'rainbow-box-shadow-rounded'
            },
            {
              icon: 'fab fa-stack-overflow',
              link: 'https://stackoverflow.com/users/2187039/cnocon',
              text: 'Stack Overflow',
              classes: 'rainbow-box-shadow-rounded'
            },
            {
              icon: 'fal fa-envelope',
              link: 'mailto:her@cristin.io',
              text: 'Email',
              classes: 'rainbow-box-shadow-rounded'
            }
          ]} 
        />
    </Styled.Container>
  )
}

export default AboutMe


