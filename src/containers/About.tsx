import React from 'react'
import SectionTitle from '../components/SectionTitle'
import AboutText from '../components/AboutText'
import Image from '../components/Image'

const About = () => {
  return (
    <section>
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
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
                'Assumenda dignissimos accusamus dolor, perferendis consequatur eos '+
                'libero nam doloremque beatae qui vero, molestiae et rem provident a'+
                'b blanditiis quis aut repellat? Eius asperiores, eos nam amet ipsam '+
                'error natus facilis blanditiis.'+
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
                'Assumenda dignissimos accusamus dolor, perferendis consequatur eos '+
                'libero nam doloremque beatae qui vero, molestiae et rem provident a'+
                'b blanditiis quis aut repellat? Eius asperiores, eos nam amet ipsam '+
                'error natus facilis blanditiis.'
            }/>
        </div>
    </section>
  )
}

export default About