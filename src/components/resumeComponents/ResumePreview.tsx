import EducationPreview from "./previewComponents/EducationPreview"
import PersonalDetailsPreview from "./previewComponents/PersonalDetailsPreview"
import ProfessionalExperiencePreview from "./previewComponents/ProfessionalExperiencePreview"
import SkillsPreview from "./previewComponents/SkillsPreview"
const ResumePreview = () => {
  return (
    <div className="bg-white p-3 overflow-y-scroll" style={{scrollbarWidth:'none'}}  >
      <PersonalDetailsPreview/>
      <ProfessionalExperiencePreview/>
      <EducationPreview/>
      <SkillsPreview/>
    </div>
  )
}

export default ResumePreview