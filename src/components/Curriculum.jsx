import React from 'react';
import { IoMailSharp, IoCallSharp, IoLocationSharp } from 'react-icons/io5';

function Curriculum({ userData, educationData, experienceData }) {
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <section className='curriculum'>
            <div className='curriculum-container'>
                <div className='personal-info-display'>
                    {(userData.firstName || userData.lastName) && <h2>{userData.firstName} {userData.lastName}</h2>}
                    {userData.career && <h3>{userData.career}</h3>}
                    <div className='contact-display'>
                        {userData.email && <span><IoMailSharp className='icon' />{userData.email}</span>}
                        {userData.phone && <span><IoCallSharp className='icon' />{userData.phone}</span>}
                        {userData.address && <span><IoLocationSharp className='icon' />{userData.address}</span>}
                    </div>
                </div>
                <div className='education-display'>
                    {(educationData.length !== 0) && <h3 className='curriculum-title'>Education</h3>}
                    <ul>
                        {educationData.map((edu) => (
                            <li key={edu.id} className="education-entry">
                                <div className="education-details">
                                    <h3>{edu.degree}</h3>
                                    <p className="institution">{edu.school}</p>
                                    <p className="location">{edu.location}</p>
                                    <p className="dates">
                                        {formatDate(edu.start)} - {formatDate(edu.end)}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='experience-display'>
                    {(experienceData.length !== 0) && <h3 className='curriculum-title'>Experience</h3>}
                    <ul className="experience-list">
                        {experienceData.map((exp, index) => (
                            <li key={exp.id} className={index === experienceData.length - 1 ? 'experience-entry last-entry' : 'experience-entry'}>
                                <div className="experience-details">
                                    <h3>{exp.position}</h3>
                                    <p className="company">{exp.company}</p>
                                    <p className="location">{exp.location}</p>
                                    <p className="dates">
                                        {formatDate(exp.start)} - {formatDate(exp.end)}
                                    </p>
                                    <p className="description">{exp.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Curriculum;