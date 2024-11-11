/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import {
  FormControl,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Input } from '../components/ui/input';
import { Control } from 'react-hook-form';
import { FormFieldType } from './forms/PatientForm';
import Image from 'next/image';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  iconsSrc?: string;
  iconsAlt?: string;
  disabled?: boolean;
  dateFormate?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, placeholder, iconsSrc, iconsAlt } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className=" flex rounded-md border border-dark-500 bg-dark-400">
          {iconsSrc && (
            <Image
              src={iconsSrc}
              height={24}
              width={24}
              alt={iconsAlt || 'icon'}
              className="ml-2"
            />
          )}
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className="shadow-input border-0"
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry="US"
            value={field.value as E164Number |undefined }
            onChange={field.onChange}
            placeholder={placeholder}
            international
            withCountryCallingCode
            ClassName="input-phone"

          />
        </FormControl>
      );
    default:
      break;
  }
};

export const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField field={field} props={props} />

          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  );
};
