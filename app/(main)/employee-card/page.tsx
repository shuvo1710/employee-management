'use client';
import React, { useEffect, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import { useRouter } from 'next/navigation';
import { Button } from 'primereact/button';

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
            <PageHeading
                title="Employee Card"
                isCreate={true}
                createFunction={() => {
                    router.push('/employee/create');
                }}
            />

            <div className="mt-5">
                <div className="grid">
                    <div className="col-12">
                        <div className="grid ">
                            {employeeInfo.map((item: any, i: number) => {
                                return (
                                    <div className="md:col-4 col-12" key={i}>
                                        <div className="card h-full">
                                            <div className="flex flex-column md:flex-row justify-content-between gap-3 md:gap-0 align-items-center md:align-items-start">
                                                <div className="md:h-10rem h-full md:w-10rem w-full">
                                                    <img src={item?.image} alt={'employee image'} className="h-full w-full rounder border-round" />
                                                </div>
                                                <div>
                                                    <Button icon="pi pi-pencil" aria-label="Update" onClick={() => router.push(`/employee/update/${item?.id}`)} />
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                <div className=" p-0">
                                                    {/*<p className="col-3 text-lg font-medium m-0">Name:</p>*/}
                                                    <p className=" text-md font-medium  flex gap-3">
                                                        <span>
                                                            <i className="pi pi-user"></i>
                                                        </span>
                                                        <span>{item?.name}</span>
                                                    </p>

                                                    <p className=" text-md font-medium flex gap-3">
                                                        <span>
                                                            <i className="pi pi-envelope"></i>
                                                        </span>
                                                        <span>{item?.email}</span>
                                                    </p>

                                                    <p className=" text-md font-medium  flex gap-3">
                                                        <span>
                                                            <i className="pi pi-phone"></i>
                                                        </span>
                                                        <span>{item?.phone}</span>
                                                    </p>

                                                    <p className=" text-md font-medium  flex gap-3">
                                                        <span>
                                                            <i className="pi pi-building"></i>
                                                        </span>
                                                        <span>{item?.department.name}</span>
                                                    </p>

                                                    <p className=" text-md font-medium flex gap-3">
                                                        <span>
                                                            <i className="pi pi-map-marker"></i>
                                                        </span>
                                                        <span>{item?.address}</span>
                                                    </p>
                                                </div>

                                                {/*<div className="grid col-12 p-0">*/}
                                                {/*    <p className="col-3 text-lg font-medium m-0">Name:</p>*/}
                                                {/*    <p className="col-9 text-lg font-medium m-0">{item?.name}</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="grid col-12 p-0">*/}
                                                {/*    <p className="col-3 text-lg font-medium m-0">Email:</p>*/}
                                                {/*    <p className="col-9 text-lg font-medium m-0">{item?.email}</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="grid col-12 p-0">*/}
                                                {/*    <p className="col-3 text-lg font-medium m-0">Phone:</p>*/}
                                                {/*    <p className="col-9 text-lg font-medium m-0">{item?.phone}</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="grid col-12 p-0">*/}
                                                {/*    <p className="col-3 text-lg font-medium m-0">Department:</p>*/}
                                                {/*    <p className="col-9 text-lg font-medium m-0">{item?.department?.name}</p>*/}
                                                {/*</div>*/}
                                                {/*<div className="grid col-12 p-0">*/}
                                                {/*    <p className="col-3 text-lg font-medium m-0">Address:</p>*/}
                                                {/*    <p className="col-9 text-lg font-medium m-0">{item?.address}</p>*/}
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
