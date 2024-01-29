import axios from 'axios'
import { json } from 'node:stream/consumers';
import { useDispatch } from 'react-redux';
import Holder from '../actions/Holder'

export default function Helper()
{
   
        
        const baseURL = "http://localhost:3030/users";
        return fetch(baseURL)
        .then(response => response.json()).then(data => Holder.setData(data))
       
         
}