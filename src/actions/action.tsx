export const adddata = (data : any)=>{

    console.log("i m inside the action part : " , data);
    return(
        {
            type : 'ADD_DATA',
            data
        }
    )

}