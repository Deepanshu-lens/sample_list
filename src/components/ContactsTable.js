"use client";
import React, { useEffect, useState } from 'react';

function ContactsTable() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            const response = await fetch('https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts');
            const data = await response.json();
            setContacts(data);
        };

        fetchContacts();
    }, []);

    return (
        <div className="flex justify-center mt-10">
            <div className="w-full max-w-5xl max-h-[90vh] overflow-y-auto">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">First Name</th>
                                <th scope="col" className="px-6 py-3">Last Name</th>
                                <th scope="col" className="px-6 py-3">Phone</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Company</th>
                                <th scope="col" className="px-6 py-3">Job Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map(contact => (
                                <tr key={contact.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                    <td className="px-6 py-4">{contact.first_name}</td>
                                    <td className="px-6 py-4">{contact.last_name}</td>
                                    <td className="px-6 py-4">{contact.phone}</td>
                                    <td className="px-6 py-4">{contact.email}</td>
                                    <td className="px-6 py-4">{contact.company}</td>
                                    <td className="px-6 py-4">{contact.job_title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ContactsTable;
