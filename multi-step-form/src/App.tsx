import { FormEvent, useState } from "react";
import { useMultiStepForm } from "./useMultiStepForm";
import UserForm from "./UserForm";
import AddressFOrm from "./AddressFOrm";
import AccountForm from "./AccountForm";

  type InitialDataType = {
    firstName:string,
    lastName:string,
    age:number,
    primaryAddress:string,
    secondaryAddress:string,
    pinCode:string,
    email:string,
    password:string
  }


function App() {
  
  const initialData = {
    firstName:"",
    lastName:"",
    age:0,
    primaryAddress:"",
    secondaryAddress:"",
    pinCode:"",
    email:"",
    password:""
  }

  const [data,setData] = useState<InitialDataType>(initialData);

  
const handleData = (item:Partial<InitialDataType>)=>{
  setData({...data,...item});
}

 const {steps,currentStepIndex,step,isFirstStep,next,back,isLastStep} = useMultiStepForm(
  [<UserForm data={data} handler={handleData} />,
  <AddressFOrm data={data} handler={handleData}/>,
  <AccountForm data={data} handler={handleData}/>]
  );



 const submitHandler = (e:FormEvent)=>{
   e.preventDefault();
   if(!isLastStep)
   next();
   else
   alert("Form is submitted")
 }
  return <div style={{
    position:'relative',
    background:"white",
    border:"1px solid black",
    padding:"2rem",
    margin:"1rem",
    borderRadius:".5rem",
    fontFamily:"Arial"
  }}>

    <form onSubmit={submitHandler}>
      <div style={{
        position:"absolute",
        top:".5rem",
        right:".5rem",
      }}>
        {currentStepIndex+1}/{steps.length}
      </div>
      <div style={{
        marginTop:"1rem",
        display:"flex",
        gap:".5rem",
        justifyContent:"flex-end"

      }}>
       {!isFirstStep && <button type="button" onClick={back}>Back</button>} 
     { isLastStep?<button >Finish</button>:<button >Next</button>}   
      </div>
      {step}
    </form>

  </div>
}

export default App
