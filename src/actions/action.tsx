import Helper from "./Helper";

export const adddata = (data : any)=>{

    const res = JSON.stringify(Helper("add_data",data))
    console.log("i m inside the action part : " , data,res);
    return(
        {
            type : 'ADD_DATA',
            res
        }
    )

}