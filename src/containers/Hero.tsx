import HeroText from '../components/HeroText'
import Image from '../components/Image'

const Hero = () => {
    return (
        <section>
            <div className="container hero">
                <Image alt='my image' 
                src={'https://media.licdn.com/dms/image/C4D03AQEBQa4CKdRz3A/'+
                    'profile-displayphoto-shrink_800_800/0/1578053611935?'+
                    'e=1710979200&v=beta&t=sLCHENnOk7Ln17WUEuQjYKJbXg5nw0KpZLv1dHThU-I'}
                />
                <HeroText text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
                    +'Sint earum consequatur perspiciatis. '+
                    'Ut voluptate delectus quod doloribus quisquam corporis. Officiis.'}
                />
            </div>
        </section>
        
    )
}

export default Hero