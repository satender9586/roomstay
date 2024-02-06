import { Button } from '@/components/ui/button'
import Dashboard from '../../../components/Dashboard/Dashboard'
import CustomSwitch from '../../../components/Tools/CustomSwitch'
import CustomCheckbox from '../../../components/Tools/CustomCheckbox'

const Settings = () => {
    return (
        <Dashboard>
            <div>
                <div className="text-indigo-950 text-[32px] font-bold">Settings</div>

                <div className="text-black text-lg font-bold mt-8 mb-6">Email notifications</div>

                <div className='flex flex-col gap-8'>

                    <CustomSwitch heading='Weekly newsletter' text='A small text about what the newsletters might contain.' />

                    <CustomSwitch heading='Account summary' text='A small text about what the newsletters might contain.' />
                </div>

                <div className="text-black text-lg font-bold  mt-12 mb-6">Website notifications</div>

                <div className='flex flex-col gap-4'>

                    <CustomCheckbox title="New Follower" labelText='follower' />
                    <CustomCheckbox title="Post like" labelText='post' />
                    <CustomCheckbox title="Someone you followed posted" labelText='test' />
                    <CustomCheckbox title="Post added to collection" labelText='dddd' />
                    <CustomCheckbox title="Post downloaded" labelText='sddsf' />
                </div>
                <div className='w-[30%] flex gap-4 | mt-8'>

                    <Button className="bg-[#202142] hover:bg-[#141531] w-[186px]" size="lg">Save Changes</Button>
                    <Button variant="outline" size="lg" className="text-indigo-950 text-base font-medium | w-[186px] | flex  justify-center">
                        Cancel
                    </Button>
                </div>

            </div>
        </Dashboard>
    )
}

export default Settings




