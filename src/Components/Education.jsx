import React from "react";

const Education = () => {
  return (
    <section className="light" id="education">
      {/* Make the style modern */}
      <style>
        {`
            .grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 1rem;
                margin: 0 auto;
                max-width: 800px;
            }
            .cell {
                padding: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            @media (max-width: 600px) {
                .grid {
                grid-template-columns: 1fr;
                }
            }
            `}
        {`
            h2 {
                text-align: center;
                margin-bottom: 2rem;
            }
            `}
      </style>
      <h2>Education</h2>
      <div className="grid">
        <div className="cell">
          <h3>Polytechnic Braulio Paulino</h3>
          <p>High School</p>
          <p>2019-2020</p>
        </div>
        <div className="cell">
          <h3>Polytechnic Braulio Paulino</h3>
          <p>Software and Systems Development</p>
          <p>2020-2023</p>
        </div>
        <div className="cell">
          <h3>Microsoft Learn Student Ambassadors</h3>
          <p>MLSA Onboarding</p>
          <p>2023</p>
        </div>
        <div className="cell">
          <h3>Technological University of Santiago</h3>
          <p>System Engineer</p>
          <p>Present</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
