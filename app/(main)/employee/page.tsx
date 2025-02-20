'use client';
import React, { useEffect, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import { useRouter } from 'next/navigation';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

const Employees = () => {
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

    return (
        <div className={'card'}>
            <PageHeading
                title={'Employees'}
                isCreate={true}
                createFunction={() => {
                    router.push('/employee/create');
                }}
            />

            <div>
                <DataTable
                    value={employeeInfo}
                    dataKey="id"
                    className="datatable-responsive myTable"
                    emptyMessage="No employee found."
                    // rowHover={true}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator={employeeInfo.length}
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column
                        header={'Name'}
                        body={(data: any) => {
                            const { name, image, id } = data;
                            return (
                                <div className="flex gap-2 align-items-center" onClick={() => router.push(`/products/update/${id}`)}>
                                    {image ? (
                                        <div className="w-4rem h-4rem">
                                            <img src={image} alt={'Product Image'} className={'border-round-lg h-full w-full'} />
                                        </div>
                                    ) : (
                                        <Avatar icon="pi pi-box" size="xlarge" shape={'square'} />
                                    )}
                                    <p className="white-space-nowrap font-medium hover:text-primary ">{name}</p>
                                </div>
                            );
                        }}
                    ></Column>
                    <Column field="email" headerClassName={'white-space-nowrap'} header={'email'}></Column>
                    <Column field="phone" headerClassName={'white-space-nowrap'} header={'phone'}></Column>
                    <Column
                        header={'Action'}
                        headerClassName={'flex justify-content-end w-full'}
                        body={(data) => {
                            const {id} = data
                            return (
                                <div className={`flex gap-2 align-items-center h-full  justify-content-end`}>
                                    <Button
                                        type="button" tooltip={'Edit'}
                                        tooltipOptions={{ position: 'top' }}
                                        icon="pi pi-pencil" className="h-2rem w-2rem mr-2"
                                        onClick={() => {
                                            router.push(`/employee/update/${id}`)
                                        }}
                                    >
                                    </Button>
                                    <Button type="button" tooltip="Delete"
                                            tooltipOptions={{ position: 'top' }}
                                            icon="pi pi-trash" severity="danger"
                                            className="h-2rem w-2rem mr-2"
                                            onClick={() => {
                                                const filerData = employeeInfo.filter((item: any) => item.id !== id);
                                                console.log("filerData", filerData);
                                                setEmployeeInfo(filerData)
                                                localStorage.setItem('employeeData', JSON.stringify(filerData))


                                            }}
                                    >
                                    </Button>
                                </div>
                            );
                        }}
                    ></Column>
                </DataTable>
            </div>
        </div>
    );
};

export default Employees;
