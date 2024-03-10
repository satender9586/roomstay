
const Input = ({ label = "", ...props }) => {
    return (
        <div className='w-full space-y-2'>
            {
                label && (
                    <label className="pl-2 text-neutral-500 text-[13px] font-semibold capitalize leading-tight tracking-wide w-full" >
                        {label}
                    </label>
                )
            }

            <input type="text" className='border border-neutral-300 rounded-lg py-4 px-4 w-full focus:border-blue-400 focus:outline-none capitalize text-sm' {...props} />
        </div>
    )
}



export default Input