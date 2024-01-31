import adddata from './action'
export default class saveDetails {

    static state = {
        data : ""
    }

    static setData = (data  :any)=>{

        this.state.data = data
    }

    static getData = ()=>{
        setTimeout(() => {
            adddata(this.state.data , "onchange_Data")    
        }, 100);
        
    }

}