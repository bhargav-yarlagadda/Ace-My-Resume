import EducationForm from "./formComponents/EducationForm"
import ExperienceForm from "./formComponents/ExperienceForm"
import PersonalDetailForm from "./formComponents/PersonalDetailForm"
import SkillForm from "./formComponents/SkillForm"
const ResumeForm = () => {
  return (
    <div  className="h-screen">
      <PersonalDetailForm/>
      <ExperienceForm/>
      <EducationForm/>
      <SkillForm/>
    </div>
  )
}

export default ResumeForm