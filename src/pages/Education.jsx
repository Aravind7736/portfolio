import React from 'react'
import './Education.css'
const Education = () => {
  const handleViewPDF = (filePath) => {
    window.open(filePath, "_blank");
  };


  return (
    <div className='edu-main '>
      <header className='edu-head'>
        Education
      </header>
      <div className='edu-container animate-on-scroll'>

        {/* card-1 */}
        <div class="education-card">
          <div class="edu-header animate-on-scroll">
            <h3>Secondary School Leaving <br />Certificate</h3>
            <span>2019 – 2020</span>
          </div>
          <div class="edu-body animate-on-scroll">
            <h4>GOVERMENT HIGH SCHOOL-KANJIRAPPALLY</h4>
            <ul>
              <li>KERALA SYLLABUS</li>
              <li>PERCENTAGE:85%</li>

            </ul>
          </div>
          <div class="edu-footer">
            <button onClick={() => handleViewPDF("/Certificate/S.S.L.C.pdf")} className='slice'>
              <span className="text"> View Certificate</span>
            </button>

          </div>
        </div>

        {/* card-2 */}

        <div class="education-card">
          <div class="edu-header animate-on-scroll">
            <h3>Board of Higher Secondary Education</h3>
            <span>2020 – 2022</span>
          </div>
          <div class="edu-body animate-on-scroll">
            <h4> GOVERNMENT VOCATIONAL HIGHER SECONDARY SCHOOL-PONKUNNAM</h4>
            <ul>
              <li>PERCENTAGE:75%</li>
              <li>VHSE - OPTICAL FIBRE TECHNICIAN</li>
            </ul>
          </div>
          <div class="edu-footer">
            <button onClick={() => handleViewPDF("/Certificate/+2.pdf")} className='slice'>
              <span className="text"> View Certificate</span>
            </button>
          </div>
        </div>


        {/* card-3 */}

        <div class="education-card">
          <div class="edu-header animate-on-scroll">
            <h3>Diploma in Computer Engineering</h3>
            <span>2022 – 2025</span>
          </div>
          <div class="edu-body animate-on-scroll">
            <h4>GOVERNMENT POLYTECHNIC COLLEGE - PALA</h4>
            <ul>
              <li>GPA: 8.6 / 10</li>
              <li>Web Development </li>
            </ul>
          </div>
          <div class="edu-footer">
            <button onClick={() => handleViewPDF("/Certificate/diploma mark list.pdf")} className='slice'>
              <span className="text"> View Certificate</span>
            </button>
          </div>
        </div>

      </div>
      {/* other certificate section */}
      <div className='other-container'>
        <div className='other-certificate animate-on-scroll'>
          <header className='edu-head-2'>
            Certificates
          </header>
          <div class="wrapper animate-on-scroll">
            <div className="inner " style={{ '--quantity': 3 }}>
              <div className="card" style={{ '--index': 0 }}
                onClick={() => window.open('/Certificate/SSLC.pdf', '_blank')} >
                <div className="img">
                  sslc
                </div>
              </div>

              <div className="card " style={{ '--index': 1 }}
                onClick={() => window.open('/image/nss.jpg', '_blank')} >
                <div className="img">
                  <img className='card-img' src="/image/nss.1.jpg" alt="" />
                </div>
              </div>


              <div className="card" style={{ '--index': 2 }}
                onClick={() => window.open('/image/optical-fiber.jpg', '_blank')}>

                <div className="img">
                  <img className='card-img' src="/image/fiber.jpg" alt="" width='120px ' height='180px' />
                </div>
              </div>

              <div className="card" style={{ '--index': 3 }}
                onClick={() => window.open('/Certificate/Internship.pdf', '_blank')}>
                <div className="img">
                  <img className='card-img' src="/image/internship.jpg" alt="" width='120px ' height='180px' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='skills'>

          <header className='edu-head-2'>
            Skills
          </header>

          <div class="skill-container animate-on-scroll">
            <div class="skill-box">
              <span class="title">HTML</span>

              <div class="skill-bar">
                <span class="skill-per html">
                  <span class="tooltip">90%</span>
                </span>
              </div>
            </div>

            <div class="skill-box">
              <span class="title">CSS</span>

              <div class="skill-bar">
                <span class="skill-per css">
                  <span class="tooltip">75%</span>
                </span>
              </div>
            </div>
            <div class="skill-box">
              <span class="title">JavaScript</span>

              <div class="skill-bar">
                <span class="skill-per javascript">
                  <span class="tooltip">50%</span>
                </span>
              </div>
            </div>
            <div class="skill-box">
              <span class="title">REACT</span>

              <div class="skill-bar">
                <span class="skill-per react">
                  <span class="tooltip">60%</span>
                </span>
              </div>
            </div>
            <div class="skill-box">
              <span class="title">NodeJS</span>

              <div class="skill-bar">
                <span class="skill-per nodejs">
                  <span class="tooltip">30%</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education