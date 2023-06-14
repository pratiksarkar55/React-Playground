import { ReactElement, useState } from "react";
export function useMultiStepForm(steps:ReactElement[]){
  const [currentStepIndex,setCurrentStepIndex] = useState(0);
  function next(){
     setCurrentStepIndex((prev:number)=>{
        if (prev < steps.length - 1){
              return prev+1
        }else{
            return prev
        }
     });
  }

  function back(){
     setCurrentStepIndex((prev:number)=>{
        if (prev >= 0){
              return prev-1
        }else{
            return prev
        }
     });
  }

  function goTo(index:number){
      setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step:steps[currentStepIndex],
    goTo,
    next,
    back,
    isFirstStep : currentStepIndex === 0,
    isLastStep : currentStepIndex === steps.length -1,
    steps
  }
}