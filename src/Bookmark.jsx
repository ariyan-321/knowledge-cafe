export default function Bookmark({bookmark}){
    const {title}=bookmark
    return(
        <div className="bg-gray-400 p-2 rounded-xl m-2 my-5">
            <h1 className="font-extrabold text-2xl">{title}</h1>
        </div>
    )
}