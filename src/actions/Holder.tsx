export default class Holder{

    static state ={
        data: []
    }


    static setData = (data : any)=>{
        console.log("i m inside the setter method: " , data)
        this.state.data = data
    }

    static giveData = ()=>{
        console.log("hello i m inside the giveData",this.giveData)
        return this.state.data
    }


}