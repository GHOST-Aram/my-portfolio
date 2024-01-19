import { screen, render } from "@testing-library/react";
import ProjectPreview from "./ProjectPreview";

describe('Project preview', () => {

    test('Renders project screenshot', () => {
        render(<ProjectPreview 
            imageSrc = '' 
            altText='project-one' 
            description=''
            title=''/>
        )

        const projectScreenshot = screen.getByRole('img')
        const altText = screen.getByAltText(/project-one/)

        expect(projectScreenshot).toBeInTheDocument()
        expect(altText).toBeInTheDocument()
    })

    test('Renders Project title', () => {
        render(<ProjectPreview 
            imageSrc = '' 
            altText='project-one' 
            description=''
            title='Project one'/>
        )
        
        const title = screen.getByRole('heading', {name: /Project one/i})
        expect(title).toBeInTheDocument()
    })

    test('Renders Project description', () => {
        render(<ProjectPreview 
            imageSrc=""
            altText=""
            description="This is it"
            title=""
        />)

        const description = screen.getByText(/This is it/)
        expect(description).toBeInTheDocument()
    })
})