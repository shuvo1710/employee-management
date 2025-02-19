import React from 'react';

const EmployeeUpdate = ({params}: { params: { id: number } }) => {
    const {id}= params

    console.log("id", id);

    return (
        <div>

        </div>
    );
};

export default EmployeeUpdate;
