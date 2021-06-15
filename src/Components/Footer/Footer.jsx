import {Button} from '../../Components/Button/Button';
import Logo from '../../Assets/primary.svg';
import Data from '../data/data.json';

export default function Footer(props) {
    const newData = (Data.footer).map((data) => {return (
        <div className="flex flex-col">
        <Button props="compare"/>
        <img src={Logo} alt="" className="w-40"/>
        <div className="border-4"></div>
            <div className="flex">
                <div className={props === "head" ? "font-semibold" : "list-none"}>
                    <li className={props === "head" ? "font-bold" : ''}>{data.content}</li>
                    <li>Why Evernote</li>
                    <li>Evernote Basic</li>
                    <li>Evernote Premium</li>
                    <li>Evernote Business</li>
                    <li>Compare Plans</li>
                    <li>Student Discount</li>
                    <li>Download App</li>
                </div>
                <div className="list-none">
                    <li className={props === "head"}>FEATURES</li>
                    <li>Web Clipper</li>
                    <li>Templates</li>
                    <li>Spaces</li>
                    <li>Integrations</li>
                    <li>Notes Sync</li>
                    <li>PDF & Doc Search</li>
                    <li>Search Handwriting</li>
                    <li>Document Scanning</li>
                    <li>Notebooks & Tags</li>
                    <li>Tasks</li>
                </div>
                <div className="list-none">
                    <li className={props === "head"}>COMMUNITY</li>
                    <li>Our Community</li>
                    <li>Certified Consultants</li>
                    <li>Beta Program</li>
                    <li>Developers</li>
                    <li>Forum</li>
                </div>
                <div className="list-none">
                    <li className={props === "head"}>SUPPORT</li>
                    <li>Help & Learning</li>
                    <li>Troubleshooting</li>
                    <li>Blog</li>
                </div>
                <div className="list-none">
                    <li className={props === "head"}>COMPANY</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </div>
            </div>
        </div>
    )
    })
    return (
        <div>
        {newData}
        </div>
    )
}