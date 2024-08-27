"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addTask(formData: FormData) {
    console.log(formData.get("title"))
    await prisma.task.create({
        data: {
            title: formData.get("title") as string,
        }
    })

    revalidatePath("/")
}