import React from 'react'
import Input from './Input';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineCaretDown, AiOutlineCaretUp  } from "react-icons/ai";
const EducationForm = ({ education, setEducation, educationData, setEducationData, initialEducation }) => {

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

  const handleSave = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const newEducation = { ...education, id: uuidv4() };
      setEducationData([...educationData, newEducation]);

      setShowForm(false);
      setEducation(initialEducation);
    }
  };

  const handleCancel = (e) => {
    setShowForm(!showForm);
    setEducation(initialEducation);
    setErrors({});
  }

  const validateForm = () => {
    const errors = {};

    if (!education.school.trim()) {
      errors.school = 'School/College is required';
    }
    if (!education.degree.trim()) {
      errors.degree = 'Degree is required';
    }
    if (!education.start.trim()) {
      errors.start = 'Start Date is required';
    }
    if (!education.end.trim()) {
      errors.end = 'End Date is required';
    } else if (new Date(education.start) > new Date(education.end)) {
      errors.end = 'End Date must be after Start Date';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <>
      <button className='toggle-button' onClick={handleToggleForm}>{!showForm ? <><span>Education</span><AiOutlineCaretDown/></> : <><span>Education</span><AiOutlineCaretUp/></>}</button>
      {showForm && (
      <form className='educationForm'>
          <Input id={'school'} type={'text'} text={'School/College'} value={education.school} onChange={(e) => setEducation({ ...education, school: e.target.value })} error={errors.school} />
          <Input id={'degree'} type={'text'} text={'Degree'} value={education.degree} onChange={(e) => setEducation({ ...education, degree: e.target.value })} error={errors.degree} />
          <Input id={'startDateEd'} type={'date'} text={'Start Date'} value={education.start} onChange={(e) => setEducation({ ...education, start: e.target.value })} error={errors.start} max={dateMaxFormatted} min={dateMinFormatted} onKeyDown={(e) => e.preventDefault()} />
          <Input id={'endDateEd'} type={'date'} text={'End Date'} value={education.end} onChange={(e) => setEducation({ ...education, end: e.target.value })} error={errors.end} max={dateMaxFormatted} min={dateMinFormatted} onKeyDown={(e) => e.preventDefault()} />
        <div className='button-container'>
          <button type="button" className='cancel-button' onClick={handleCancel}>Cancel</button>
          <button type="submit" className='save-button' onClick={handleSave}>Save</button>
        </div>

      </form>
      )}
    </>
  )
}

export default EducationForm;
