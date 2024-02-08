import axios from 'axios'
import { json } from 'node:stream/consumers';
import { useDispatch } from 'react-redux';
import Holder from '../actions/Holder'
import { error } from 'console';
// fetch(url)
//                         .then(response => response.json()).catch((error)=>{
//                                 console.log("i m inside the catch part...")
//                                 Holder.setData([])
//                         }).then((data) => {
//                                 console.log("hello i m inside the correct part..")
//                                 Holder.setData(data)})
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
                            
                case 'onchange_Data':

                        
                        

                        console.log('i m inside the onchange..')
                        const url = 'https://api.github.com/search/users';
                        return fetch(`${url}?q=${data}+in:login&page=1&per_page=10`)
                        .then((res : any) => res.json())
                        .then((data: any) => {
                                console.log("i m inside the data : " ,data.total_count
                                )
                                if(data.total_count == 0)
                                {
                                        Holder.setData([])
                                        
                                }
                                else
                                {
                                        Holder.setData(["1"])
                                       
                                }
                               
                        });

                       


                default:
                return
        }


}