import Data from '../data/data.json';
export default function Herocontent() {
    // const data = JSON.parse('../data/data.json');
    const newData = (Data.hero).map((data) => {return (
        <div className="text-justify pr-10 ml-0">
            <h3 className="text-xl font-bold leading-10">{data.topic}</h3>
            <p className="text-base font-medium leading-7">{data.content}</p>
        </div>
    )})
    return(
        <>
        <div>
            {newData}
        </div>
        </>
    )
}