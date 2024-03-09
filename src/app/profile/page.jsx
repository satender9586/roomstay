"use client"
import React, { useState } from 'react'
import Input from '../../../components/Tools/Input'
import TextArea from '../../../components/Tools/TextArea'
import DashboardContainer from '../../../components/Dashboard/DashboardContainer'
import { Button } from '@/components/ui/button'
import { accountDeleteApi } from '../../../api/roomApi'
import WarningModal from '../../../components/Modals/WarningModal'
import { useRouter } from 'next/navigation'

const Profile = () => {
    const [activeTab, setActiveTab] = useState(0)
    const [profileForm, setProfileForm] = useState({ firstName: "", lastName: "", website: "", bio: "" })
    const [privacyForm, setPrivacyForm] = useState({ password: "", confirmPassword: "" })

    const handleProfileValue = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setProfileForm({ ...profileForm, [name]: value })
    }

    const handlePrivacyValue = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setPrivacyForm({ ...privacyForm, [name]: value })
    }

    const handleTabs = (tabNo = 0) => {
        setActiveTab(tabNo)
    }

    return (
        <DashboardContainer>
            <div>

                <div className="text-indigo-950 text-[32px] font-bold">Account Settings</div>

                <div className="bg-white mt-4">
                    <nav className="flex flex-col sm:flex-row">
                        <button className={`text-gray-600 py-4 px-12 block hover:text-blue-500 focus:outline-none ${activeTab === 0 && "text-blue-500  border-blue-500"} border-b-2 font-medium0`} onClick={() => handleTabs(0)}>
                            Profile
                        </button>
                        <button className={`text-gray-600 py-4 px-12 block hover:text-blue-500 focus:outline-none ${activeTab === 1 && "text-blue-500  border-blue-500"} border-b-2 font-medium0`} onClick={() => handleTabs(1)}>
                            Privacy
                        </button>


                    </nav>
                </div>



                {
                    activeTab === 0 && (
                        <ProfileSettings form={profileForm} handleChange={handleProfileValue} />
                    )
                }



                {
                    activeTab === 1 && (
                        <PrivacySettings form={privacyForm} handleChange={handlePrivacyValue} />
                    )
                }





            </div>
        </DashboardContainer>
    )
}

export default Profile

const ProfileSettings = ({ form, handleChange }) => {
    return (
        <div className='mt-8 flex flex-col gap-4 w-[700px]'>
            <div className="text-black text-lg font-bold">Profile</div>

            <div className='flex justify-between'>

                <div className='flex-[0.48]'>
                    <Input value={form?.firstName} onChange={(value) => { handleChange(value) }} name="firstName" placeholder="Enter first name" label="First Name" />
                </div>

                <div className='flex-[0.48]'>
                    <Input value={form?.lastName} onChange={(value) => { handleChange(value) }} name="lastName" placeholder="Enter last name" label="Last Name" />
                </div>

            </div>

            <Input value={form?.website} onChange={(value) => { handleChange(value) }} name="website" placeholder="Enter your email" label="Personal Website" />

            <TextArea value={form?.lastName} onChange={(value) => { handleChange(value) }} name="lastName" label='Bio' rows={5} placeholder="Something about yourself" />

            <div className='mt-4'>
                <Button className="bg-[#202142] hover:bg-[#141531] w-[150px] py-1" size="lg">Save</Button>
            </div>

            {/* <div className="text-black text-lg font-bold mt-2 ">Personal Website</div>
            <div className='mt-2'>
                <Input placeholder="Enter your email" />
            </div> */}




        </div>
    )
}


const PrivacySettings = ({ form, handleChange }) => {
    const router=useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const [showDeleteModal,setDeleteModal]=useState(false)

    const handleDeleteAccount=async()=>{
        try{
            const response=await accountDeleteApi()
            if(response?.success)
            {
                router.push('/')
            }
        }catch(error)
        {
            console.log(error)
        }
    }

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
                    <Button variant="link" className="text-gray-300">Change</Button>

                </div>
            </div>

            <WarningModal show={showDeleteModal} buttonName='Delete' title='Permanent Delete Account' description='Are you sure you want to delete your account permanently?' handleSuccess={handleDeleteAccount}/>

            {
                showPassword && (
                    <div className='mt-8 flex flex-col gap-2'>
                        <div className='flex'>
                            <div className='flex-[0.9] flex flex-col gap-2'>
                                <div className="text-black text-lg font-semibold">Password</div>
                            </div>

                            <div className='flex-[0.1] flex items-end'>
                                <Button variant="link" onClick={() => setShowPassword(false)}>Hide</Button>
                            </div>


                        </div>

                        <div>
                            <div className='flex justify-between'>
                                <div className='flex-[0.48]'>
                                    <Input value={form?.password} onChange={(value) => { handleChange(value) }} name="password" placeholder="Enter new Password" label="New Password" />
                                </div>
                                <div className='flex-[0.48]'>
                                    <Input value={form?.confirmPassword} onChange={(value) => { handleChange(value) }} name="confirmPassword" placeholder="Enter confirm Password" label="Confirm Password" />
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }

            {
                !showPassword && (
                    <div className=" text-black text-md font-normal mt-8">Can’t remember your current password?
                        <Button variant="link" onClick={() => setShowPassword(true)}>
                            Reset your password
                        </Button>
                    </div>
                )
            }

            {
                showPassword && (
                    <div className='mt-6'>
                        <Button disabled={form?.password?.length < 5 || form?.confirmPassword?.length < 5} className="bg-[#202142] hover:bg-[#141531] w-[186px] py-1 disabled:bg-gray-200" size="lg">Save Password</Button>
                    </div>
                )
            }



            <div className='flex flex-col gap-6 mt-8'>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <div className="text-black text-lg font-semibold">Delete account</div>
                    <div className='text-black text-md font-normal'>
                        Would you like to delete your account?
                        This account contains 1388 posts. Deleting your account will remove all the content associated with it.
                    </div>
                </div>
                <Button onClick={()=>setDeleteModal(true)} variant="destructive" className=" w-[186px] py-1" size="lg">Delete Account</Button>

            </div>

        </div>
    )
}



