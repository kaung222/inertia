import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

const Products = ({ auth, products }) => {
    console.log(products);
    const deleteHandler = (id) => {
        router.delete(`/product/${id}`);
    };
    return (
        <>
            <Head title="Products" />
            <AuthenticatedLayout user={auth.user}>
                <div className="p-5">
                    <Link
                        href={route("product.create")}
                        className=" bg-blue-800 px-3 my-5 py-2"
                    >
                        Create New
                    </Link>
                    <table className=" w-full ">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Controls</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => {
                                return (
                                    <tr key={product.id}>
                                        <td className=" text-center text-sm">
                                            {product.name}
                                        </td>
                                        <td className=" text-start text-sm pl-10">
                                            {product.category}
                                        </td>
                                        <td className=" text-start text-sm pl-10">
                                            {product.price}
                                        </td>
                                        <td className=" text-start text-sm pl-10">
                                            {product.stock}
                                        </td>
                                        <td>
                                            <button
                                                className="btn bg-red-600"
                                                onClick={() =>
                                                    deleteHandler(product.id)
                                                }
                                            >
                                                Delete
                                            </button>
                                            <Link
                                                href={route(
                                                    "product.edit",
                                                    product
                                                )}
                                            >
                                                edit
                                            </Link>
                                            <Link
                                                href={route(
                                                    "product.show",
                                                    product
                                                )}
                                            >
                                                Detail
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Products;
