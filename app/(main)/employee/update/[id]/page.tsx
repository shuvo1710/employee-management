import React from 'react';
import CommonPage from '@/app/(main)/employee/CommonPage/CommonPage';

const EmployeeUpdate = ({ params }: { params: { id: number } }) => {
    const { id } = params;
    return (
        <div>
            <CommonPage id={id} />
        </div>
    );
};

export default EmployeeUpdate;
