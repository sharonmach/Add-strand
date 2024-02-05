// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";
const data = {
  Grade1: {
    English: ["Reading", "Writing"],
    Kiswahili: ["Kusoma", "Kuandika"],
    Maths: {
      Classification: [
        "Sorting and Grouping 8 lessons",
        "Matching and Pairing 8 lessons",
        "Ordering 8 lessons",
        "Patterns 8 lessons",
      ],
      Numbers: [
        "Symbolic Representation of number(Number Writing)",
        "Number puzzle",
        "Rote Counting",
        "Number Recognition",
        "Counting Concrete Objects",
        "Number Sequencing",
      ],
      Measurement: [
        "Sides of Objects",
        "Mass (Heavy and Light)",
        "Capacity (How much a container can hold)",
        "Time (Daily Routines)",
        "Money (Kenyan Currency) Coins and notes",
        "Area (Surface of Objects)",
      ],
    },
    Science: {
      AnimalsandPlants: [
        "Plants",
        "Animals",
        "Objects",
        "Environment",
        "Human Body Parts",
      ],
      Classification: [
        "Sporting and Gouping",
        "Specimen of Animals and Plants",
      ],
      Experiment: [
        "Experimenting with water",
        "Experimenting with Plants",
        "Observation",
      ],
      FieldExcursion: ["Field Visits"],
    },
  },
  // ... other grade data
};

const dropdownStyle = {
  margin: "5px",
  padding: "10px",
  fontSize: "16px",
  backgroundColor: "#3498db",
  color: "#ffffff",
  cursor: "pointer",
  border: "none",
};

const inputStyle = {
  margin: "5px",
  padding: "8px",
  fontSize: "14px",
};

const App = () => {
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentSubject, setCurrentSubject] = useState(null);
  const [currentStrand, setCurrentStrand] = useState(null);
  const [currentSubstrand, setCurrentSubstrand] = useState(null);
  const [newStrand, setNewStrand] = useState("");
  const [newSubstrand, setNewSubstrand] = useState("");

  const handleGradeClick = (grade) => {
    setCurrentGrade(grade);
    setCurrentSubject(null);
    setCurrentStrand(null);
    setCurrentSubstrand(null);
  };

  const handleSubjectChange = (subject) => {
    setCurrentSubject(subject);
    setCurrentStrand(null);
    setCurrentSubstrand(null);
  };

  const handleStrandChange = (strand) => {
    setCurrentStrand(strand);
    setCurrentSubstrand(null);
  };

  const handleSubstrandClick = (substrand) => {
    setCurrentSubstrand(substrand);
  };

  const addNewStrand = () => {
    if (newStrand && currentSubject && currentGrade) {
      data[currentGrade][currentSubject][newStrand] = [];
      setNewStrand("");
    }
  };

  const addNewSubstrand = () => {
    if (newSubstrand && currentStrand && currentSubject && currentGrade) {
      data[currentGrade][currentSubject][currentStrand].push(newSubstrand);
      setNewSubstrand("");
    }
  };

  return (
    //     <div className="subject" style={{ textAlign: "center", marginTop: "20px" }}>
    //       {Object.keys(data).map((grade) => (
    //         <div key={grade} style={{ display: "flex", flexWrap: "wrap" }}>
    //           <button onClick={() => handleGradeClick(grade)} style={dropdownStyle}>
    //             {grade}
    //           </button>
    //           {currentGrade === grade && (
    //             <div style={{ display: "flex", flexDirection: "column" }}>
    //               <select
    //                 fullWidth
    //                 onChange={(e) => handleSubjectChange(e.target.value)}
    //                 value={currentSubject || ""}
    //                 style={dropdownStyle}
    //               >
    //                 <option value="">Select Subject</option>
    //                 {Object.keys(data[grade]).map((subject) => (
    //                   <option key={subject} value={subject}>
    //                     {subject}
    //                   </option>
    //                 ))}
    //               </select>
    //             </div>
    //           )}
    //         </div>
    //       ))}

    //       {currentSubject && (
    //         <div style={{ marginTop: "20px" }}>
    //           <select
    //             onChange={(e) => handleStrandChange(e.target.value)}
    //             value={currentStrand || ""}
    //             style={dropdownStyle}
    //           >
    //             <option value="">Select Strand</option>
    //             {Object.keys(data[currentGrade][currentSubject]).map((strand) => (
    //               <option key={strand} value={strand}>
    //                 {strand}
    //               </option>
    //             ))}
    //           </select>

    //           {currentStrand && (
    //             <div className="subject2" style={{ marginTop: "20px" }}>
    //               {!currentSubstrand && (
    //                 <div>
    //                   <input
    //                     type="text"
    //                     value={newStrand}
    //                     onChange={(e) => setNewStrand(e.target.value)}
    //                     placeholder="Enter new strand"
    //                     style={inputStyle}
    //                   />
    //                   <button onClick={addNewStrand} style={dropdownStyle}>
    //                     Add New Strand
    //                   </button>
    //                 </div>
    //               )}
    //               {Array.isArray(
    //                 data[currentGrade][currentSubject][currentStrand]
    //               ) &&
    //                 data[currentGrade][currentSubject][currentStrand].map(
    //                   (substrand) => (
    //                     <button
    //                       key={substrand}
    //                       onClick={() => handleSubstrandClick(substrand)}
    //                       style={dropdownStyle}
    //                     >
    //                       {substrand}
    //                     </button>
    //                   )
    //                 )}
    //               {!currentSubstrand && (
    //                 <div style={{ marginTop: "20px" }}>
    //                   <input
    //                     type="text"
    //                     value={newSubstrand}
    //                     onChange={(e) => setNewSubstrand(e.target.value)}
    //                     placeholder="Enter new substrand"
    //                     style={inputStyle}
    //                   />
    //                   <button onClick={addNewSubstrand} style={dropdownStyle}>
    //                     Add New Substrand
    //                   </button>
    //                 </div>
    //               )}
    //             </div>
    //           )}
    //         </div>
    //       )}
    //     </div>
    //   );
    // };

    <div className="subject" style={{ textAlign: "center", marginTop: "20px" }}>
      {Object.keys(data).map((grade) => (
        <div
          key={grade}
          style={{ display: "inline-block", marginLeft: "10px" }}
        >
          <button onClick={() => handleGradeClick(grade)} style={dropdownStyle}>
            {grade}
          </button>
          {currentGrade === grade && (
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <select
                fullWidth
                onChange={(e) => handleSubjectChange(e.target.value)}
                value={currentSubject || ""}
                style={dropdownStyle}
              >
                <option value="">Select Subject</option>
                {Object.keys(data[grade]).map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}

      {/* Display strands and substrands if subject is selected */}
      {currentSubject && (
        <div style={{ marginTop: "20px" }}>
          <select
            onChange={(e) => handleStrandChange(e.target.value)}
            value={currentStrand || ""}
            style={dropdownStyle}
          >
            <option value="">Select Strand</option>
            {/* Iterate over strands and display options */}
            {Object.keys(data[currentGrade][currentSubject]).map((strand) => (
              <option key={strand} value={strand}>
                {strand}
              </option>
            ))}
          </select>

          {/* Display new strand input and existing substrands */}
          {currentStrand && (
            <div style={{ marginTop: "20px" }}>
              {!currentSubstrand && (
                <div>
                  <input
                    type="text"
                    value={newStrand}
                    onChange={(e) => setNewStrand(e.target.value)}
                    placeholder="Enter new strand"
                    style={inputStyle}
                  />
                  <button onClick={addNewStrand} style={dropdownStyle}>
                    Add New Strand
                  </button>
                </div>
              )}
              {/* Display existing substrands using a dropdown select */}
              {Array.isArray(
                data[currentGrade][currentSubject][currentStrand]
              ) && (
                <div style={{ marginTop: "10px" }}>
                  <select
                    onChange={(e) => handleSubstrandClick(e.target.value)}
                    value={currentSubstrand || ""}
                    style={dropdownStyle}
                  >
                    <option value="">Select Substrand</option>
                    {data[currentGrade][currentSubject][currentStrand].map(
                      (substrand) => (
                        <option key={substrand} value={substrand}>
                          {substrand}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}
              {/* Display new substrand input */}
              {!currentSubstrand && (
                <div style={{ marginTop: "20px" }}>
                  <input
                    type="text"
                    value={newSubstrand}
                    onChange={(e) => setNewSubstrand(e.target.value)}
                    placeholder="Enter new substrand"
                    style={inputStyle}
                  />
                  <button onClick={addNewSubstrand} style={dropdownStyle}>
                    Add New Substrand
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
