import Bookmark from "./Bookmark"
export default function Bookmarks({bookmarks,timeRead}){
    return(
        <div className="bg-gray-200 rounded-xl m-5">
            
            <div className="bg-blue-600 p-2 m-2 rounded-xl">
                <h1 className="text-2xl font-extrabold">Time Read:{timeRead}</h1>
            </div>
            {
                bookmarks.map((bookmark,i)=> <Bookmark key={i} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}