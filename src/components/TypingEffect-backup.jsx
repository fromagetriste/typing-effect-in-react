import { useEffect } from "react";

function TypingEffect(
  stringToBeInserted,
  stateAsIndex,
  setStateAsIndex,
  displayText,
  setDisplayText
) {
  const typingSpeed = 400; // vitesse typing in milliseconds

  useEffect(() => {
    const typeCharacter = () => {
      // Check if we have more characters to type
      if (stateAsIndex < stringToBeInserted.length) {
        // Append the next character to displayText
        setDisplayText((prev) => prev + stringToBeInserted[stateAsIndex]);
        setStateAsIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId); // Clear the interval when done
      }
    };
    // Function to type one character at a time
    const intervalId = setInterval(typeCharacter, typingSpeed); // Start typing with setInterval
    // si index > stringToBeInserted.length, on clear l'interval pour stopper la fonction on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [stateAsIndex]); //  à chaque changement d'index, la fonction boucle sur l'index suivant
  return [displayText]; // Render the current display text, not useful but i keep it for debug
}

export default TypingEffect;
