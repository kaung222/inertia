import SellerChart from "@/Components/Seller/SellerChart";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";

const Seller = ({ auth }) => {
    return (
        <>
            <Head title="Seller" />
            <AuthenticatedLayout
                user={auth.user}
            >
                <div className="w-[400px] h-[300px] px-5">

                <SellerChart/>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default Seller;
