import { useState } from "react";
const Form = () =>{
    const [user,setUser]=useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            phoneNumber:"",
            password:"",
        }
    );
    const handleChange=(e)=>
    {
        const{name,value}=e.target;
        setUser((prev)=>({...prev,[name]:value}));
    };
    const handleSubmit=(event)=>
    {
        event.preventDefault();
       
        console.log(user);
    };

    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form 
          className="bg-white p-8 rounded-lg shadow-md max-w-md w-full space-y-3" 
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
          <p className="text-sm text-gray-600 text-center mb-4">Please fill in this form to create an account.</p>
          <div>
            <p className="font-bold">FirstName</p>
            <input
              type="text"
              name="firstName"
              placeholder="Enter firstName"
              value={user.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <p className="font-bold">LastName</p>
            <input
              type="text"
              name="lastName"
              placeholder="Enter lastName"
              value={user.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
          <p className="font-bold">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
          <p className="font-bold">PhoneNumber</p>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              value={user.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
           <p className="font-bold">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={user.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
  
          <p className="text-xs text-gray-500 mt-4 text-center">
            By creating an account you agree to our <a href="#" className="text-blue-400">Terms & Privacy</a>
          </p>
        </form>
      </div>
    );
};
export default Form;