import React, { useState } from 'react';

function Registration() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target; 
    
        setFormData({
            ...formData,  
            [name]: value 
        });
    

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", 
        }));
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData.firstname.trim()) {
            validationErrors.firstname = "First name is required";
            
        }
        if (!formData.lastname.trim()) {
            validationErrors.lastname = "Last name is required";
        }
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email is not valid";
        }

        if (!formData.password.trim()) {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password should be at least 6 characters";
        }

        if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Registration successful!");
            console.log(formData)
            
        }
       
      
    };

    return (
        <div className="h-full bg-gray-400 dark:bg-gray-900 bg-[url('https://wallpaperaccess.com/full/3979500.jpg')] bg-cover ">
            <div className="mx-auto px-10 py-10 ">
                <div className="flex justify-center px-40 py-25  ">
                    <div className="w-full xl:w-/4 lg:w-11/12 flex justify-center ">
                        <div className="w-full lg:w-7/12 bg-transparent dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none ">
                            <h3 className="py-4 text-3xl text-center font-bold text-yellow-500 dark:text-white hover:underline">
                                Create an Account!
                            </h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-transparent dark:bg-gray-800 rounded " onSubmit={handleSubmit}>
                                <div className="mb-4 md:flex md:justify-between ">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-white" htmlFor="firstname">
                                            First Name 
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-white hover:text-red-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={handleChange}
                                          
                                            
                                        />
                                        {errors.firstname && <div className="text-red-500">{errors.firstname}</div>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-white" htmlFor="lastname">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 text-sm leading-tight text-white dark:text-white hover:text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            placeholder="Last Name "
                                            onChange={handleChange}
                                            value={formData.lastname}
                                        />
                                        {errors.lastname && <div className="text-red-500">{errors.lastname}</div>}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-white dark:text-white" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white dark:text-white hover:text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="text"
                                        placeholder="Email"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                                </div>
                                <div className="mb-4 md:flex md:justify-between">
                                    <div className="mb-4 md:mr-2 md:mb-0">
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-white" htmlFor="password">
                                            Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white dark:text-white hover:text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="******************"
                                            onChange={handleChange}
                                            value={formData.password}
                                        />
                                        {errors.password && <div className="text-red-500">{errors.password}</div>}
                                    </div>
                                    <div className="md:ml-2">
                                        <label className="block mb-2 text-sm font-bold text-white dark:text-white" htmlFor="confirmPassword">
                                            Confirm Password
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white dark:text-white hover:text-red-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type="password"
                                            placeholder="******************"
                                            onChange={handleChange}
                                            value={formData.confirmPassword}
                                        />
                                        {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword}</div>}
                                    </div>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 duration-200 focus:outline-none hover:underline  focus:shadow-outline"
                                        type="submit"
                                    >
                                        Register Account
                                    </button>
                                </div>
                                
                               
                              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;
