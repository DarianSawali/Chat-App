import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../store/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import toast from 'react-hot-toast';


const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be atleast 3 characters long")
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found");
  }

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 items-start'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-circle border-transparent bg-purple-900 text-white hover:bg-transparent hover:border-white flex items-center justify-center'>
            <IoSearch className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput



// import React from 'react'
// import { IoSearch } from "react-icons/io5";


// const SearchInput = () => {
//   return (
//     <form className='flex gap-2 items-start'>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
//         <button type='submit' className='btn btn-circle bg-purple-500 text-white hover:bg-transparent flex items-center justify-center'>
//             <IoSearch className='w-6 h-6 outline-none'/>
//         </button>
//     </form>
//   )
// }

// export default SearchInput
