import React from 'react'
import useConversation from '../../store/useConversation'
import { useSocketContext } from '../../context/SocketContext';


const Conversation = ({conversation, lastIndex, emoji}) => {
  const {selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
        <div className={`flex gap-2 items-center rounded p-2 py-2 cursor-pointer hover:bg-purple-900
            ${isSelected ? "bg-purple-900" : ""}
          `}
          onClick={() => setSelectedConversation(conversation)}
        >
          <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className='w-12 rounded-full'>
              <img src= {conversation.profilePic} alt="user avatar" />
            </div>
          </div>
          <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
              <p className='font-bold text-gray-200'>{conversation.fullName}</p>
              <span className='text-xl'>{emoji}</span>
            </div>
          </div>
        </div>

        {!lastIndex && <div className='divider my-0 py-0 h-1' />}
        
        
    </>
  )
}

export default Conversation



// const Conversation = () => {
//   return (
//     <>
//         <div className='flex gap-2 items-center rounded p-2 py-1 cursor-pointer'>
//           <div className='avatar online'>
//             <div className='w-12 rounded-full'>
//               <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" />
//             </div>
//           </div>
//           <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//               <p className='font-bold text-gray-200'>Jonathan Doe</p>
//               <span className='text-xl'>😊</span>
//             </div>
//           </div>
//         </div>

//         <div className='divider my-0 py-0 h-1'></div>
        
//     </>
//   )
// }

// export default Conversation
