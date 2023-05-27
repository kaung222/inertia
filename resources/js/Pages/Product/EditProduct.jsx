import React, { useState } from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, router, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProduct = ({ status, auth, product }) => {
    // const navigate = useNavigate();
    const { data, setData, processing, errors } = useForm({
        name: product.name,
        category: product.category,
        price: product.price,
        stock: product.stock,
    });

    const submit = (e) => {
        const id = product.id;
        e.preventDefault();
        router.put(`/product/${id}`, data);
        router.reload({ only: ["products"] });
        
    };
    return (
        <>
            <Head title="edit" />
            <AuthenticatedLayout user={auth.user}>
                <div className=" w-full p-5 flex items-center justify-center">
                    <form onSubmit={submit} className="w-full md:w-[400px]">
                        <div>
                            <InputLabel htmlFor="name" value="Product Name" />

                            <TextInput
                                id="name"
                                type="text"
                                defaultValue={data.name}
                                className="mt-1 block w-full"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="category" value="Category" />
                            <TextInput
                                id="category"
                                defaultValue={data.category}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.category}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="price" value="Price" />
                            <TextInput
                                id="price"
                                defaultValue={data.price}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.price}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="stock" value="Stock" />
                            <TextInput
                                id="stock"
                                defaultValue={data.stock}
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("stock", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.stock}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Update Product
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default EditProduct;
