import HeroText from '../components/HeroText'
import Image from '../components/Image'

const Hero = () => {
    return (
        <section id='#home'>
            <div className="container hero">
                <Image alt='my image' 
                src={'https://media.licdn.com/dms/image/C4D03AQEBQa4CKdRz3A/'+
                    'profile-displayphoto-shrink_800_800/0/1578053611935?'+
                    'e=1710979200&v=beta&t=sLCHENnOk7Ln17WUEuQjYKJbXg5nw0KpZLv1dHThU-I'}
                />
                <div>
                <h1 className="developers-name"> {'Felix Owino Ojala'}</h1>
                <HeroText text={"I am a solution oriented fullstack web developer. I have 1 year of experience "+
                "in working with web development technologies such as React and Express. " +
                "My top development language is JavaScript with Typescript on both frontend and "+
                " backend."}
                />
                </div>
            </div>
        </section>
        
    )
}

export default Hero