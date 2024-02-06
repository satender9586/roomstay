import React from 'react'
import Input from '../../../components/Tools/Input'
import TextArea from '../../../components/Tools/TextArea'
import Dashboard from '../../../components/Dashboard/Dashboard'

const Profile = () => {
    return (
        <Dashboard>
            <div>

                <div className='text-xl font-semibold'>
                    Public Profile
                </div>

                <div className='flex flex-col gap-4 mt-4'>


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

                <div className='mt-8 | text-xl font-semibold'>
                    Company website
                </div>
                <div className='mt-4'>
                    <Input placeholder="Enter your email" />
                </div>

            </div>
        </Dashboard>
    )
}

export default Profile



