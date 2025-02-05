'use client'
import React, { useActionState } from 'react';
import { createUser } from '../actions/users';


function SubmitButton()
{
    const {pending} = useActionState()

    return(
        <button 
        type="submit"
        disabled={pending}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {pending ? 'Adding...' : 'Add User'}
      </button>
    )
}
const UserForm = () => {
    return (
        <>
           <form action={createUser} className="space-y-4">
      <div>
        <label htmlFor="name" className="block mb-1">Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          className="border p-2 rounded w-full"
        />
      </div>
      <SubmitButton />
    </form>
        </>
    );
}

export default UserForm;
