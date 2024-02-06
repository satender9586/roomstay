import React from 'react'

const TextArea = ({ label = "Default", placeholder = "" }) => {
    return (
        <div>
            <label className="pl-2 text-neutral-500 text-[13px] font-semibold capitalize leading-tight tracking-wide w-full" >
                {label}
            </label>
            <textarea maxLength={400} rows={4} placeholder={placeholder} className='resize-none  bg-white border text-sm border-neutral-300 rounded-lg py-5 px-4 w-full focus:border-blue-400 focus:outline-none capitalize'></textarea>
        </div>
    )
}

export default TextArea