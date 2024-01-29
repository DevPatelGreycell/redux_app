import { useDispatch } from 'react-redux'
import Helper from '../actions/Helper'
import Holder from '../actions/Holder'


export const getMeTheData = (mail: any, pass: any) => {

    const data = Holder.giveData();
    console.log(mail , pass);
    console.log("getMetheData: ", data)
    let flag = false;
    let id = undefined;
    for (var i = 0; i < data.length; i++) {
        if(data[i]["email"] == mail && data[i]["password"] == pass)
        {
            console.log("i m inside the if : ");
            flag = true
            id= data[i]["id"]
            break;
        }
        else
        {
            console.log("hello i m inside the else..")
            flag = false
        }
    }


    // console.log("hello action bhidu : :", data);
    return (
        
        {
            type: 'View_Data',
            data,
            flag,
            id
        }
    )
};