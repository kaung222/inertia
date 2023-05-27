import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import React from "react";

const User = ({ auth, users }) => {
    // console.log(users);

    const deleteHandler = async (id) => {
        const data = await axios.delete(
            `http://localhost:8000/dashboard/user/${id}/delete`
        );
    };
    return (
        <>
            <Head title="User" />
            <AuthenticatedLayout user={auth.user}>
                <div className="p-5">
                    <table className=" w-full ">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                {/* <th>Created At</th>
                            <th>Updated At</th> */}
                                <th>Controls</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td className=" text-center text-sm">
                                            {user.name}
                                        </td>
                                        <td className=" text-start text-sm pl-10">
                                            {user.email}
                                        </td>
                                        {/* <td className=" text-center text-sm">
                                        {user.created_at}
                                    </td>
                                    <td className=" text-center text-sm">
                                        {user.updated_at}
                                    </td> */}
                                        <td>
                                            <button
                                                className="btn bg-red-600"
                                                onClick={() =>
                                                    deleteHandler(user.id)
                                                }
                                            >
                                                Delete
                                            </button>
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

export default User;
