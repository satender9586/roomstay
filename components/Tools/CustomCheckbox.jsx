import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'

const CustomCheckbox = ({ labelText = "", title = "Default text" }) => {
    return (
        <div className='flex items-center gap-4'>

            <Checkbox id={labelText} />
            <label
                htmlFor={labelText}
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {title}
            </label>
        </div>
    )
}

export default CustomCheckbox