import React from 'react'
import { Switch } from '@/components/ui/switch'

const CustomSwitch = ({ heading = "Weekly newsletter", text = "Default text" }) => {
    return (
        <div className='flex w-[60%]'>
            <div className='flex-[0.8] flex flex-col gap-2'>
                <div className="text-black text-lg font-semibold">{heading}</div>
                <div className="w-[60%] text-black text-md font-normal ">{text}</div>
            </div>

            <div className='flex-[0.2] flex'>
                <div className='pt-6'>
                    <Switch id="airplane-mode" />
                </div>

            </div>
        </div>
    )
}

export default CustomSwitch