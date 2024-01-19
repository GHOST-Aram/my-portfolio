const AboutText = ({ text }: AboutTextProps) => {
    return (
        <p className="about-text">
            { text }
        </p>
    )
}

interface AboutTextProps{
    text: string
}
export default AboutText