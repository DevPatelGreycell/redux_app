import axios from 'axios'
import { json } from 'node:stream/consumers';
import { useDispatch } from 'react-redux';
import Holder from '../actions/Holder'

export default function Helper(req: any , data : any) {

        switch (req) {
                case 'view_data':
                        console.log("hello i m inside the view_data")
                        const baseURL = "http://localhost:3030/users";
                        return fetch(baseURL)
                                .then(response => response.json()).then(data => Holder.setData(data))


                case 'add_data':
                        return fetch("http://localhost:3030/users", {
                                method: 'POST',
                                headers: {
                                   'Content-Type': 'application/json',
                                },
                                body:JSON.stringify(data) 
                            }).then(response => response.json()).then(data => data )
                            


                default:
                return
        }


}