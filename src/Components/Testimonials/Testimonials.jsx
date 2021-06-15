import { useEffect, useState } from "react";
import Quotes from "../../Assets/homepage-quote.svg"
import Data from '../data/data.json';
export default function Testimonials() {    
    // const newData = Data.map((Data) => {return (
    //  <div>{Data.class==="Testimonials" ? Data.heading : ''}
     
    //  <p>{Data.class==="Testimonials" ? Data.name : ''}</p>
    
    //  </div>
    // )})
    
    let arr = Data.filter(function(item)
        {
        return item.class === "Testimonials"
        }
    )
    // console.log(arr[0].heading)
    const [item, setitem] = useState(0);
    
    const corosal= () => {
       
        console.log(arr[item].heading)
        setTimeout(() => {
            corosal()
        }, 1000);
      
        return (
            <p>{arr[item].heading}</p>
            )
    }

    useEffect(()=> {
        corosal()
        setitem(item+1)
    }, [])
    return(
        <div className="flex flex-col justify-center">
            <img src={Quotes} alt="" className="w-8" />
           <div> {corosal()} </div>
            {/* {data = <div>{Data.class==="Testimonials" ? Data.heading : ''}</div>} */}
        </div>
    )
}