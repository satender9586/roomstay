
const Input = ({ label = "", placeholder = "Default" }) => {
    return (
        <div className='w-full'>
            {
                label && (
                    <label className="pl-2 text-neutral-500 text-[13px] font-semibold capitalize leading-tight tracking-wide w-full" >
                        {label}
                    </label>
                )
            }

            <input type="text" placeholder={placeholder} className='border border-neutral-300 rounded-lg py-5 px-4 w-full focus:border-blue-400 focus:outline-none capitalize text-sm' />
        </div>
    )
}



export default Input