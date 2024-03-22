"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Input from '../../../components/Tools/Input'
import TextArea from '../../../components/Tools/TextArea'
import DashboardContainer from '../../../components/Dashboard/DashboardContainer'
import { Button } from '@/components/ui/button'
import { accountDeleteApi } from '../../../api/roomApi'
import WarningModal from '../../../components/Modals/WarningModal'
import { getProfile, updatePassword } from '../../../api/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { clearAllCookies } from '../../../utils/cookies'
import { clearUserSlice } from '../../../redux/reducers/userSlice'

const Profile = () => {
    const userRedux = useSelector(state => state?.user)
    const [activeTab, setActiveTab] = useState(0)
    const [profileForm, setProfileForm] = useState({ firstName: "", lastName: "", website: "", bio: "", email: "" })


    const handleProfileValue = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setProfileForm({ ...profileForm, [name]: value })
    }



    const handleTabs = (tabNo = 0) => {
        setActiveTab(tabNo)
    }


    const fetchUser = async () => {
        const obj = {
            firstName: userRedux?.firstName,
            lastName: userRedux?.lastName,
            website: userRedux?.website || "",
            bio: userRedux?.bio || "",
            email: userRedux?.email || ""
        }

        setProfileForm(obj)
    }

    useEffect(() => {
        fetchUser()
    }, [userRedux?.firstName])

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
                        <PrivacySettings email={profileForm?.email} />
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
                    <Input value={form?.firstName} disabled onChange={(value) => { handleChange(value) }} name="firstName" placeholder="Enter first name" label="First Name" />
                </div>

                <div className='flex-[0.48]'>
                    <Input value={form?.lastName} disabled onChange={(value) => { handleChange(value) }} name="lastName" placeholder="Enter last name" label="Last Name" />
                </div>

            </div>

            <Input value={form?.website} disabled onChange={(value) => { handleChange(value) }} name="website" placeholder="Enter your email" label="Personal Website" />

            <TextArea value={form?.bio} disabled onChange={(value) => { handleChange(value) }} name="lastName" label='Bio' rows={5} placeholder="Something about yourself" />

            <div className='mt-4'>
                <Button disabled className="bg-[#202142] hover:bg-[#141531] w-[150px] py-1" size="lg">Save</Button>
            </div>

            {/* <div className="text-black text-lg font-bold mt-2 ">Personal Website</div>
            <div className='mt-2'>
                <Input placeholder="Enter your email" />
            </div> */}




        </div>
    )
}


const PrivacySettings = ({ email }) => {
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(false)
    const dispatch = useDispatch()
    const [privacyForm, setPrivacyForm] = useState({ oldPassword: "", newPassword: "", confirmPassword: "" })

    const handleFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setPrivacyForm({ ...privacyForm, [name]: value })
    }

    const clearPrivacyForm = () => {
        setPrivacyForm({ oldPassword: "", newPassword: "", confirmPassword: "" })
    }

    const handleUpdatePassword = async () => {
        if (privacyForm?.newPassword !== privacyForm?.confirmPassword || !privacyForm?.oldPassword) {
            return;
        }

        try {
            const apiData = {
                oldPassword: privacyForm?.oldPassword,
                newPassword: privacyForm?.newPassword,
                confirmPassword: privacyForm?.confirmPassword
            }
            const response = await updatePassword(apiData)
            if (response?.success) {
                clearPrivacyForm()
                setShowPassword(false)
            }
        } catch (error) {
            console.log(error)
        }

    }

    const handleDeleteAccount = async () => {
        try {
            const response = await accountDeleteApi()
            if (response?.success) {
                clearAllCookies()
                dispatch(clearUserSlice())
                router.push("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='mt-8 w-[800px] flex flex-col'>
            <div className='flex'>
                <div className='flex-[0.9] flex flex-col gap-2'>
                    <div className="text-black text-lg font-semibold">Email Address</div>
                    <div className="w-[60%] text-black text-md font-normal ">Your email address is {" "}
                        <span className='font-semibold text-slate-800'>
                            {email}
                        </span>
                    </div>

                </div>

                <div className='flex-[0.1] flex items-end'>
                    <Button variant="link" className="text-gray-300">Change</Button>

                </div>
            </div>



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

                        <div className='space-y-6'>

                            <div className='flex justify-between'>
                                <div className='flex-1'>
                                    <Input value={privacyForm?.oldPassword} onChange={(value) => { handleFormChange(value) }} name="oldPassword" placeholder="Enter new Password" label="Old Password" />
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex-[0.48]'>
                                    <Input value={privacyForm?.newPassword} onChange={(value) => { handleFormChange(value) }} name="newPassword" placeholder="Enter new Password" label="New Password" />
                                </div>
                                <div className='flex-[0.48]'>
                                    <Input value={privacyForm?.confirmPassword} onChange={(value) => { handleFormChange(value) }} name="confirmPassword" placeholder="Enter confirm Password" label="Confirm Password" />
                                </div>
                            </div>

                        </div>

                    </div>
                )
            }

            {
                !showPassword && (
                    <div className=" text-black text-md font-normal mt-6">Can’t remember your current password?
                        <Button variant="link" onClick={() => setShowPassword(true)}>
                            Reset your password
                        </Button>
                    </div>
                )
            }

            {
                showPassword && (
                    <div className='mt-6'>
                        <Button disabled={privacyForm?.newPassword?.length < 5 || privacyForm?.confirmPassword?.length < 5} className="bg-[#202142] hover:bg-[#141531] w-[186px] py-1 disabled:bg-gray-200" size="lg" onClick={handleUpdatePassword}>Save Password</Button>
                    </div>
                )
            }



            <div className='flex flex-col gap-6 mt-12'>

                <div className='flex flex-col gap-2 w-[70%]'>
                    <div className="text-black text-xl font-semibold">Delete account</div>
                    <div className='text-black text-md font-normal'>
                        Would you like to delete your account?
                        This account contains 1388 posts. Deleting your account will remove all the content associated with it.
                    </div>
                </div>

                <WarningModal buttonName='Delete' title='Permanent Delete Account' description='Are you sure you want to delete your account permanently?' handleSuccess={handleDeleteAccount}>
                    <Button variant="destructive" className=" w-[186px] py-1" size="lg">Delete Account</Button>
                </WarningModal>

            </div>

        </div>
    )
}



