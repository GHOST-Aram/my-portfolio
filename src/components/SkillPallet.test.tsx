import { render, screen } from "@testing-library/react";
import SkillPallet from "./SkillPallet";

describe('Skill Pallet', () => {
    test ('Displays skill name', () =>{
        render(<SkillPallet skill='Writing'/>)
    
        const skillName = screen.getByText(/Writing/i)
        expect(skillName).toBeInTheDocument()
    })
})