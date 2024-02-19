import { useState } from 'react';
import { initialUserData, initialEducation, initialExperience } from './components/data-structure/initialStates';
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import Input from './components/Input';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import './styles/app.css'
function App() {

  let [userData, setUserData] = useState(initialUserData);

  let [educationData, setEducationData] = useState([]);
  let [education, setEducation] = useState(initialEducation);

  let [experienceData, setExperienceData] = useState([]);
  let [experience, setExperience] = useState(initialExperience);

  const handleDelete = (id, dataArray, setDataArray) => {
    const updatedList = dataArray.filter(edu => edu.id !== id);
    setDataArray(updatedList);
  };

  return (
    <div className="App">
      <section className='forms'>
        <div className='personalInfo'>
          <h2>Personal information</h2>
          <Input id={'firstName'} type={'text'} text={'First name'} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
          <Input id={'lastName'} type={'text'} text={'Last name'} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
          <Input id={'email'} type={'email'} text={'Email'} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
          <Input id={'phone'} type={'tel'} text={'Phone number'} pattern={'0-9+-]+'} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
          <Input id={'career'} type={'text'} text={'Career'} onChange={(e) => setUserData({ ...userData, career: e.target.value })} />
          <Input id={'address'} type={'text'} text={'Address'} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />
        </div>
        <div className='education'>
          <h2>Education</h2>
          <EducationForm education={education} setEducation={setEducation} educationData={educationData} setEducationData={setEducationData} initialEducation={initialEducation} />
        </div>
        <div className='experience'>
          <h2>Experience</h2>
          <ExperienceForm experience={experience} setExperience={setExperience} experienceData={experienceData} setExperienceData={setExperienceData} initialExperience={initialExperience}></ExperienceForm>
        </div>
      </section>

      <section className='curriculum'>
        <div className='personalInfoDisplay'>
          <h2>{userData.firstName} {userData.lastName}</h2>
          <h3>{userData.career}</h3>
          <div>
            {userData.email && <div><IoMailSharp /><span>{userData.email}</span></div>}
            {userData.phone && <div><IoCallSharp /><span>{userData.phone}</span></div>}
            {userData.address && <div><IoLocationSharp /><span>{userData.address}</span></div>}
          </div>
        </div>
      </section>
      <section className='educationDataDisplay'>

        <ul>
          {educationData.map((edu) => (
            <li key={edu.id}>
              <p>School/College: {edu.school}</p>
              <p>Degree: {edu.degree}</p>
              <p>Start Date: {edu.start}</p>
              <p>End Date: {edu.end}</p>
              <button onClick={() => handleDelete(edu.id, educationData, setEducationData)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
      <section className='experienceDataDisplay'>
        <ul>
          {experienceData.map((exp) => (
            <li key={exp.id}>
              <p>School/College: {exp.company}</p>
              <p>Degree: {exp.position}</p>
              <p>Start Date: {exp.start}</p>
              <p>End Date: {exp.end}</p>
              <p>End Date: {exp.location}</p>
              <p>End Date: {exp.description}</p>
              <button onClick={() => handleDelete(exp.id, experienceData, setExperienceData)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
