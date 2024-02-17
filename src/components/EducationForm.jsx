import React from 'react'
import Input from './Input';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const EducationForm = ({ education, setEducation, educationData, setEducationData, initialEducation }) => {

  const [showForm, setShowForm] = useState(false);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const newEducation = { ...education, id: uuidv4() }
    setEducationData([...educationData, newEducation]);

    setShowForm(!showForm);
    setEducation(initialEducation);
  }

  const handleCancel = (e) => {
    setEducation(initialEducation);
  }
  return (
    <>
      <button onClick={handleToggleForm}>{showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}</button>
      {showForm && (
      <form className='educationForm'>
        <Input id={'school'} type={'text'} text={'School/College'} value={education.school} onChange={(e) => setEducation({ ...education, school: e.target.value })} />
        <Input id={'degree'} type={'text'} text={'Degree'} value={education.degree} onChange={(e) => setEducation({ ...education, degree: e.target.value })} />
        <Input id={'startDate'} type={'date'} text={'Start Date'} value={education.start} onChange={(e) => setEducation({ ...education, start: e.target.value })} />
        <Input id={'endDate'} type={'date'} text={'End Date'} value={education.end} onChange={(e) => setEducation({ ...education, end: e.target.value })} />
        <button type="button" onClick={handleCancel}>Cancel</button>
        <button type="submit" onClick={handleSave}>Save</button>
      </form>
      )}
    </>
  )
}

export default EducationForm;
