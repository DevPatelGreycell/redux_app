import { Annoyed, CalendarCheck, CornerDownLeft, Rss } from "lucide-react";
import Helper from "./Helper";
import Holder from "./Holder";
import saveDetails from "./storeData"
import debounceHolder from "./debounceHolder"
import { setInterval } from "timers";
import { Extension, collapseTextChangeRangesAcrossMultipleVersions, getNameOfDeclaration } from "typescript";
import { domainToASCII } from "url";
import { wait } from "@testing-library/user-event/dist/utils";


export const adddata = (data: any, flag: any) => {


    // console.log("hello i m inside the addddata..")
    let catchdata = {}
    let catchflag = false
    let check = false
    let timeRef = 0
    if (flag == "onchange_Data") {

            setTimeout(()=>{
                catchflag = true
            } , 300)

            if(catchflag)
            {
                const res = JSON.stringify(Helper(flag,saveDetails.getData()))

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

       
        // const processChange = debounce(() => saveInput());
        // processChange()
        // console.log("i m inside he")
      
        // const pro = new Promise((resolve: any, rej: any) => {

        //     const timer = setTimeout(fn, 300)

        //     function fn() {
        //         const res = JSON.stringify(Helper(flag, data))
        //         resolve(res)
        //     }

        // })
        // pro.then((res: any) => {
        //     console.log("hello :::: ", Boolean(res), typeof res)
        //     check = true
        //     if (Holder.giveData().length == 0) {

        //         debounceHolder.setData({
        //             type: 'ADD_DATA',
        //             res: false,
        //             check
        //         },)

        //     }
        //     else {
        //         console.log("hello ..", res);
        //         debounceHolder.setData({
        //             type: 'ADD_DATA',
        //             res: true,
        //             check
        //         })

        //     }

        //     return (
        //         {
        //             type: 'ADD_DATA',
        //             res: true,
        //             check
        //         }
        //     )
        // })

        // const ans = debounceHolder.getData().then(([data, flag]: any) => {
        //     if (flag) {
        //         return data
        //     }
        //     else {
        //         // console.log("se")
        //     }
        // }).then((finaldata: any) => {
        //     console.log("i m inside the particluar finaldata porsion : ", finaldata);
        // })








        // debouncing(data , flag , check , timeRef).then((data : any)=>{
        //     return data
        // })

        // const res = JSON.stringify(Helper(flag, data))

        // check = true
        // if (Holder.giveData().length == 0) {
        //     return (
        //         {
        //             type: 'ADD_DATA',
        //             res : false,
        //             check
        //         }
        //     )
        // }
        // else {
        //     console.log("hello .." , res);
        //     return (
        //         {
        //             type: 'ADD_DATA',
        //             res : true,
        //             check
        //         }
        //     )
        // }

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

    function debounce(func : any, timeout: any= 300){
        let timer = timeout;
        return (...args : any) => {
            clearTimeout(timer);
            timer : timeout= setTimeout(
                () => { 
                    func.apply(args);
                }, timeout);
          };
    }

    function saveInput(){
        console.log("i m inside the particular saveInput..")
        const res = JSON.stringify(Helper(flag, data))

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


}
 


function debouncing(data: any, flag: any, check: any, timeRef: any) {
    console.log("hello i m inside");
    const finalData = data

    //  middle(data ,flag ,check ,timeRef ) 
    return new Promise((res, rej) => {
        setTimeout(() => {
            let output = middle(finalData, flag, check, timeRef)
            res(output)
        }, 500)
    })

    
}

function middle(finalData: any, flag: any, check: any, timeRef: any) {
    console.log("i m inside the middle : ", finalData, timeRef)
    // const output =callNow(finalData ,flag ,check ,timeRef )
    // return output
}

function callNow(data: any, flag: any, check: any, timeRef: any) {

    const res = JSON.stringify(Helper(flag, data))

    check = true
    if (Holder.giveData().length == 0) {
        return (
            {
                type: 'ADD_DATA',
                res: false,
                check
            }
        )
    }
    else {
        console.log("hello ..", res);
        return (
            {
                type: 'ADD_DATA',
                res: true,
                check
            }
        )
    }

}