import React, { useEffect, useState } from "react"
import { ArrowRight, ConstructionIcon, CornerDownLeft } from 'lucide-react'
import { connect } from "react-redux"
import Helper from '../src/actions/Helper'
import { getMeTheData } from '../src/actions/LoginAction'
import { get } from "http"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"
import { flattenDiagnosticMessageText } from "typescript"

function LoginPage(props: any) {

    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("hello i m inside the Login Refresh")
        Helper('view_data',"")
}, [])
    
    return (

        <section>
            <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
                <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                    <h2 className="text-2xl font-bold leading-tight text-blackflex">Sign in to your account for Todo</h2>
                    <form action="#" method="POST" className="mt-8">
                        <div className="space-y-5">
                            <div>
                                <label htmlFor="" className="text-base font-medium text-gray-900">
                                    {' '}
                                    Email address{' '}
                                </label>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="email"
                                        placeholder="Email"
                                        onChange={(e: any) => {
                                            setMail(e.target.value)
                                        }}
                                    ></input>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Password{' '}
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e: any) => {
                                            setPass(e.target.value)
                                        }}
                                    >
                                    </input>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    onClick={
                                        () => {
                                            console.log('helo')
                                            props.checkthedata(mail , pass);

                                            if(props.flag)
                                            {
                                                navigate(`../Profile/${props.id}`)
                                            }
                                        }
                                    }
                                >
                                    Get started <ArrowRight className="ml-2" size={16} />
                                </button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </section>

    )
}

const saveDataProp = (dispatch: any) => {

    return (
        {
            checkthedata: (mail: any, pass: any) => dispatch(getMeTheData(mail, pass))
        }
    )
}



const getTheData = (state: any) => {

    console.log(typeof state.reducers.storeData)
    // console.log(state.reducers.id)
    const getdata  = Boolean(state.reducers.flag);
   
    console.log("hellooo i m inside the getthedata: " , getdata);
    return (
        {
            flag :  Boolean(state.reducers.flag),
            id : state.reducers.id
        }
    )
}


export default connect(getTheData, saveDataProp)(LoginPage);