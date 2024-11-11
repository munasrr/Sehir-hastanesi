'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../components/ui/form';
import { CustomFormField } from '../CustomFormField';
import { useState } from 'react';
import SubmitButton from '../SubmitButton';
import {UserFormValidation } from '../../lib/validation';
import { useRouter } from "next/navigation"



export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    DATE_PICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    CHECKBOX = "CHECKBOX",
}


const PatientForm = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(name,email,phone: z.infer<typeof UserFormValidation>) {
   setIsLoading(true)
try {
  // const userData ={
  //  name,email,phone,

  //  const user = await createUser(userData);

  //  if(user) route.push (`patients/${user.$id}/register`)
  
  }catch (error){
   console.log(error);
}

}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1>Hi there 👋</h1>
          <p className="text-dark-700">Schedule your first appoinment.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="full name"
          placeholder="Anwar"
          iconsSrc="/assets/icons/user.svg"
          iconsAlt="user"
        />
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Anwarabdi2090@gmail.com"
          iconsSrc="/assets/icons/email.svg"
          iconsAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="phone number"
          placeholder="0611228899"
        />
          <SubmitButton isLoading={isLoading}>
          Get started
        </SubmitButton>

      </form>
    </Form>
  );
};

export default PatientForm;
