'use client';
import React, { useEffect, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import { useRouter } from 'next/navigation';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FilterMatchMode } from 'primereact/api';

interface Department {
    name: string;
    value: string;
}

const departments: Department[] = [
    { name: 'Network Administration', value: 'Network Administration' },
    { name: 'System Administration', value: 'System Administration' },
    { name: 'Software Development', value: 'Software Development' },
    { name: 'Cybersecurity', value: 'Cybersecurity' }
];

const Employees = () => {
    const router = useRouter();
    const [employeeInfo, setEmployeeInfo] = useState<any>([]);
    const [filters, setFilters] = useState({
        name: { value: '', matchMode: FilterMatchMode.CONTAINS },
        'department.name': { value: null, matchMode: FilterMatchMode.EQUALS },
    });

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
        <div className="card">
            <PageHeading
                title="Employees"
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
                    filterDisplay="row"
                    filters={filters}
                    onFilter={(e:any) => setFilters(e.filters)}
                    tableStyle={{ minWidth: '50rem' }}
                    paginator={employeeInfo.length > 0}
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                >
                    {/* Name Column with Filter */}
                    <Column
                        header="Name"
                        field="name"
                        body={(data: any) => {
                            const { name, image, id } = data;
                            return (
                                <div className="flex gap-2 align-items-center" onClick={() => router.push(`/products/update/${id}`)}>
                                    {image ? (
                                        <div className="w-4rem h-4rem">
                                            <img src={image} alt="Employee Image" className="border-round-lg h-full w-full" />
                                        </div>
                                    ) : (
                                        <Avatar icon="pi pi-user" size="xlarge" shape="circle" />
                                    )}
                                    <p className="white-space-nowrap font-medium hover:text-primary">{name}</p>
                                </div>
                            );
                        }}
                        filter
                        showFilterMenu={false}
                        filterElement={
                            <InputText
                                type="search"
                                placeholder="Search by Name"
                                className="w-20rem"
                                value={filters.name?.value || ''}
                                onChange={(e) => setFilters({ ...filters, name: { ...filters.name, value: e.target.value } })}
                            />
                        }
                    />

                    {/* Email Column */}
                    <Column field="email" header="Email" headerClassName="white-space-nowrap" />

                    {/* Phone Column */}
                    <Column field="phone" header="Phone" headerClassName="white-space-nowrap" />

                    {/* Department Column with Dropdown Filter */}
                    <Column
                        field="department.name"
                        header="Department"
                        headerClassName="white-space-nowrap"
                        filter
                        showFilterMenu={false}
                        filterElement={
                            <Dropdown
                                value={filters['department.name'].value}
                                showClear
                                onChange={(e) =>
                                    setFilters({
                                        ...filters,
                                        'department.name': { ...filters['department.name'], value: e.value },
                                    })
                                }
                                options={departments}
                                optionLabel="name"
                                placeholder="Select a Department"
                                className="w-full"
                            />
                        }
                    />

                    {/* Action Column */}
                    <Column
                        header="Action"
                        headerClassName="flex justify-content-end w-full"
                        body={(data) => {
                            const { id } = data;
                            return (
                                <div className="flex gap-2 align-items-center h-full justify-content-end">
                                    <Button
                                        type="button"
                                        tooltip="Edit"
                                        tooltipOptions={{ position: 'top' }}
                                        icon="pi pi-pencil"
                                        className="h-2rem w-2rem mr-2"
                                        onClick={() => router.push(`/employee/update/${id}`)}
                                    />
                                    <Button
                                        type="button"
                                        tooltip="Delete"
                                        tooltipOptions={{ position: 'top' }}
                                        icon="pi pi-trash"
                                        severity="danger"
                                        className="h-2rem w-2rem mr-2"
                                        onClick={() => {
                                            const filteredData = employeeInfo.filter((item: any) => item.id !== id);
                                            setEmployeeInfo(filteredData);
                                            localStorage.setItem('employeeData', JSON.stringify(filteredData));
                                        }}
                                    />
                                </div>
                            );
                        }}
                    />
                </DataTable>
            </div>
        </div>
    );
};

export default Employees;

