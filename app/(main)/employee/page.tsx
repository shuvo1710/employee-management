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
    const [employeeData, setEmployeeData] = useState([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getEmployeeData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`http://localhost:3500/employeeData`, {
                    method: 'GET'
                });
                if (res.ok && res.status !== 204) {
                    const resData = await res.json();
                    console.log('resData', resData);
                    setEmployeeData(resData);
                    // setCountryList(resData?.data)
                }
            } catch (error) {
                console.log('error', error);
            } finally {
                setLoading(false);
            }
        };
        getEmployeeData().then();
    }, []);



    return (
        <div className={'card'}>
            {/*<p>employee data</p>*/}

            <PageHeading
                title={'Employees'}
                isCreate={true}
                createFunction={() => {
                    router.push('/employee/create');
                }}
            />

            <div>
                <DataTable
                    value={employeeData}
                    dataKey="id"
                    className="datatable-responsive myTable"
                    emptyMessage="No data found."
                    // rowHover={true}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    <Column
                        header={'Name'}
                        body={(data: any) => {
                            const { name, picture, id } = data;
                            return (
                                <div className="flex gap-2 align-items-center" onClick={() => router.push(`/products/update/${id}`)}>
                                    {picture ? (
                                        <div className="w-4rem h-4rem">
                                            <img src={picture} alt={'Product Image'} className={'border-round-lg h-full w-full'} />
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
                        headerClassName={"flex justify-content-end w-full"}
                        body={(data) => {
                            return (
                                <div className={`flex gap-2 align-items-center h-full  justify-content-end`}>
                                    <Button type="button" tooltip={'Edit'} tooltipOptions={{ position: 'top' }} icon="pi pi-pencil" className="h-2rem w-2rem mr-2" onClick={() => {}}></Button>
                                    <Button type="button" tooltip="Delete" tooltipOptions={{ position: 'top' }} icon="pi pi-trash" severity="danger" className="h-2rem w-2rem mr-2" onClick={(event) => {}}></Button>
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
