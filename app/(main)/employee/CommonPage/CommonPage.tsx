'use client';
import React, { useEffect, useRef, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import Label from '@/demo/components/Label';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import callToast from '@/app/utilities/helper';
import { useRouter } from 'next/navigation';

const CommonPage = ({ id }: { id?: number }) => {
    console.log('update-id--->', id);

    const [userInfo, setUserInfo] = useState<any>({ name: '', email: '', phone: '', address: '', image: '', id: '' });
    const inputFileRef = useRef<HTMLInputElement>(null);
    const toast = useRef<Toast | null>(null);
    const [employeeInfo, setEmployeeInfo] = useState<any>([]);
    const router = useRouter();

    // console.log("filter", filterEmployee);
    useEffect(() => {
        const filterEmployee = employeeInfo.find((item: any) => item.id === id);
        console.log('filter', filterEmployee);
        if (filterEmployee) {
            const updatedData = filterEmployee;
            setUserInfo({
                name: updatedData.name,
                email: updatedData.email,
                phone: updatedData.phone,
                address: updatedData.address,
                image: updatedData.image
            });
        }
    }, [employeeInfo, id]);

    useEffect(() => {
        const employeeData = localStorage.getItem('employeeData');
        if (employeeData) {
            const data = JSON.parse(employeeData);
            setEmployeeInfo(data);
        } else {
            setEmployeeInfo([]);
        }
    }, []);

    function imageToBase64(file: File): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        });
    }

    const imgChange = async (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const base64String = await imageToBase64(file);
            handleChangeData('image', base64String);
        }
    };

    const handleChangeData = (name: string, value: string | number) => {
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!userInfo.name) {
            callToast(toast, false, 'Name field is required');
        }
        if (!userInfo.email) {
            callToast(toast, false, 'Email field is required');
        }
        if (!userInfo.phone) {
            callToast(toast, false, 'Phone field is required');
        }
        if (!userInfo.address) {
            callToast(toast, false, 'Address field is required');
        }
        if (!userInfo.image) {
            callToast(toast, false, 'Image field is required');
        }
        if (id) {
            const updatedData = {
                name: userInfo.name,
                email: userInfo.email,
                phone: userInfo.phone,
                address: userInfo.address,
                image: userInfo.image
            };
            const data = employeeInfo.map((user: any) => (user.id === id ? { ...user, ...updatedData } : user));
            localStorage.setItem('employeeData', JSON.stringify(data));
            setEmployeeInfo(data);
            router.back();
        } else {
            const date = new Date();
            userInfo.id = `${date.getTime()}${userInfo.phone}`;
            const data = [...employeeInfo, userInfo];
            setEmployeeInfo(data);
            localStorage.setItem('employeeData', JSON.stringify(data));
            router.back();
        }
    };

    return (
        <div>
            <Toast ref={toast} />
            <div className={'card'}>
                <PageHeading title={`${id ? 'Update' : 'Create'} Employee Account`} back={true} />

                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="my-2">
                            <Label label={'User Photo'} />
                            <div className="relative border-2 border-gray-300 border-dashed border-round-lg p-3 w-full sm:2-6 xl:w-3">
                                <input ref={inputFileRef} type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" onChange={imgChange} />
                                <div className="text-center">
                                    {userInfo.image ? (
                                        <img src={userInfo.image} className="mt-4 mx-auto h-20rem w-20rem" style={{ borderRadius: '10px' }} alt={'Product Image'} id="preview" />
                                    ) : (
                                        <img className="mx-auto w-5 h-5" src="/images/image-upload.svg" alt="" />
                                    )}
                                    <p className="pt-2 text-xs text-gray-500 ">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>

                        <div className={'grid '}>
                            <div className="col-12">
                                <div className={'col-3'}>
                                    <Label label={'Name'} required={true} />
                                    <InputText type={'text'} className={'w-full'} placeholder={'name'} value={userInfo?.name} onChange={(e) => handleChangeData('name', e.target.value)} />
                                </div>
                                <div className={'col-3'}>
                                    <Label label={'Email'} required={true} />
                                    <InputText type={'email'} className={'w-full'} placeholder={'email'} value={userInfo?.email} onChange={(e) => handleChangeData('email', e.target.value)} />
                                </div>
                                <div className={'col-3'}>
                                    <Label label={'Phone'} required={true} />
                                    <InputText type={'number'} className={'w-full'} placeholder={'phone'} value={userInfo?.phone} onChange={(e) => handleChangeData('phone', e.target.value)} />
                                </div>

                                <div className={'col-4'}>
                                    <Label label={'Address'} required={true} />
                                    <InputTextarea className={'w-full'} placeholder={'Address'} value={userInfo?.address} onChange={(e) => handleChangeData('address', e.target.value)} />
                                </div>

                                <div className={'col-12'}>
                                    <Button label={id ? 'Update' : 'Create'} type={'submit'} onClick={handleSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CommonPage;
