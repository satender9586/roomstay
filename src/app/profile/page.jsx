"use client"
import React, { useState } from 'react'
import Input from '../../../components/Tools/Input'
import TextArea from '../../../components/Tools/TextArea'
import Dashboard from '../../../components/Dashboard/Dashboard'
import { Button } from '@/components/ui/button'

const Profile = () => {
    const [activeTab, setActiveTab] = useState(0)

    const handleTabs = (tabNo = 0) => {
        setActiveTab(tabNo)
    }

    return (
        <Dashboard>
            <div>

                <div className="text-indigo-950 text-[32px] font-bold">Account Settings</div>

                <div class="bg-white mt-4">
                    <nav class="flex flex-col sm:flex-row">
                        <button class={`text-gray-600 py-4 px-12 block hover:text-blue-500 focus:outline-none ${activeTab === 0 && "text-blue-500  border-blue-500"} border-b-2 font-medium0`} onClick={() => handleTabs(0)}>
                            Profile
                        </button>
                        <button class={`text-gray-600 py-4 px-12 block hover:text-blue-500 focus:outline-none ${activeTab === 1 && "text-blue-500  border-blue-500"} border-b-2 font-medium0`} onClick={() => handleTabs(1)}>
                            Privacy
                        </button>


                    </nav>
                </div>



                {
                    activeTab === 0 && (
                        <ProfileSettings />
                    )
                }



                {
                    activeTab === 1 && (
                        <PrivacySettings />
                    )
                }





            </div>
        </Dashboard>
    )
}

export default Profile

const ProfileSettings = () => {
    return (
        <div className='mt-8 flex flex-col gap-4 w-[700px]'>
            <div className="text-black text-lg font-bold">Profile</div>

            <div className='flex justify-between'>
                <div className='flex-[0.48]'>
                    <Input placeholder="Enter first name" label="First Name" />
                </div>
                <div className='flex-[0.48]'>
                    <Input placeholder="Enter last name" label="Last Name" />
                </div>
            </div>

            <Input placeholder="Enter your email" label="Email" />

            <TextArea label='Bio' placeholder="Something about yourself" />

            <div className="text-black text-lg font-bold mt-2 ">Personal Website</div>


            <div className='mt-2'>
                <Input placeholder="Enter your email" />
            </div>
            <div className='mt-4'>
                <Button className="bg-[#202142] hover:bg-[#141531] w-[150px] py-1" size="lg">Save</Button>
            </div>

        </div>
    )
}


const PrivacySettings = () => {
    return (
        <div className='mt-8 w-[700px] flex flex-col'>
            <div className='flex'>
                <div className='flex-[0.9] flex flex-col gap-2'>
                    <div className="text-black text-lg font-semibold">Email Address</div>
                    <div className="w-[60%] text-black text-md font-normal ">Your email address is {" "}
                        <span className='font-bold'>
                            emailis@private.com
                        </span>
                    </div>

                </div>

                <div className='flex-[0.1] flex items-end'>
                    <Button variant="link">Change</Button>

                </div>
            </div>

            <div className='mt-8 flex flex-col gap-2'>
                <div className='flex'>
                    <div className='flex-[0.9] flex flex-col gap-2'>
                        <div className="text-black text-lg font-semibold">Password</div>
                    </div>

                    <div className='flex-[0.1] flex items-end'>
                        <Button variant="link">Hide</Button>
                    </div>


                </div>

                <div>
                    <div className='flex justify-between'>
                        <div className='flex-[0.48]'>
                            <Input placeholder="Enter new Password" label="New Password" />
                        </div>
                        <div className='flex-[0.48]'>
                            <Input placeholder="Enter confirm Password" label="Confirm Password" />
                        </div>
                    </div>
                </div>

            </div>

            <div className=" text-black text-md font-normal mt-8">Can’t remember your current password?
                <Button variant="link">
                    Reset your password
                </Button>
            </div>

            <div className='mt-6'>
                <Button className="bg-[#202142] hover:bg-[#141531] w-[186px] py-1" size="lg">Save Password</Button>
            </div>
            <div className='flex flex-col gap-6 mt-8'>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <div className="text-black text-lg font-semibold">Delete account</div>
                    <div className='text-black text-md font-normal'>
                        Would you like to delete your account?
                        This account contains 1388 posts. Deleting your account will remove all the content associated with it.
                    </div>
                </div>
                <Button variant="destructive" className=" w-[186px] py-1" size="lg">Delete Account</Button>

            </div>

        </div>
    )
}



