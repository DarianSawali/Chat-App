import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TbMessages } from "react-icons/tb";
import useConversation from '../../store/useConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(() =>{
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[32rem] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected /> ) : (
        <>
        {/* Header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>   
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  const {authUser} = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex items-center text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex-col gap-2'>
        <p>Welcome!👋 {authUser.fullName}</p>
        <p>Select a chat to start messaging</p>
        <TbMessages className='text-3xl md:text-6x1 text-center'/>
      </div>
    </div>
  )
}
// export default NoChatSelected



// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[32rem] flex flex-col'>
//       <>
//       {/* Header */}
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//           <span className='label-text'>To:</span>{" "}
//           <span className='text-gray-900 font-bold'>Jonathan Doe</span>
//         </div>
//         <Messages />
//         </>
//       <MessageInput />
//     </div>
//   )
// }

// export default MessageContainer
