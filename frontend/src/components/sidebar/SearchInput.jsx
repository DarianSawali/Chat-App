import React from 'react'
import { IoSearch } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className='flex gap-2 items-start'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-purple-500 text-white hover:bg-transparent flex items-center justify-center'>
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
