import { useState } from 'react';
import { initialUserData, initialEducation, initialExperience } from './components/data-structure/initialStates';
import Input from './components/Input';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './styles/app.css'
import Curriculum from './components/Curriculum';
function App() {

  let [userData, setUserData] = useState(initialUserData);

  let [educationData, setEducationData] = useState([]);
  let [education, setEducation] = useState(initialEducation);

  let [experienceData, setExperienceData] = useState([]);
  let [experience, setExperience] = useState(initialExperience);




  return (
    <div className="App">
      <section className='forms'>
        <div className='personal-info'>
          <h2>Personal information</h2>
          <Input id={'first-name'} type={'text'} text={'First name'} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
          <Input id={'last-name'} type={'text'} text={'Last name'} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
          <Input id={'email'} type={'email'} text={'Email'} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
          <Input id={'phone'} type={'tel'} text={'Phone number'} pattern={'0-9+-]+'} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
          <Input id={'career'} type={'text'} text={'Career'} onChange={(e) => setUserData({ ...userData, career: e.target.value })} />
          <Input id={'address'} type={'text'} text={'Address'} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
        </div>
        <div className='education'>
          <EducationForm education={education} setEducation={setEducation} educationData={educationData} setEducationData={setEducationData} initialEducation={initialEducation} />
        </div>
        <div className='experience'>
          <ExperienceForm experience={experience} setExperience={setExperience} experienceData={experienceData} setExperienceData={setExperienceData} initialExperience={initialExperience}></ExperienceForm>
        </div>
      </section>
      <Curriculum userData={userData} educationData={educationData} experienceData={experienceData}/>
    </div>

  );
}

export default App;
