import { screen, render } from "@testing-library/react";
import ProjectPreview from "./ProjectPreview";

describe('Project preview', () => {

    test('Renders project screenshot', () => {
        render(<ProjectPreview 
            liveUrl=""
            sourceUrl=""
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
            liveUrl=""
            sourceUrl=""
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
            liveUrl=""
            sourceUrl=""
            imageSrc=""
            altText=""
            description="This is it"
            title=""
        />)

        const description = screen.getByText(/This is it/)
        expect(description).toBeInTheDocument()
    })

    test('Renders the \'View Live\' button', () =>{
        render(<ProjectPreview 
            liveUrl=""
            sourceUrl=""
            imageSrc=""
            altText=""
            description="This is it"
            title=""
        />)

    const viewLiveBtn = screen.getByRole("button", { name: /View live/i})

    expect(viewLiveBtn).toBeInTheDocument()
    })

    test('Renders the \'View Code\' button', () =>{
        render(<ProjectPreview 
            liveUrl=""
            sourceUrl=""
            imageSrc=""
            altText=""
            description="This is it"
            title=""
        />)

        const viewCode = screen.getByRole("button", { name: /View code/i})

        expect(viewCode).toBeInTheDocument()
    })

    test('Renders the links to live project and source code', () =>{
        render(<ProjectPreview 
            liveUrl=""
            sourceUrl=""
            imageSrc=""
            altText=""
            description="This is it"
            title=""
        />)

        const links = screen.getAllByRole('link')
        expect(links.length).toEqual(2)
    })
})