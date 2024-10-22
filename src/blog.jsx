import { FaBookmark } from "react-icons/fa";
export default function Blog({ blog ,handleAddToBookmarks,handleMarkAsRead}) {
    const {id,image,author_name,author_image,post_date,title,reading_time,hashtags}=blog
    return (
      <div className="border-2 shadow-xl rounded-xl space-y-5 p-3 my-5">
        <img className="w-[90%] mx-auto rounded-xl" src={image} alt="" />
       <div className="flex justify-around items-center">
       <div className="flex gap-2 items-center">
            <img className="w-[50px] rounded-full object-cover" src={author_image} alt="" />
            <div>
                <h1>{author_name}</h1>
                <p>{post_date}</p>
            </div>
            
        </div>

        <p>{reading_time} min read</p>
        <button onClick={()=>handleAddToBookmarks(blog)}> <FaBookmark /></button>

       </div>
       
       <h1 className="text-4xl font-extrabold pb-3">{title}</h1>
       {
        hashtags.map(hashtag=> <span className="px-3">#{hashtag}</span>)
       }
        <br />
        <button onClick={()=> handleMarkAsRead(reading_time,id)} className="font-bold text-blue-700">mark as read</button>
      </div>
    );
  }
  