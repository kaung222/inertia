import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const SigleProduct = ({ product ,auth}) => {
    console.log(product);
    return (
        <>
        <Head title="Product-detail"/>
        <AuthenticatedLayout user={auth.user}>

            <Link href={route("product.index")} className=" px-5 py-2 bg-blue-800"> back</Link>
            <ul className="m-10">
                <li>{product.id}</li>
                <li>{product.name}</li>
                <li>{product.category}</li>
                <li>{product.price}</li>
                <li>{product.stock}</li>
            </ul>
        </AuthenticatedLayout>
        </>
    );
};

export default SigleProduct;
