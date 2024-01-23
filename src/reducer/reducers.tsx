import { stat, statSync } from "fs"
import { act } from "react-dom/test-utils"
import { isSwitchStatement } from "typescript"

interface Iprops  {
    storeData : Array<String>
}

const defaultStore ={
    storeData : [],
}

const appReducer = (state:Iprops = defaultStore , action : any)=>{

    
   
    
    switch(action.type)
    {

        case 'ADD_DATA':
            
            return{
                ...state,
                storeData : [...state.storeData , action.data],
            };
          
        default :
        return state
    }

    
}

export default appReducer;