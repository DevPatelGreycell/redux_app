import { CornerDownLeft } from "lucide-react";
import Helper from "./Helper";
import Holder from "./Holder";
import { setInterval } from "timers";

export const adddata = (data: any, flag: any) => {

  
      
    let check = false 
    if (flag == "onchange_Data") {

        
        const promise = new Promise((res , rej)=>{

            let d = ""
            let count = 0
            let getId = setInterval(callFn , 100)

            function callFn()
            {
               
            }
        })
        const res = JSON.stringify(Helper(flag, data))
        setTimeout(() => {
            console.log("response : " , res , Holder.giveData().length)    
        }, 100);
        
        check = true
        if (Holder.giveData().length == 0) {
            return (
                {
                    type: 'ADD_DATA',
                    res : false,
                    check
                }
            )
        }
        else {
            console.log("hello .." , res);
            return (
                {
                    type: 'ADD_DATA',
                    res : true,
                    check
                }
            )
        }
    }
    else {
        const res = JSON.stringify(Helper(flag, data))
        console.log("i m inside the action part : ", data, res);
        return (
            {
                type: 'ADD_DATA',
                res,
                check
            }
        )
    }


}