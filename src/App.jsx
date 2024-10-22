import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './header';
import Blogs from './blogs';
import Bookmarks from './bookmarks';
import { useState } from 'react';

function App() {
  const[bookmarks,setBookmarks]=useState([]);

  const[timeRead,setTime]=useState(0);

  const handleMarkAsRead=(time,id)=>{
    setTime(timeRead+time)
    const remainingBookmarks=bookmarks.filter(bookmark=> bookmark.id!==id)
    setBookmarks(remainingBookmarks)
  }


  const handleAddToBookmarks=(blog)=>{
    const newBookMarks=[...bookmarks,blog];
    setBookmarks(newBookMarks)
  }

  return (
    <>
      <Header />
      <div className='w-[90%] mx-auto mt-5 grid lg:grid-cols-3'>
      
      <div className=' lg:col-span-2'>
      <Blogs  handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} />
      </div>
    <Bookmarks bookmarks={bookmarks} timeRead={timeRead}></Bookmarks>
      </div>
    </>
  );
}

export default App;
