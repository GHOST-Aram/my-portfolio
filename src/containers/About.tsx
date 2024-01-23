import React from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutText from '../components/AboutText'
import Image from '../components/Image'

const About = () => {
  return (
    <section id='#about'>
        <SectionTitle text='About Me'/>
        <div className="container about">
            <div className="text-center">
                <Image alt='my image' 
                    src={'https://media.licdn.com/dms/image/C4D03AQEBQa4CKdRz3A/'+
                        'profile-displayphoto-shrink_800_800/0/1578053611935?'+
                        'e=1710979200&v=beta&t=sLCHENnOk7Ln17WUEuQjYKJbXg5nw0KpZLv1dHThU-I'
                    }
                />
                <h2 className="developers-name"> {'Felix Owino Ojala'}</h2>
            </div>
            <AboutText text={
                'I have a background in computer science. I also took a fullstack web development ' +
                'course with JavaScript from The Odin Project. I develop both backend and frontend web '+
                'based applications. I prefer to work with people in teams as it allows me to only '+
                'focus on what I can do best. Team work also allows me to let others do what they'+
                ' can do best. I like to write articles about technical solutions with the faith that it can '+
                'make someone\'s life easier while learning. ' +
                'My goal is to be as useful to other people as possible using my technical skills.'
            }/>
        </div>
    </section>
  )
}

export default About