'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../../components/ui/form';
import { Button } from '../ui/button';
import { CustomFormField } from '../CustomFormField';

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneinput',
    DATE_PICKER = 'datepicker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    CHECKBOX = "CHECKBOX",
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const PatientForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default PatientForm;
