import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation';
import { extractTime } from '../../utils/extractTime.js';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-purple-900' : '';
  const shakeClass = message.shouldShake ? "shake" : ""



  return (
    <div className={`chat py-2 ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-8 rounded-full'>
                <img 
                    src={profilePic} 
                    alt="Tailwind bubble chat bubble icon" />
            </div>
        </div>
        <div className={`chat-bubble text-white pb-3 ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center pt-1'>{formattedTime}</div>
    </div>
  )
}

export default Message


// const Message = () => {
//     return (
//       <div className='chat chat-end'>
//           <div className='chat-image avatar'>
//               <div className='w-8 rounded-full'>
//                   <img 
//                       src={"https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} 
//                       alt="Tailwind bubble chat bubble icon" />
//               </div>
//           </div>
//           <div className='chat-bubble text-white bg-blue-500'>Hi! What's up?</div>
//           <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
//       </div>
//     )
//   }
  
//   export default Message
