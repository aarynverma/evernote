import Integer from '../../Assets/integrations.svg';
import doc from '../../Assets/doc-scanning.svg';
import web from '../../Assets/web-clipping.svg';
import rich from '../../Assets/rich_notes.svg';
import feature from '../../Assets/feature_integration.png';
import fscan from '../../Assets/feature_document_scanning__en.png';
import fweb from '../../Assets/feature_web_clipper__en.png';
import fmobile from '../../Assets/feature_mobile__en.png';
import {Button} from '../Button/Button';

export default function Card({props}) {
    return(
        // <div className="flex items-center">
            <div className={props=== 'carda' ? "flex items-center justify-between" : props=== 'cardb' ? "flex flex-row-reverse items-center items-end justify-between mt-10 ml-14" :props=== 'cardc' ? "flex items-center justify-between" : props=== 'cardd' ? "flex flex-row-reverse items-center items-end justify-between mt-14 ml-14" : 'no' }>
                <div className={props=== 'carda' ? " mx-10 pr-64 " :  props=== 'cardb' ? "mx-14" : 'no' }>
                {/*  mr-36 */}
                    <img src={props === 'carda' ? Integer : props === 'cardb' ? doc : props === 'cardc' ? web : props === 'cardd' ? rich : ''} alt="" />
                    <p className="text-4xl font-medium">{props=== 'carda' ? 'App integrations' : props === 'cardb' ? 'Document scanning' : props === 'cardc' ? 'Web Clipper' : props === 'cardd' ? 'Rich notes' : 'no data'}</p>
                    <p className="text-2xl mt-5">{
                        props=== 'carda' ? 'Share content across apps. Evernote connects with the productivity tools you already use, so you can work your way.' :
                        props=== 'cardc' ? 'Save web pages (without the ads) and mark them up with arrows, highlights, and text to make them more useful.':
                        ''
                        }
                    </p>
                    <p className="text-2xl mt-5">{
                        props=== 'cardb' ? 'Go paperless. Back up important documents to all your devices, and keep the information—not the clutter.' :
                        props=== 'cardd' ? 'Express ideas, capture images, and record audio in meetings or lectures, all from your phone or tablet—even if you’re offline.' :
                        ''
                        }
                    </p>
                    <p className="text-green-500 text-l mt-5"><Button props='learn'/></p>
                </div>
                <img src={props === 'carda' ? feature : props === 'cardb' ? fscan : props === 'cardc' ? fweb : props === 'cardd' ? fmobile : ''} className="w-2/5 mr-14" alt="" />
            </div>
    )
}