import Swal from 'sweetalert2'
import Helper from '../actions/Helper'
import { get } from 'http'
import { getTTFB } from 'web-vitals'
import { lutimes, stat } from 'fs'

interface Iprops {
    storeData: Array<String>
    flag: boolean
}

const defaultStore = {
    storeData: [],
    flag: false,

}




const appReducer = (state: Iprops = defaultStore, action: any) => {


    switch (action.type) {

        case 'ADD_DATA':
            return (
                {
                    ...state
                }
            )

        case 'View_Data':
                    console.log("i m reducer : " , typeof(action.data))
                    return (
                    {
                       ...state,
                       storeData : action.data,
                       flag : action.flag
                    }
                )
    



      

            return (
                {
                    ...state,
               
                }
            )







        default:
            return state
    }


}



export default appReducer;