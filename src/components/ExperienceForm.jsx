import React, { useState } from 'react';
import Input from './Input';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const ExperienceForm = ({ experience, setExperience, experienceData, setExperienceData, initialExperience }) => {
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState({});
  const dateMax = new Date();
  dateMax.setFullYear(dateMax.getFullYear() + 10);
  let dateMaxFormatted = dateMax.toISOString().slice(0, 10);

  const dateMin = new Date();
  dateMin.setFullYear(dateMin.getFullYear() - 100);
  let dateMinFormatted = dateMin.toISOString().slice(0, 10);

  const handleToggleForm = () => {
    setShowForm(!showForm);
    setErrors({});
  };

  const validateForm = () => {
    const errors = {};

    if (!experience.company.trim()) {
      errors.company = 'Company Name is required';
    }
    if (!experience.position.trim()) {
      errors.position = 'Position is required';
    }
    if (!experience.start.trim()) {
      errors.start = 'Start Date is required';
    }
    if (!experience.end.trim()) {
      errors.end = 'End Date is required';
    } else if (new Date(experience.start) > new Date(experience.end)) {
      errors.end = 'End Date must be after Start Date';
    }
    if (!experience.location.trim()) {
      errors.location = 'Location is required';
    }
    if (!experience.description.trim()) {
      errors.description = 'Description is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newExperience = { ...experience, id: uuidv4() };
      setExperienceData([...experienceData, newExperience]);

      setShowForm(false);
      setExperience(initialExperience);
    }
  };

  const handleCancel = (e) => {
    setShowForm(false);
    setExperience(initialExperience);
    setErrors({});
  };

  return (
    <>
      <button className='toggle-button' onClick={handleToggleForm}>
        {!showForm ? <><span>Experience</span><AiOutlineCaretDown/></> : <><span>Experience</span><AiOutlineCaretUp/></>}
      </button>
      {showForm && (
        <form action="" className='experienceForm'>
          <Input id={'company'} type={'text'} text={'Company Name'} value={experience.company} onChange={(e) => setExperience({ ...experience, company: e.target.value })} error={errors.company} />
          <Input id={'position'} type={'text'} text={'Position'} value={experience.position} onChange={(e) => setExperience({ ...experience, position: e.target.value })} error={errors.position} />
          <Input id={'startDateEx'} type={'date'} text={'Start Date'} value={experience.start} onChange={(e) => setExperience({ ...experience, start: e.target.value })} error={errors.start} max={dateMaxFormatted} min={dateMinFormatted} onKeyDown={(e) => e.preventDefault()} />
          <Input id={'endDateEx'} type={'date'} text={'End Date'} value={experience.end} onChange={(e) => setExperience({ ...experience, end: e.target.value })} error={errors.end} max={dateMaxFormatted} min={dateMinFormatted} onKeyDown={(e) => e.preventDefault()}/>
          <Input id={'location'} type={'text'} text={'Location'} value={experience.location} onChange={(e) => setExperience({ ...experience, location: e.target.value })} error={errors.location} />
          <Input id={'description'} type={'text'} text={'Description'} value={experience.description} onChange={(e) => setExperience({ ...experience, description: e.target.value })} error={errors.description} />
          <div className='button-container'>
            <button type="button" className='cancel-button' onClick={handleCancel}>Cancel</button>
            <button type="submit" className='save-button' onClick={handleSave}>Save</button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExperienceForm;
