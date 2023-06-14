import React from 'react'
import FormWrapper from './FormWrapper'

type props = {
    primaryAddress: string;
    secondaryAddress: string;
    pinCode:string
};

type handlerProps = {
    data : props
    handler : (param:Partial<props>)=> void;
};

export default function AddressFOrm({data,handler}:handlerProps) {
    const {primaryAddress,secondaryAddress,pinCode} = data;
  return (
    <>
    <FormWrapper title='Address Details'>
    <label>Primary Address</label>
    <input type='text' required autoFocus  value={primaryAddress} onChange={(e)=>{handler({primaryAddress:e.target.value})}}/>
    <label>Secondary Address</label>
    <input type='text' value={secondaryAddress} onChange={(e)=>{handler({secondaryAddress:e.target.value})}} />
    <label>Pincode</label>
    <input type='text' required value={pinCode} onChange={(e)=>{handler({pinCode:e.target.value})}} />  
    </FormWrapper>  
    </>
  )
}
