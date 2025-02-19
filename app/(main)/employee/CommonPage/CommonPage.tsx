'use client'
import React, { useRef, useState } from 'react';
import PageHeading from '@/demo/components/PageHeading';
import Label from '@/demo/components/Label';

const CommonPage = () => {
    const [userInfo, setUserInfo] = useState({name:"", email:"", phone:"", Address:""});
    const [gender, setGender] = useState(null);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [userPhoto, setUserPhoto] = useState<File | null>(null)

    const imgChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setUserPhoto(file);
        }
    };


    return (
        <div>

            <div className={"card"}>
                <PageHeading title="Create Employee Account" back={true} />


                <div>

                    <div>
                        <div className="my-2">
                            <Label label={"User Photo"}/>
                            <div
                                className="relative border-2 border-gray-300 border-dashed border-round-lg p-3 w-full sm:2-6 xl:w-3">
                                <input ref={inputFileRef} type="file" className="absolute inset-0 w-full h-full opacity-0 z-50"
                                       onChange={imgChange}/>
                                <div className="text-center">
                                    {
                                        userPhoto ?
                                            <img src={`${
                                                userPhoto
                                                    ? URL.createObjectURL(userPhoto)
                                                    : ``
                                            }`} className="mt-4 mx-auto h-20rem w-20rem" style={{borderRadius: "10px"}}
                                                 alt={"Product Image"} id="preview"/>
                                            :
                                            <img className="mx-auto w-5 h-5"
                                                 src="/images/image-upload.svg"
                                                 alt=""/>
                                    }
                                    <p className="pt-2 text-xs text-gray-500 ">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>


                            </div>
                        </div>



                    </div>


                    </div>
            </div>

        </div>
    );
};

export default CommonPage;
