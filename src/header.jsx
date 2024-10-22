import profileImage from './assets/images/profile.png';
export default function Header (){
    return(
        <div className='flex justify-between pt-2 items-center border-b-2 pb-2'>
            <h1 className='font-extrabold text-3xl'>knowledge Cafe</h1>
            <img src={profileImage} alt="Profile" />
            
        </div>
    )
}