import React from 'react'
import { Checkbox } from '@/components/ui/checkbox'

const CustomCheckbox = ({ labelText = "", title = "Default text", name = "", value = "", handleChange }) => {

    return (
        <div className='flex items-center gap-4'>

            <Checkbox id={labelText} checked={value} onCheckedChange={(value)=>handleChange({name,value})} />
            <label
                htmlFor={labelText}
                className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
            >
                {title}
            </label>
        </div>
    )
}

export default CustomCheckbox