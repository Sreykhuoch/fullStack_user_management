'use server'

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();


// get all the users 
export async function getUsers(){
    try{
        const users = await prisma.user.findMany();
        return {users}
    }catch(e){
        const message = "Failed to get users"
        return {
            message,
            error: e,
        }
    }
}


// create a new  user
export async function createUser(formData){
    try{
        const name = formData.get('name');
        const email = formData.get('email');

        const user = await Prisma.user.create({
            data: {name, email}
        })

        revalidatePath('/')
        return  {user}
    }catch(e){
        const message = "Failed to create user"
        return{
            message,
            error: e,
        }
    }
}


// update a user 

export async function updateUser(id, formData){
    try{
        const name = formData.get('name');
        const email = formData.get('email');

        const user = await Prisma.user.update({
            where: {id},
            data: {name, email}
        })

        revalidatePath('/')
        return {user}
    }catch(e){
        const message = "Failed to update user"
        return{
            message,
            error: e,
        }
    }
}


//delete user 

export async function deleteUser(id){
    try{
        await Prisma.user.delete({
            where: {id}
        })

        revalidatePath('/')
        return {message: "User deleted successfully"}
    }catch(e){
        const message = "Failed to delete user"
        return{
            message,
            error: e,
        }
    }
}


