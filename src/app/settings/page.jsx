import React from 'react'
import Dashboard from '../../../components/Dashboard/Dashboard'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

const Settings = () => {
    return (
        <Dashboard>
            <div>
                <div className="text-indigo-950 text-[32px] font-bold">Settings</div>

                <div className="text-black text-lg font-bold mt-8 mb-6">Email notifications</div>

                <div className='flex flex-col gap-8'>

                    <SwitchSetting heading='Weekly newsletter' text='A small text about what the newsletters might contain.' />

                    <SwitchSetting heading='Account summary' text='A small text about what the newsletters might contain.' />
                </div>

                <div className="text-black text-lg font-bold  mt-12 mb-6">Website notifications</div>

                <div className='flex flex-col gap-4'>

                    <CheckboxSetting title="New Follower" labelText='follower' />
                    <CheckboxSetting title="Post like" labelText='post' />
                    <CheckboxSetting title="Someone you followed posted" labelText='test' />
                    <CheckboxSetting title="Post added to collection" labelText='dddd' />
                    <CheckboxSetting title="Post downloaded" labelText='sddsf' />
                </div>
                <div className='w-[30%] flex gap-4 | mt-8'>

                    <Button className="bg-[#202142] hover:bg-[#141531] w-[186px]" size="lg">Save Changes</Button>
                    <Button variant="outline"  size="lg" className="text-indigo-950 text-base font-medium | w-[186px] | flex  justify-center">
                        Cancel
                    </Button>
                </div>

            </div>
        </Dashboard>
    )
}

export default Settings


const SwitchSetting = ({ heading = "Weekly newsletter", text = "Default text" }) => {
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


const CheckboxSetting = ({ labelText = "", title = "Default text" }) => {
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