'use client'
import {FormControl,FormDescription,FormField,FormItem,FormLabel, FormMessage,} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Control } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
 interface CustomProps {
    control:Control<any>,
    fieldType:FormFieldType
}

export const CustomFormField = ({control,fieldType}:CustomProps) => {
  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
