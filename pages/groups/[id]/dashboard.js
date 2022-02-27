import { GroupLayout } from "@components";

const Dashboard = () => {
    return(
        <GroupLayout variant="full">
            <div className="flex flex-col px-10 h-full">
                <div className="flex flex-row justify-between items-center mb-10">
                    <h1>Dashboard</h1>
                    <div class="btn-group">
                        <button class="btn btn-outline btn-active">Board</button>
                        <button class="btn btn-outline">Button 1</button>
                        <button class="btn btn-outline">Button 2</button>
                    </div>
                </div>
                <div className="w-full grow p-5 bg-base-200">
                    {/* hola */}
                </div>
            </div>
        </GroupLayout>
    )
}

export default Dashboard;