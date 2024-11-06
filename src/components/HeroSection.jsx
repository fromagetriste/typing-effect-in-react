import React, { useState, useEffect } from "react";
// import TypingEffect from "./TypingEffect";

const HeroSection = () => {
  const [displayClasses, setDisplayClasses] = useState({
    "class-blue": "",
    "class-red": "",
    "class-orange": "",
    "class-souligne": "",
    "a-b": "", // i need to end my state with a dummy data which i dont use, otherwise the function typingCharacters won't run properly on last object key. To solve the problem, i'd need to modify the function and get into over-complicated logic
  });
  const [indexToSwicthToNextClass, setIndexToSwicthToNextClass] = useState(0);
  const [indexForWords, setIndexForWords] = useState(0);

  useEffect(() => {
    if (indexToSwicthToNextClass >= Object.keys(displayClasses).length) return;

    let cssClass = Object.keys(displayClasses)[indexToSwicthToNextClass];
    console.log(cssClass);

    function typingCharacters() {
      if (indexForWords < cssClass.length) {
        setDisplayClasses((prevState) => ({
          ...prevState,
          [cssClass]: prevState[cssClass] + cssClass[indexForWords],
        }));
        setIndexForWords((indexForWords) => indexForWords + 1);
        console.log(displayClasses);
      } else {
        clearInterval(myInterval); // Clear the interval when done
        setIndexToSwicthToNextClass(
          (indexToSwicthToNextClass) => indexToSwicthToNextClass + 1
        );
        setIndexForWords(0);
      }
    }
    let myInterval = setInterval(typingCharacters, 200); // starts the interval function

    return () => {
      clearInterval(myInterval); // cleaning function (useEffect property) :
    };
  }, [indexForWords]); // once this effect changes, useEffect runs again. I first put indexToSwicthToNextClass as dependency array but for some reason i ignore, the output was not what i wanted

  return (
    <div className="flex">
      <div className="container-un">
        <h1 className={displayClasses["class-blue"]}>
          je suis un h1, voici ma classe : {displayClasses["class-blue"]}
        </h1>

        <p className={displayClasses["class-red"]}>
          Im a p tag, mas class is {displayClasses["class-red"]}
        </p>
        <p
          className={displayClasses["class-orange"]}
          id={displayClasses["class-souligne"]}
        >
          im a p tag, and combined class makes me underline
        </p>
        <p>dont forget to also use ID to add class</p>
      </div>
      <div className="container-deux">
        <h1 className={displayClasses["class-blue"]}>je suis un h1</h1>
        <p className={displayClasses["class-red"]}>Im a p tag</p>
        <p
          className={displayClasses["class-orange"]}
          id={displayClasses["class-souligne"]}
        >
          im a p tag, and combined class makes me underline
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
