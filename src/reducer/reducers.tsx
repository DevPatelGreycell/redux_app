import Swal from 'sweetalert2'
import Helper from '../actions/Helper'
import { get } from 'http'
import { getTTFB } from 'web-vitals'
import { lutimes, stat } from 'fs'
import debounceHolder from '../actions/debounceHolder'

interface Iprops {
    storeData: Array<String>
    flag: boolean,
    id : any,
    res : any
}

const defaultStore = {
    storeData: [],
    flag: false,
    id :"",
    res : undefined
}




const appReducer = (state: Iprops = defaultStore, action: any) => {


    switch (action.type) {

        case 'ADD_DATA':
            // const data = debounceHolder.getData()
            

            return (
                {
                    ...state,
                    res : (action.check)?action.res:action.res
                }
            )

        case 'View_Data':
                    console.log("i m reducer : " , typeof(action.data) , action.id , action.flag)
                    return (
                    {
                       ...state,
                       storeData : action.data,
                       flag : action.flag,
                       id : JSON.stringify(action.id)
                       
                    }
                )
    
        default:
            return state
    }
    
}



export default appReducer;