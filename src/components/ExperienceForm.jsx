import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
const ExperienceForm = ({ experience, setExperience, experienceData, setExperienceData, initialExperience }) => {

  const [showForm, setShowForm] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const newExperience = { ...experience, id: uuidv4() }
    setExperienceData([...experienceData, newExperience]);

    setShowForm(!showForm);
    setExperience(initialExperience);
  }

  const handleCancel = (e) => {
    setShowForm(!showForm);
    setExperience(initialExperience);
  }

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button onClick={handleToggleForm}>{!showForm ? 'Mostrar Formulario' : 'Ocultar Formulario'}</button>
      {
        showForm && (
          <form action="" className='experienceForm'>
            <Input id={'company'} type={'text'} text={'Company Name'} value={experience.company} onChange={(e) => setExperience({ ...experience, company: e.target.value })} />
            <Input id={'position'} type={'text'} text={'Position'} value={experience.position} onChange={(e) => setExperience({ ...experience, position: e.target.value })} />
            <Input id={'startDateEx'} type={'date'} text={'Start Date'} value={experience.start} onChange={(e) => setExperience({ ...experience, start: e.target.value })} />
            <Input id={'endDateEx'} type={'date'} text={'End Date'} value={experience.end} onChange={(e) => setExperience({ ...experience, end: e.target.value })} />
            <Input id={'location'} type={'text'} text={'Location'} value={experience.location} onChange={(e) => setExperience({ ...experience, location: e.target.value })} />
            <Input id={'description'} type={'text'} text={'Description'} value={experience.description} onChange={(e) => setExperience({ ...experience, company: e.target.value })} />
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit" onClick={handleSave}>Save</button>
          </form>
        )
      }
    </>
  )
}

export default ExperienceForm