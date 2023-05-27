import React from "react";
import InputLabel from "../../Components/InputLabel";
import TextInput from "../../Components/TextInput";
import PrimaryButton from "../../Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "../../Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const CreateProduct = ({ status, auth }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        category: "",
        price: "",
        stock: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("product.store"));
    };
    return (
        <>
            {/* {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )} */}
            <AuthenticatedLayout user={auth.user}>
                <div className=" w-full p-5 flex items-center justify-center">
                    <form onSubmit={submit} className="w-full md:w-[400px]">
                        <div>
                            <InputLabel htmlFor="name" value="Product Name" />

                            <TextInput
                                id="name"
                                type="text"
                                value={data.name}
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
                                value={data.category}
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
                                value={data.price}
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
                                value={data.stock}
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
                                Create Product
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default CreateProduct;
