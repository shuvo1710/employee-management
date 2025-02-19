import React from 'react';

const Dashboard = () => {
    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">No. of Employee</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-users text-blue-500 text-xl" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Present</span>
                            <div className="text-900 font-medium text-xl">100</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-verified text-orange-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Late</span>
                            <div className="text-900 font-medium text-xl">20</div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-clock text-cyan-500 text-xl" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Missed</span>
                            <div className="text-900 font-medium text-xl">32 </div>
                        </div>
                        <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                            <i className="pi pi-user-minus text-purple-500 text-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
