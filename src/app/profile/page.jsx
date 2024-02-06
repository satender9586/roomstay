import React from 'react'
import Input from '../../../components/Tools/Input'
import TextArea from '../../../components/Tools/TextArea'
import Dashboard from '../../../components/Dashboard/Dashboard'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'

const Profile = () => {
    return (
        <Dashboard>
            <div>

                <div className="text-indigo-950 text-[32px] font-bold">Account</div>

                <div className="text-black text-lg font-bold mt-8 mb-6">Profile</div>

                <div className='flex flex-col gap-4 mt-4 w-[55%]'>


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

                </div>

                <div className="text-black text-lg font-bold mt-8 mb-6">Personal Website</div>

                <div className='mt-4 w-[55%]'>
                    <Input placeholder="Enter your email" />
                </div>


                <div className='my-16 w-[55%] flex flex-col gap-8'>
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

                    <div>


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

                    <div className=" text-black text-md font-normal ">Can’t remember your current password?
                        <Button variant="link">
                            Reset your password
                        </Button>
                    </div>

                    <div>
                        <Button className="bg-[#202142] hover:bg-[#141531] w-[186px] py-1" size="lg">Save Password</Button>
                    </div>

                    <div className='flex flex-col gap-4'>

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




            </div>
        </Dashboard>
    )
}

export default Profile



