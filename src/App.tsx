/* eslint-disable jsx-a11y/anchor-is-valid */

import DropieImage from "./assets/dropie_screen.png";
import { useSpring, animated } from "react-spring";
import Form from "./Form";
import React from "react";

function App() {
  const [open, setOpen] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState("");
  const Features = [
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
    {
      title: "Drag and Drop",
      description: "Drag and drop your files anywhere on the page to upload",
      image: DropieImage,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let email = (e.target as HTMLFormElement).email.value;
    setUserEmail(email);
    setOpen(true);
  };
  const handleChange = () => {
    setOpen(!open);
  };
  return (
    <div className='w-full'>
      <div className='absolute top-0 left-0 flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row max-w-7xl tails-selected-element w-full'>
        <div className='relative flex flex-col md:flex-row'>
          <a href='#_' className='flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0'>
            <img src='https://www.dropie.ng/static/media/logo.21081168.svg' alt='naija red devils' className='object-cover z-20' />

            <span className='mx-auto text-xl font-black leading-none text-gray-900 select-none ml-2'>
              Dropie
              <span className='text-[#D93804]' data-primary='indigo-600'>
                .
              </span>
            </span>
          </a>
        </div>
        <div className='hidden md:inline-flex items-center ml-5 space-x-6 lg:justify-end'>
          <nav className='flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l border-[#D93804]'>
            <a href='#_' onClick={handleChange} className='mr-5 font-medium leading-6 text-[#D93804] hover:text-gray-900'>
              Get Started
            </a>
            <a href='#features' className='mr-5 font-medium leading-6 text-[#D93804] hover:text-gray-900'>
              Features
            </a>
          </nav>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center md:justify-center h-screen w-full'>
        <div className='w-full md:w-2/5 bg-[#F0F1F6] lg:h-screen pt-10 md:pt-4'>
          <div className='flex flex-col items-center justify-center h-full'>
            <img src={DropieImage} alt='naija red devils' className='object-cover ' />
            <div className=' flex w-7/12 md:w-5/12 justify-between items-center mt-6 pb-6'>
              <p className='text-cuddle-gray-800 text:base  md:text-base font-bold'>Available soon on</p>
              <div className='w-[18px] max-w-[27px]'>
                <img src='/icons/appleStore.svg' alt='apple store' width={24} height={24} />
              </div>
              <div className='w-[18px] max-w-[27px]'>
                <img src='/icons/playStore.svg' alt='apple store' width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-3/5 bg-[#fff] h-screen'>
          <div className='flex flex-col  justify-center h-full px-10 md:px-20'>
            <h1 className='text-3xl lg:text-7xl font-bold  text-gray-900'>Your Riders</h1>
            <h1 className='text-3xl lg:text-7xl font-bold  text-gray-900'>Your Deliveries</h1>
            <h1 className='text-3xl lg:text-7xl font-bold  text-gray-900'>You are in Charge</h1>
            <p className='text-sm lg:text-base mt-5 text-gray-600 md:pl-2'>
              Get delivery request, you manage your delivery, and see delivery payment in real time
            </p>
            <div className='flex flex-col items-center justify-center md:items-start w-full mt-10'>
              <div className='flex flex-col items-center justify-center w-full relative'>
                <form
                  className='w-full'
                  onSubmit={(e: React.FormEvent) => {
                    handleSubmit(e);
                  }}
                >
                  <input
                    type='email'
                    name='email'
                    placeholder='Enter your email address'
                    autoComplete='off'
                    className='w-full p-2 md:px-5 md:py-3 text-gray-700 bg-white border border-gray-100 focus:outline-none focus:border-[#D93804] rounded-full'
                  />
                  <button
                    type='submit'
                    className='absolute p-2 md:px-5 md:py-3 text-white transition-colors duration-150 bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer rounded-full focus:shadow-outline hover:bg-[#D93804] right-0'
                  >
                    Get Started
                  </button>
                </form>
              </div>
              <p className='text-xs lg:text-sm mt-5 text-gray-600 lg:pl-2'>We will never share your email with anyone else.</p>
            </div>
          </div>
        </div>
      </div>

      <section className='bg-conic-to-br from-white to-[#F97B04]' id='features'>
        <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>
          <div className='w-full mb-8 lg:mb-16'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold bg-conic-to-r from-black to-[#F97B04] text-center '>
              Designed for{" "}
              <span className='relative inline-block'>
                Business
                <svg className='hidden absolute' width='160' height='11' viewBox='0 0 160 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M34.6102 2.23473C49.7135 1.91256 64.8251 1.70545 79.9366 1.6134C95.0481 1.52135 110.02 1.55203 125.057 1.69777C133.6 1.78215 142.15 1.89722 150.693 2.05063L151.852 0.47811C132.35 0.792615 112.856 1.18383 93.3627 1.65175C73.869 2.11967 54.3752 2.6643 34.8815 3.29331C23.9384 3.64617 13.0035 4.01437 2.06039 4.41326C1.41909 4.43627 0.457152 4.58969 0.0953964 5.17267C-0.241694 5.7173 0.383157 6.00112 0.901126 5.98578C21.217 5.50252 41.5493 5.45649 61.8735 5.85538C82.1976 6.25426 102.505 7.10572 122.788 8.39443C134.184 9.11549 145.571 9.98229 156.941 10.9872C157.558 11.0409 158.577 10.757 158.906 10.2278C159.268 9.65245 158.594 9.45301 158.101 9.41465C137.867 7.62734 117.584 6.27727 97.2844 5.37211C76.985 4.46695 56.6527 4.01437 36.3286 4.0067C24.9086 4.0067 13.4886 4.13711 2.06861 4.41326L0.909347 5.98578C20.3948 5.27239 39.8886 4.64338 59.3823 4.08341C78.876 3.53111 98.3697 3.04784 117.863 2.64896C128.807 2.42651 139.758 2.21939 150.701 2.04296C151.342 2.03529 152.312 1.85886 152.666 1.28355C153.02 0.708235 152.37 0.47811 151.86 0.470439C136.741 0.20963 121.637 0.048542 106.526 0.0101877C91.4141 -0.0281665 76.4424 0.0408711 61.4048 0.232642C52.8624 0.340034 44.3118 0.485781 35.7695 0.669881C35.1282 0.685223 34.158 0.853981 33.8045 1.4293C33.4674 1.97393 34.0922 2.25775 34.6102 2.24241V2.23473Z'
                    fill='#D93804'
                  />
                </svg>
              </span>{" "}
              teams like yours
            </h2>
            <p className='text-gray-500 sm:text-xl text-center'>Here at Dropie we focus on unlocking long-term value and drive economic growth.</p>
          </div>
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
            {Features.map((item, index) => (
              <Card key={index} title={item.title} description={item.description} icon={item.image} />
            ))}
            {/* <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
                <svg className='w-5 h-5 text-white lg:w-6 lg:h-6 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z'></path>
                </svg>
              </div>
              <h3 className='mb-2 text-xl text-white'>Dropie Fleet Management</h3>
              <p className='text-[#FFCB83] '>Manage your riders and view their realtime location through the Dropie Analytics Dashboard</p>
            </div>
            <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
                <svg className='w-5 h-5 text-white lg:w-6 lg:h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <h3 className='mb-2 text-xl text-white'>Business Automation</h3>
              <p className='text-[#FFCB83] '>
                Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.
              </p>
            </div>
            <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
                <svg className='w-5 h-5 text-white lg:w-6 lg:h-6 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'></path>
                  <path
                    fill-rule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <h3 className='mb-2 text-xl text-white'>Finance</h3>
              <p className='text-[#FFCB83] '>
                Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.
              </p>
            </div>
            <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
                <svg className='w-5 h-5 text-white lg:w-6 lg:h-6 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
                </svg>
              </div>
              <h3 className='mb-2 text-xl text-white'>Enterprise Design</h3>
              <p className='text-[#FFCB83] '>
                Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.
              </p>
            </div>
            <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
                <svg className='w-5 h-5 text-white lg:w-6 lg:h-6 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </div>
              <h3 className='mb-2 text-xl text-white'>Operations</h3>
              <p className='text-[#FFCB83] '>
                Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.
              </p>
            </div> */}
          </div>
        </div>
      </section>
      <CTA setOpen={handleChange} />
      <Footer />
      <Form open={open} setOpen={setOpen} email={userEmail} />
    </div>
  );
}

export default App;

interface Props {
  title: string;
  description: string;
  icon: string;
}

const Card: React.FC<Props> = ({ title, description, icon }) => {
  const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.02];
  const trans = (x: number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className='card'
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 1, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <div className='bg-gradient-to-br from-[#D93804] to-[#F97B04] cursor-pointer p-4 rounded-lg min-h-[220px]'>
        <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12'>
          <svg className='w-5 h-5 text-white lg:w-6 lg:h-6 ' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path d='M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z'></path>
            <path
              fill-rule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </div>
        <h3 className='mb-2 text-xl text-white'>{title}</h3>
        <p className='text-[#FFCB83] '>Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
      </div>
    </animated.div>
  );
};

interface CTAProps {
  setOpen: () => void;
}

function CTA({ setOpen }: CTAProps) {
  const handleChange = () => {
    setOpen();
  };
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4'>
          <div className='pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20'>
            <div className='lg:self-center'>
              <h2 className='text-3xl font-extrabold text-white sm:text-4xl'>
                <span className='block'>Ready to dive in?</span>
                <span className='block'>let's get you started today.</span>
              </h2>
              <p className='mt-4 text-lg leading-6 text-indigo-200'>
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
              </p>
              <a
                onClick={handleChange}
                className='cursor-pointer mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-[#F97B04] hover:bg-indigo-50'
              >
                Sign up for free
              </a>
            </div>
          </div>
          <div className='-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1'>
            <img
              className='transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20'
              src='https://www.dropie.ng/static/media/dashboard.a06b4c9a.png'
              alt='App screenshot'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  {
    name: "Facebook",
    href: "#",
    icon: (props: any) => (
      <svg fill='#F97B04' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: any) => (
      <svg fill='#F97B04' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (props: any) => (
      <svg fill='#F97B04' viewBox='0 0 24 24' {...props}>
        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className='text-gray-400 hover:text-gray-500'>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-center text-base text-[#F97B04]'>&copy; 2022 Dropie, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
