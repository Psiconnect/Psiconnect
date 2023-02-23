import store from '../app/store';
import { setLoading } from './gobalSlice';


export async function loading(){
   store.dispatch(setLoading())
    return
}