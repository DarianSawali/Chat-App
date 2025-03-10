import React from 'react';

const GenderBox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer text-gray-300 ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='label-text'>Male</span>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange('male')}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer text-gray-300 ${selectedGender === 'female' ? 'selected' : ''}`}>
                    <span className='label-text'>Female</span>
                    <input
                        type='checkbox'
                        className='checkbox checkbox-primary'
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange('female')}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderBox;


// const GenderBox = () => {
//     return (
//       <div className='flex'>
//           <div className='form-control'>
//               <label className='label gap-2 cursor-pointer'>
//                   <span className='label-text'>Male</span>
//                   <input type="checkbox" className='checkbox checkbox-primary'/>
//               </label>
//           </div>
//           <div>
//           <div className='form-control'>
//               <label className='label gap-2 cursor-pointer'>
//                   <span className='label-text'>Female</span>
//                   <input type="checkbox" className='checkbox checkbox-primary'/>
//               </label>
//           </div>
//           </div>
//       </div>
//     )
//   }