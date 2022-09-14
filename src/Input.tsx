import React from "react";

interface Props {
  name: string;
  label: string;
  type: string;
  isHalf?: boolean;
  phone?: boolean;
  password?: boolean;
  register: any;
  InputName: string;
  containerStyle?: string;
  inputLayout?: string;
  [x: string]: any;
}

export default function Input({
  name,
  label,
  type,
  isHalf,
  phone,
  password,
  register,
  InputName,
  containerStyle,
  inputLayout = "",
  ...props
}: Props) {
  const [pass, setPass] = React.useState(true);
  return (
    <div className={inputLayout}>
      <label htmlFor={name} className='block font-GtWalsheimPro text-sm text-[#4c4c4c] mb-[5px]'>
        {label}
      </label>
      {!phone ? (
        <div className='mt-1 mb-5'>
          {!password ? (
            <div className=''>
              <input
                {...register(InputName)}
                type={type}
                name={name}
                id={name}
                className={`font-gtwalsheimpro text-sm shadow-sm border-none focus:ring-purple-500 focus:border-purple-500 invalid:border-red invalid:focus:border-red block w-full sm:text-sm  rounded-md py-[13.6px] pl-[14.87px] md:py-4 md:pl-6 bg-[#F4F4F4] ${containerStyle}`}
                {...props}
              />
            </div>
          ) : (
            <div className='flex items-center relative'>
              <input
                {...register(InputName)}
                type={pass ? "password" : "text"}
                name={name}
                id={name}
                className={`font-GtWalsheimPro text-sm shadow-sm block w-full sm:text-sm border-none focus:ring-purple-500 focus:border-purple-500 invalid:border-red invalid:focus:border-red rounded-md py-[13.6px] pl-[14.87px] md:py-4 md:pl-6 bg-[#F4F4F4]  ${containerStyle}`}
                {...props}
              />
            </div>
          )}
        </div>
      ) : (
        <div className='mt-1 relative rounded-md shadow-sm mb-5 '>
          <div className='absolute inset-y-0 left-0 flex items-center'>
            <label htmlFor='country' className='sr-only'>
              Country
            </label>
            <select
              id='country'
              name='country'
              className='font-GtWalsheimPro bg-[#F4F4F4] text-sm h-full py-0 pl-3 pr-8  border-none  focus:ring-cuddle-purple-500 focus:border-cuddle-purple-500 invalid:border-red invalid:focus:border-red text-gray-500 sm:text-sm rounded-md'
            >
              <option>NG</option>
            </select>
          </div>
          <input
            type='text'
            name='phone_number'
            id='phone_number'
            className='font-GtWalsheimPro text-sm block w-full pl-20 sm:text-sm border-none focus:ring-cuddle-purple-500 focus:border-cuddle-purple-500 invalid:border-red invalid:focus:border-red rounded-md py-[13.6px] md:py-4 md:pl-6 bg-[#F4F4F4]'
            {...props}
          />
        </div>
      )}
    </div>
  );
}
