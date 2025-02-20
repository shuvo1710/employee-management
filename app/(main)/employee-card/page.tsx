'use client';
import React, { useEffect, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    const [employeeInfo, setEmployeeInfo] = useState<any>([]);

    useEffect(() => {
        const employeeData = localStorage.getItem('employeeData');
        if (employeeData) {
            const data = JSON.parse(employeeData);
            setEmployeeInfo(data);
        } else {
            setEmployeeInfo([]);
        }
    }, []);

    console.log('employeeInfo', employeeInfo);

    return (
        <div className="card">
            <PageHeading title="Employee Card" isCreate={true} />

            <div className="mt-5">
                <div className='col-12'>

                </div>
            </div>
        </div>
    );
};

export default Page;
