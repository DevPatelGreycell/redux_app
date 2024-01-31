import React, { useEffect, useState } from "react";
import { AlertTriangle, ArrowRight, GalleryHorizontal, Router } from 'lucide-react'
import { connect } from "react-redux";
import { adddata } from "../src/actions/action";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import saveDetails from '../src/actions/storeData'
import { isPropertySignature } from "typescript";


function SignUp(props: any) {

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const [cnt, setCnt] = useState(0);
  const [color, setColor] = useState("flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50")
  const [className, setClassName] = useState('');


  let colorhelo = "flex h-10 w-full rounded-md border border-grey-800 bg-transparent px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
  useEffect(() => {
    if (cnt == 0) {
      console.log("first refresh")

    }
    else {
      if (props.data) {

        console.log("i m inside the red part.....")
        setColor("flex h-10 w-full rounded-md border border-red-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50")
      }
      else {

        console.log("hello i m inside the green part..")
        setColor("flex h-10 w-full rounded-md border border-green-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-green-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50")
      }
    }
    setCnt((cnt: any) => {
      return cnt + 1
    })
  }, [props.state])


  const saveData = () => {

    // console.log("length of the list : " , JSON.parse(props.data).length  + 1);
    const SignUpDetails = {
      fullName: fullName,
      email: email,
      password: password
    }

    props.addData(SignUpDetails, "add_data")

    alert(`just see the changes :   ${props.data}`)
    setTimeout(() => {
      navigate("../LoginPage")
    }, 100);


  }
  return (
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
                  UserName{' '}
                </label>
                <div className="mt-2">
                  <input
                    className={color}
                    style={{ borderColor: "2px solid red" }}
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    onChange={(e: any) => {
                      setFullName(e.target.value)
                      props.addData(e.target.value, "onchange_Data")

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

                    onChange={(e: any) => {
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
                    onChange={(e: any) => {
                      setPassword(e.target.value)
                    }}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  onClick={() => {
                    if (color == "green" || color == "grey") {
                      saveData()
                    }
                    else {
                      alert("username is alredy there..")
                    }

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

const getstateDetails = (state: any) => {

  console.log("panch minute  ", typeof state.reducers.res, state.reducers.res)

  return (
    {
      state: state.reducers,
      data: state.reducers.res
    }
  )

}


const saveDataToState = (dispatch: any) => {

  return (
    {
      addData: (data: any, flag: any) => {
        saveDetails.setData(data)
        console.log("my flag is: ", flag)
        dispatch(adddata(data, flag));
      }
    }
  )


}

export default connect(getstateDetails, saveDataToState)(SignUp);