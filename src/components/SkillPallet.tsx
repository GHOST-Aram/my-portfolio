const SkillPallet = ({ skill }: SkillPalletProps) => {
  return (
    <span className='skill-pallet'>{ skill }</span>
  )
}

interface SkillPalletProps{
    skill: string
}

export default SkillPallet