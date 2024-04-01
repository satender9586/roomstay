import React from 'react'

const TextArea = ({ label = "", ...props }) => {
    return (
        <div>
            {
                label && (
                    <label className="pl-2 text-neutral-500 text-[13px] font-semibold capitalize leading-tight tracking-wide w-full" >
                        {label}
                    </label>
                )
            }
            <textarea maxLength={400} className='resize-none  bg-white border text-sm border-neutral-300 rounded-lg py-5 px-4 w-full focus:border-blue-400 focus:outline-none capitalize' {...props} />
        </div>
    )
}

export default TextArea