import React from "react";
function Cards({username,btn,link}){
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
    <img
      src="https://media.licdn.com/dms/image/D5635AQFZd-R3aNwryw/profile-framedphoto-shrink_400_400/0/1717337646179?e=1718434800&v=beta&t=WXDS6KBJwBTrgJWdJW9e8qJJy_t1QY6a06QYNkMEYXA"
      alt="AirMax Pro"
      class="z-0 h-full w-full rounded-md object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
      <h1 class="text-lg font-semibold text-white">{username}</h1>
      <p class="mt-2 text-sm text-gray-300">
        Hi ! 
        I am Aditya Kumar Pal. Btech CSE Graduate from Lovely Professional University. To know more about me please click on the link given below!
      </p>
      <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
       <a href={link} >{btn} →</a> 
      </button>
    </div>
  </div>
  )
}
export default Cards