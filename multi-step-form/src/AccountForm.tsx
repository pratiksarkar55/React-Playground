import React from 'react'
import FormWrapper from './FormWrapper'
type props = {
    email: string;
    password: string;
};

type handlerProps = {
    data : props
    handler : (param:Partial<props>)=> void;
};
export default function AccountForm({data,handler}:handlerProps) {
        const {email,password} = data;
  return (
     <>
    <FormWrapper title='Personal Details'>
    <label>Email</label>
    <input type='email' required autoFocus value={email} onChange={(e)=>{handler({email:e.target.value})}}/>
    <label>password</label>
    <input type='password' required value={password} onChange={(e)=>{handler({password:e.target.value})}} />
    </FormWrapper>
    </>
  )
}
