import React, { useState } from "react";
import { ArrowRight, Router } from 'lucide-react'
import { connect } from "react-redux";
import {adddata}from "../src/actions/action"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function SignUp(props : any)
{

    const [fullName , setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    
    const saveData = ()=>{

    // console.log("length of the list : " , JSON.parse(props.data).length  + 1);
    const SignUpDetails ={
        fullName : fullName,
        email : email,
        password : password
    }

    props.addData(SignUpDetails)
    navigate("LoginPage")
  
    }
    return(
        <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up For Todo App
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{' '}
              <a
                href="#"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </a>
            </p>
            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="text-base font-medium text-gray-900">
                    {' '}
                    Full Name{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                      onChange={(e : any)=>{
                        setFullName(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                       
                      onChange={(e : any)=>{
                        setEmail(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base font-medium text-gray-900">
                      {' '}
                      Password{' '}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                      onChange={(e : any)=>{
                        setPassword(e.target.value)
                      }}
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                    onClick={()=>{
                        saveData()
                    }}
                 >
                    Create Account <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          
          </div>
        </div>
      </section>
    )

}

const getstateDetails = (state: any)=>{
    
    console.log("panch minute  ",state.reducers.flag)

    return (

        {
            data : state.reducers.flag
        }
    )

}


const saveDataToState = (dispatch : any)=>{

    return (
        {
            addData : (data : any) => { 
                dispatch(adddata(data));
            }
        }    
    )
    

}   

export default connect(getstateDetails,saveDataToState)(SignUp);