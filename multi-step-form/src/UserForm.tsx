import React from 'react'
import FormWrapper from './FormWrapper'


type props = {
    firstName: string;
    lastName: string;
    age:number
};

type handlerProps = {
    data : props
    handler : (param:Partial<props>)=> void;
};


export default function UserForm({data,handler}:handlerProps) {
    const {firstName,lastName,age} = data;
  return (
    <>
    <FormWrapper title='User Details'>
    <label>First Name</label>
    <input type='text' value={firstName} onChange={(e)=>{handler({firstName:e.target.value})}} required autoFocus/>
    <label>last  Name</label>
    <input type='text' required value={lastName} onChange={(e)=>{handler({lastName:e.target.value})}}/>
    <label>Age</label>
    <input type='number' required value={age} onChange={(e)=>{handler({age:Number(e.target.value)})}} />     
    </FormWrapper> 
    </>
  )
}
