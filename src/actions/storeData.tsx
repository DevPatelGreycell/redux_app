export default class saveDetails {

    static state = {
        data : ""
    }

    static setData = (data  :any)=>{

        this.state.data = data
    }

    static getData = ()=>{
        setTimeout(() => {
            return this.state.data    
        }, 500);
        
    }

}