import { useState } from 'react';
import { initialUserData, initialEducation, initialExperience } from './components/data-structure/initialStates';
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { IoCallSharp } from "react-icons/io5";
import Input from './components/Input';
import { v4 as uuidv4 } from 'uuid';
import EducationForm from './components/EducationForm';
function App() {

  let [userData, setUserData] = useState(initialUserData);

  let [educationData, setEducationData] = useState([]);
  let [education, setEducation] = useState(initialEducation);

  let [experienceData, setExperienceData] = useState([]);
  let [experience, setExperience] = useState(initialExperience);

  const handleSave = (e) => {
    e.preventDefault();
    const newEducation = { ...education, id: uuidv4() }
    setEducationData([...educationData, newEducation]);
  }

  const handleCancel = (e) => {
    setEducation(initialEducation);
  }

  return (
    <div className="App">
      <section className='personalInfo'>

        <h2>Personal information</h2>
        <Input id={'firstName'} type={'text'} text={'First name'} onChange={(e) => setUserData({ ...userData, firstName: e.target.value })} />
        <Input id={'lastName'} type={'text'} text={'Last name'} onChange={(e) => setUserData({ ...userData, lastName: e.target.value })} />
        <Input id={'email'} type={'email'} text={'Email'} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <Input id={'phone'} type={'tel'} text={'Phone number'} pattern={'0-9+-]+'} onChange={(e) => setUserData({ ...userData, phone: e.target.value })} />
        <Input id={'career'} type={'text'} text={'Career'} onChange={(e) => setUserData({ ...userData, career: e.target.value })} />
        <Input id={'address'} type={'text'} text={'Address'} onChange={(e) => setUserData({ ...userData, address: e.target.value })} />

      </section>

      <section className='education'>
        <h2>Education</h2>
        <EducationForm education={education} setEducation={setEducation} educationData={educationData} setEducationData={setEducationData} initialEducation={initialEducation}/>
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
          {educationData.map((edu, index) => (
            <li key={index}>
              <p>School/College: {edu.school}</p>
              <p>Degree: {edu.degree}</p>
              <p>Start Date: {edu.start}</p>
              <p>End Date: {edu.end}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
