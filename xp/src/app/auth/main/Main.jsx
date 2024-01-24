import React from 'react'

const Main = () => {
  return (
    <div className='Parent_page w-full h-screen flex justify-between'>

{/* monitor============= */}
<div className='w-[65%] h-screen  bg-slate-100 z-10 absolute inset-0 '>
     
     <div className="screen w-[75%] h-[75vh] mt-3  bg-slate-200 left-0 right-0 mx-auto relative">

        <div className="inner_screen w-[85%] h-[80%] bg-black  overflow-hidden  inset-0 absolute m-auto">
<img className='w-full h-full' src="https://th.bing.com/th/id/R.68a4691802bad230f8d37e9d3fa9120d?rik=N7ZvEfmZhbbxkg&riu=http%3a%2f%2fi.imgur.com%2fOpajz6Y.gif&ehk=GUXWTUAweECqCoaBKHmc6sVSoEK%2fiAozXJTGcqmqwHc%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>

     </div>
    
        <div className=' w-[12%] h-[15vh] mx-auto z-50   bg-slate-200 stand_vertical '></div>
    

<div className="btm_stand w-[40%] h-[15vh] absolute bg-slate-200 bottom-0  left-0 right-0 z-0 mx-auto">
    <div className="inner_btm_stand w-[50%] h-[5vh] absolute  inset-0 m-auto"></div>
</div>



</div>
{/* cpu-============== */}

<div className='w-[35%] h-screen border  bg-slate-400'>

</div>




    </div>
  )
}

export default Main