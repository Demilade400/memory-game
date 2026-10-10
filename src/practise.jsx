import { useState } from "react";

 
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [school, setSchool] = useState('');
  const [address, setAddress] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [workHistory, setWorkHistory] = useState([{
     position: '',
     startDate: '',
     endDate: '',
     company: '',
     description: ''
  }])

  const handleName = (e) => {
    setName(e.target.value);
  }
  
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const handleSchool = (e) => {
    setSchool(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  }

  const handleJobTitle = (e) => {
    setJobTitle(e.target.value);
  }

  const handlePosition = (value,index) => {
    const newHistory = [...workHistory]
    newHistory[index] = { ...newHistory[index], position: value }
    setWorkHistory(newHistory);
  }

  const handleStartDate = (value,index) => {
    const newHistory = [...workHistory]
    newHistory[index] = { ...newHistory[index], startDate: value }
    setWorkHistory(newHistory)
  }

  const handleEndDate = (value,index) => {
  const newHistory = [...workHistory]
    newHistory[index] = { ...newHistory[index], endDate: value }
    setWorkHistory(newHistory)
  }

  const handleCompany = (value,index) => {
  const newHistory = [...workHistory]
    newHistory[index] = { ...newHistory[index], company: value }
    setWorkHistory(newHistory)
  }

  const handleDescription = (value,index) => {
  const newHistory = [...workHistory]
    newHistory[index] = { ...newHistory[index], description: value }
    setWorkHistory(newHistory)
  }
 
  const handleAddHistory = () => {
    const newHistory = [...workHistory, {
     position: '',
     startDate: '',
     endDate: '',
     company: '',
     description: ''
    }
    ]
    setWorkHistory(newHistory)
  }

  const handleDelete = (index) => {
    const newHistory = workHistory.filter((_, i) => i != index)
    setWorkHistory(newHistory);
  }

const [showPreview, setShowPreview] = useState(false);




<div className="form-container">
        <label htmlFor="name">
          name
          <input type="text" id='name' placeholder='name..' onChange={handleName} />
        </label>

         <label htmlFor="email">
          email
          <input type="text" id='email' placeholder='email..' onChange={handleEmail} />
        </label>

         <label htmlFor="phoneNumber">
          phone number
          <input type="text" id='phoneNumber' placeholder='phone number..' onChange={handlePhoneNumber} />
        </label>

         <label htmlFor="school">
          school
          <input type="text" id='school' placeholder='school..' onChange={handleSchool} />
        </label>

         <label htmlFor="address">
          address
          <input type="text" id='address' placeholder='address..' onChange={handleAddress} />
        </label>

         <label htmlFor="jobTitle">
          job title
          <input type="text" id='jobTitle' placeholder='job Title..' onChange={handleJobTitle} />
        </label>

         <label htmlFor="workHistory">
          work history
          {
            workHistory.map((history, index) => (
              <div key={index} className='history' >
                <p>work history{index + 1}</p>
                <input type="text" value={history.position} placeholder='position..' onChange={(e) => handlePosition(e.target.value,index)}/>
                <input type="text" value={history.startDate} placeholder='start date..' onChange={(e) => handleStartDate(e.target.value,index)} />
                <input type="text" value={history.endDate} placeholder='end date..' onChange={(e) => handleEndDate(e.target.value,index)}/>
                <input type="text" value={history.company} placeholder='company..' onChange={(e) => handleCompany(e.target.value,index)} />
                <input type="text" value={history.description} placeholder='description..' onChange={(e) => handleDescription(e.target.value, index)} />

                <button type='button' className='delete-btn' onClick={() => handleDelete(index)}>delete</button>
              </div>
            ))
          }
        </label>

        <button type='button' onClick={handleAddHistory}>add work history</button>

        <button onClick={() => setShowPreview(true)}>submit</button>
          
        
        {
          showPreview && (
        <div className='cv-preview'>
          <h2>{name}</h2>
          <p>{jobTitle}</p>
          <p>{email}</p>
          <p>{phoneNumber }</p>
          <p>{address}</p>
          <p>{school}</p>
          <p>work history: </p>
              {workHistory.map((job,index) => (
                <div key={index}>
                  <h4>{job.position } at {job.company }</h4>
                  <p>{job.startDate} - {job.endDate}</p>
                  <p>{job.description }</p>
                </div>
          ))}
        </div>
          )
        }
</div>
      

  


