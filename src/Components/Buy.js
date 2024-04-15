
import { Fragment, useState ,useEffect } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import {useNavigate , useLocation} from 'react-router-dom';
import { Button } from 'reactstrap';
import { BookingCard } from './BookingCard';



export default function Buy() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const sortOptions = [
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  // const subCategories = [
  //   { name: 'Totes', href: '#' },
  //   { name: 'Backpacks', href: '#' },
  //   { name: 'Travel Bags', href: '#' },
  //   { name: 'Hip Bags', href: '#' },
  //   { name: 'Laptop Sleeves', href: '#' },
  // ]
  const filters = [
    {
      id: 'Year',
      name: 'Year',
      options: [
        { value: 'First', label: 'First', checked: false },
        { value: 'Second', label: 'Second', checked: false },
        { value: 'Third', label: 'Third', checked: false },
        { value: 'Fourth', label: 'Fourth', checked: false },
      ],
    },
    {
      id: 'Department',
      name: 'Department',
      options: [
        { value: 'ECS', label: 'ECS', checked: false },
        { value: 'AIDS', label: 'AIDS', checked: false },
        { value: 'Mechanical', label: 'Mechanical', checked: false },
        { value: 'Computers', label: 'Computers', checked: false },
       
      ],
    },
    {
      id: 'Semester',
      name: 'Semester',
      options: [
        { value: '1', label: '1', checked: false },
        { value: '2', label: '2', checked: false },
        { value: '3', label: '3', checked: false },
        { value: '4', label: '4', checked: false },
        { value: '5', label: '5', checked: false },
        { value: '6', label: '6', checked: false },
        { value: '7', label: '7', checked: false },
        { value: '8', label: '8', checked: false },
      ],
    },
  ]
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const location = useLocation();
  

    useEffect(() => {
      document.title = 'All Books';
      if (location.pathname === '/buy') {
        if (token) {
          getAllBooks();
        } else {
          // If token is not present, show an alert asking the user to log in
          alert('Please Login To Get Start Buying');
          navigate('/LogIn');
        }
      }
    }, [token, location.pathname]);

     const getAllBooks = () => {
           axios.get(`${baseurl}/bookstore/books`,
           {
             headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json', 
             }
           }
           ).then(
             (response) => {
               //Success
               console.log('In BookList console');
               console.log(response);
               setBooks(response.data);
             } ,
             (error) => {
               //For Error
               console.log(error);
             }
           )
 
     }


     const removeBkById = (id) => {
      setBooks( books.filter ( (b) => b.id!=id ));
    }



    const [books , setBooks] = useState([
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        
    ])
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
  
      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
    
              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-50% max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 flex  items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
    
                    {/* Filters */}
                    <form className="mt-0 border-t border-gray-200 max-w-s">
                      <h3 className="sr-only">Categories</h3>
    
                      {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">{section.name}</span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                      <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
         
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-5 pt-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Start Buying</h1>
    
              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
    
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                  active ? 'bg-gray-100' : '',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
    
                <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
    
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
    
              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* Filters */}
                <form className="hidden lg:block max-w-xs">
                  <h3 className="sr-only">Categories</h3>
    
                  {filters.map((section) => (
                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="w-full flex items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">{section.name}</span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                  <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div key={option.value} className="flex items-center">
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
    
                {/* Product grid */}
                {/* <div className="lg:col-span-3">
                  <div className="container">
                    <div className="row justify-content-center">
                      {books.map((book) => (
                        <div className="col-md-4 my-5 mx-1" key={book.id}>
                          <BookingCard book={book} update={removeBkById} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
<div className="lg:col-span-3">
  <div className="container">
    <div className="row justify-content-center">
      {books.map((book) => (
        <div className="col-md-4 my-5 mx-10" key={book.id}> {/* Reduced left margin */}
          <BookingCard book={book} update={removeBkById} />
        </div>
      ))}
    </div>
  </div>
</div>


              </div>
            </section>
          </main>
        </div>
      </div>
    );
    
}

