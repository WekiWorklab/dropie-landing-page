/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "./Input";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  email: string;
}

export default function Form({ open, setOpen, email }: Props) {
  const [wait, setWait] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("First name is required"),
    phone: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState, setValue } = useForm(formOptions);
  const { errors } = formState;

  setValue("email", email);
  const onSubmitForm = (data: any) => {
    setWait(1);
  };

  let buttonClass = `flex gap-4 justify-center items-center rounded-lg bg-[#D93804] w-full py-3 px-5 md:py-4 md:px-6 text-sm md:text-base text-white font-GtWalsheimPro`;

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' static className='fixed inset-0 flex items-start mt-16   justify-center w-full' open={open} onClose={setOpen}>
        <div className='flex  items-center justify-center text-center p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='mt-[20px] md:mt-10 w-full flex md:max-w-[545px]  flex-col items-center  bg-white rounded-3xl px-8 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all '>
              {wait === 0 ? (
                <div className='w-full flex justify-end text-cuddle-purple-500 text-heading-3 self-end cursor-pointer' onClick={() => setOpen(false)}>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                </div>
              ) : (
                ""
              )}
              {wait === 0 ? (
                <>
                  <h3 className='text-cuddle-purple-500 font-bold text-heading-4-mobile mt-2'>Get in touch with us</h3>
                  <p className='text-cuddle-gray-800 text-sm mt-4'>
                    Want to get in touch? We&apos;d love to hear from you. Here is how you can reach us...
                  </p>

                  <form onSubmit={handleSubmit(onSubmitForm)} className='max-w-xl w-full items-center justify-center '>
                    <div className='w-full mt-7  md:mt-8 max-w-[430px] items-center justify-center mx-auto'>
                      <div className=''>
                        <Input register={register} InputName='name' name='name' label='Name' type='text' placeholder='Name' containerStyle='w-full' />
                      </div>
                      <div className=''>
                        <Input
                          register={register}
                          InputName='phone'
                          name='phone'
                          label='Phone Number'
                          type='text'
                          placeholder='Phone Number'
                          containerStyle='w-full'
                        />
                      </div>
                      <div className=''>
                        <Input register={register} InputName='email' name='email' label='Email Address' type='email' placeholder='Email Address' />
                      </div>
                      <div className='w-full flex flex-col items-center mb-10'>
                        <button type='submit' className={buttonClass}>
                          Submit
                          {isLoading ? <Spinner /> : null}
                        </button>
                      </div>
                      <div className='w-full flex justify-center md:justify-start text-cuddle-purple-500'>
                        <div className='w-full py-[33px]  md:py-11 rounded-xl max-w-[545px] md:max-w-[613px] mb-[64px]'></div>
                      </div>
                    </div>
                  </form>
                </>
              ) : (
                <div className='inline-block align-bottom bg-white rounded-tl-xl rounded-tr-xl md:h-auto sm:rounded-lg px-6 pt-5 pb-4 text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle w-3/4 sm:max-w-sm sm:w-full sm:p-6'>
                  <div className='flex w-full items-center justify-center'>
                    <svg className='animate-bounce' width='120' height='120' viewBox='0 0 39 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12.8893 0.153469C9.58054 0.628937 6.84204 1.91701 4.61231 4.04655C3.35752 5.24498 2.39217 6.56526 1.6499 8.09816C0.6666 10.1289 0.189453 12.1587 0.189453 14.3111C0.189453 16.4636 0.6666 18.4934 1.6499 20.5241C3.59878 24.5488 7.33623 27.396 11.8611 28.3033C12.6306 28.4576 12.9575 28.4787 14.5775 28.4787C16.1987 28.4787 16.5242 28.4577 17.296 28.3029C20.7342 27.6137 23.8839 25.6751 25.9821 22.957C27.6992 20.7326 28.6657 18.197 28.9019 15.297C28.98 14.3394 28.9752 14.1038 28.8659 13.5118C28.5475 11.7866 27.3036 10.3568 25.6564 9.82281C24.8423 9.55883 23.5084 9.55883 22.6942 9.82281C20.7249 10.4614 19.3736 12.3517 19.3736 14.4918C19.3736 16.3678 17.951 18.2256 16.0415 18.8433C15.1545 19.1303 14.0006 19.1303 13.1136 18.8433C11.5191 18.3275 10.3062 17.0237 9.88695 15.3747C9.70324 14.6522 9.78205 12.7804 10.05 11.5004C10.5262 9.22557 11.548 7.07354 12.9763 5.3372C13.6136 4.56243 15.0388 3.23858 15.8459 2.67172C16.5668 2.16541 18.1551 1.31194 18.8556 1.0545C19.0561 0.980885 19.2201 0.895727 19.2201 0.865341C19.2201 0.795453 18.0058 0.457407 17.1482 0.288535C16.5185 0.16456 13.4824 0.0682356 12.8893 0.153469Z'
                        fill='#54259F'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M25.8177 28.4461C29.1265 27.9707 31.865 26.6826 34.0947 24.5531C35.3495 23.3546 36.3149 22.0344 37.0571 20.5014C38.0404 18.4707 38.5176 16.4409 38.5176 14.2885C38.5176 12.1361 38.0404 10.1062 37.0571 8.07548C35.1083 4.05083 31.3708 1.20357 26.846 0.29631C26.0764 0.142023 25.7496 0.120907 24.1295 0.120907C22.5084 0.120907 22.1828 0.141949 21.411 0.29669C17.9728 0.985926 14.8231 2.92449 12.7249 5.64261C11.0079 7.86703 10.0413 10.4026 9.8051 13.3026C9.72705 14.2602 9.73181 14.4958 9.84109 15.0878C10.1595 16.813 11.4034 18.2428 13.0506 18.7768C13.8648 19.0408 15.2101 19.0408 16.0243 18.7768C17.9936 18.1382 19.3335 16.2479 19.3335 14.1078C19.3335 12.2318 20.756 10.374 22.6655 9.75629C23.5525 9.46929 24.7065 9.46929 25.5935 9.75629C27.188 10.2721 28.4008 11.5759 28.8201 13.2249C29.0038 13.9474 28.925 15.8192 28.657 17.0992C28.1808 19.374 27.159 21.5261 25.7308 23.2624C25.0935 24.0372 23.6682 25.361 22.8611 25.9279C22.1403 26.4342 20.552 27.2877 19.8514 27.5451C19.6509 27.6187 19.4869 27.7039 19.4869 27.7343C19.4869 27.8042 20.7012 28.1422 21.5588 28.3111C22.1885 28.435 25.2247 28.5314 25.8177 28.4461Z'
                        fill='#C393F2'
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

interface DetailsProps {
  keyy: string;
  value: string;
}

function Details({ keyy, value }: DetailsProps) {
  return (
    <div className='text-[10px] md:text-sm pt-2'>
      {keyy} <span className='font-bold'>{value}</span>
    </div>
  );
}

interface ErrorMessageProps {
  errors: string[] | string;
}

const ErrorMessage = ({ errors = [], ...props }: ErrorMessageProps) => {
  console.log([typeof errors, errors]);
  return (
    <>
      {errors.length > 0 && (
        <div role='alert' className='font-GtWalsheimPro text-red-500' {...props}>
          <pre className=' whitespace-normal -mb-5 mt-4'>
            {typeof errors === "object" ? (
              errors.map((error) => (
                <li className='list-none' key={error}>
                  {error}
                </li>
              ))
            ) : (
              <li className='list-none' key={errors}>
                {errors}
              </li>
            )}
          </pre>
        </div>
      )}
    </>
  );
};

const Spinner = () => {
  return (
    <svg role='status' className='inline mr-3 w-4 h-4 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='#E5E7EB'
      />

      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentColor'
      />
    </svg>
  );
};

interface ButtonProps {
  containerStyle?: string;
  title: string;
  type: string;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button = ({ containerStyle, title, onClick, disabled, isLoading, type }: ButtonProps) => {
  let buttonClass = disabled
    ? `flex gap-4 justify-center items-center rounded-lg bg-[#D93804] w-full py-3 px-5 md:py-4 md:px-6 text-sm md:text-base text-white font-GtWalsheimPro  ${containerStyle}`
    : `flex gap-4 justify-center items-center rounded-lg bg-cuddle-purple-500 py-3 px-5 md:py-4 md:px-6 text-sm md:text-base text-white font-GtWalsheimPro ${containerStyle}`;
  return (
    <button onClick={onClick} disabled={disabled || isLoading} type='submit' className={buttonClass}>
      {title}
      {isLoading ? <Spinner /> : null}
    </button>
  );
};
