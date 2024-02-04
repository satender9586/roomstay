import SideBar from '../Sidebar/Sidebar'

const Dashboard = ({children}) => {
    return (
        <div className="w-full h-full | flex | rounded-[32px] shadow">
            <SideBar />
            <div className='flex-1 | pl-16 pt-10 | max-w-[1400px]'>
                {children}
            </div>
        </div>
    )
}

export default Dashboard

