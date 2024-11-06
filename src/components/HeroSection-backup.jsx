// import React, { useState } from "react";
// import TypingEffect from "./TypingEffect";

// const HeroSection = () => {
//   const [classBlue, setClassBlue] = useState("");
//   const [classBlueIndex, setClassBlueIndex] = useState(0); // State to hold the text being displayed
//   const stringBlue = "class-blue"; // The complete text to be typed out

//   const [classRed, setClassRed] = useState("");
//   const [classRedIndex, setClassRedIndex] = useState(0); // State to hold the text being displayed
//   const stringRed = "class-red";

//   //     function TypingEffect(
//   //   stringToBeInserted,
//   //   stateAsIndex,
//   //   setStateAsIndex,
//   //   displayText,
//   //   setDisplayText
//   // )

//   TypingEffect(
//     stringBlue,
//     classBlueIndex,
//     setClassBlueIndex,
//     classBlue,
//     setClassBlue
//   );
//   TypingEffect(
//     stringRed,
//     classRedIndex,
//     setClassRedIndex,
//     classRed,
//     setClassRed
//   );

//   return (
//     <div className="flex">
//       <div className="container-un">
//         <h1 className={classBlue}>
//           je suis un h1, voici ma classe : {classBlue}
//         </h1>

//         <p className={classRed}>Im a p tag, mas class is {classRed}</p>
//         <p className="class-trois souligne">
//           im a p tag, and combined class makes me underline
//         </p>
//         <p>dont forget to also use ID to add class</p>
//       </div>
//       <div className="container-deux">
//         <h1 className={classBlue}>je suis un h1</h1>
//         <p className={classRed}>Im a p tag</p>
//         <p className="class-trois souligne">
//           im a p tag, and combined class makes me underline
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
