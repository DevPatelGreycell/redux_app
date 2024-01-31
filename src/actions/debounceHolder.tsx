import { time } from "console"
import { isThisTypeNode } from "typescript"

export default class debounceHolder{
    
    static state = {
        data : {},
        flag : false
    }

    static setData = (data : any)=>{
        this.state.data = data
        console.log(this.state.data)

    }

    static getData = ()=>{
            return this.state.data                                  
        }
    }
