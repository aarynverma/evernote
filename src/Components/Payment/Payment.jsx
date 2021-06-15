import basic from '../../Assets/basic-simple.svg';
import premium from '../../Assets/premium-simple.svg';
import business from '../../Assets/business-simple.svg';
import {Button} from '../../Components/Button/Button';

export default function propsment({props}) {
    return(
            
            <div className={props === 'premium' ? "border-2 px-4 py-8 rounded-xl border-green-500 transform hover:scale-110 transition duration-300 ease-in-out" : "border-2 px-4 py-8 rounded-xl border-gray-500 transform hover:scale-110 transition duration-300 ease-in-out"}>
                {/* <img src={premium} alt="" /> */}
                <div className={props==='business' ? "w-16 flex" : "flex"}>
                    <img src={props === 'basic' ? basic : props === 'premium' ? premium : props=== 'business' ? business : "no image"} alt="" />
                    <p className="text-2xl font-semibold text-gray-500">{props === 'basic' ? "Basic" : props === 'premium' ? "Premium" : props=== 'business' ? "Business" : "no title"}</p>
                </div>
                
                    <div className="flex text-5xl font-semibold mt-2 items-baseline">
                        <p>{props === 'basic' ? "Free" : props === 'premium' ? "₹190.00 " : props === 'business' ? "₹500.00" : ''}</p>
                        <p className="text-xs">{props === 'premium' ? "/ MONTH " : props === 'business' ? "/USER/MONTH" : ''}</p>
                    </div>
                
                <div>
                    <div className="text-sm font-semibold tracking-widest mt-4">
                        <p>{props === 'basic' ? "TAKE GREAT NOTES." : props === 'premium' ? "BE MORE PRODUCTIVE. " : props === 'business' ? "COLLABORATE ACROSS YOUR COMPANY." : ''}</p>
                    </div>
                </div>
                
                <div className="list-none mt-5">
                    <li className=" tracking-wide">
                        {props === 'basic' ? "Sync up to 2 devices" : props === 'premium' ? "Everything in Basic " : props === 'business' ? "Everything in Premium" : ''}
                    </li>
                    <li className="mt-2 tracking-wide">
                        {props === 'basic' ? "Find notes fast with search and tags" : props === 'premium' ? "Sync unlimited devices" : props === 'business' ? "Work together in shared spaces" : ''}
                    </li>    
                    <li className="mt-2 tracking-wide">
                        {props === 'basic' ? "Apply rich formatting to your notes" : props === 'premium' ? "Access notes offline" : props === 'business' ? "See your team’s activity history" : ''}
                    </li>            
                    <li className="mt-2 tracking-wide">
                        {props === 'basic' ? "Clip web pages" : props === 'premium' ? "Annotate PDFs" : props === 'business' ? "Centralize account administration" : ''}
                    </li>                     
                    <li className="mt-2 tracking-wide">
                        {props === 'basic' ? "25MB maximum note size" : props === 'premium' ? "Search text inside Office docs and PDFs" : props === 'business' ? "Log in fast with single sign-on (SSO)" : ''}
                    </li>                 
                    <li className="mt-2 tracking-wide">
                        {props === 'basic' ? "60MB monthly upload limit" : props === 'premium' ? "Create custom templates" : props === 'business' ? "Business data ownership" : ''}
                    </li>                      
                    <li className="mt-2 tracking-wide">
                        {props === 'premium' ? "Customize your Home" : props === 'business' ? "20GB monthly upload limit + 2GB/user" : ''}
                    </li>              
                    <li className="mt-2 tracking-wide">
                        {props === 'premium' ? "200MB maximum note size" : ''}
                    </li>                      
                    <li className="mt-2 tracking-wide">
                        {props === 'premium' ? "10GB monthly upload limit" : ''}
                    </li>                      
                </div>
                {/* <Button>{props==='basic'? 'basic' : props === 'premium' ? 'premium' : props === 'business' ? 'business' : ''}</Button> */}
                <div>
                    <div className="mt-5">
                        {props=== 'basic' ? [<Button props='basic'/>] : props === 'premium' ? [<Button props='premium'/>] : props === 'business' ? [<Button props='business'/>] : ''}
                    </div>
                </div>
                
            </div>
            
       
    )
}