import SideBar from '../Sidebar/Sidebar'

const DashboardContainer = ({ children }) => {
    return (
        <div className="w-full h-[100dvh] | flex | rounded-[32px] shadow ">
            <SideBar />
            <div className='overflow-y-auto w-full'>
                <div className='flex-1 | pl-16 pt-10 | max-w-[1400px]'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardContainer

