import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const POST = async (requst) => {
    try {
        const { email, name, phone, instagram, youtube } = await requst.json();
        if (!email || !name || !phone) {
            return NextResponse.json({ error: "All fields are required" });
        }
        const isExist = await prisma.user.findFirst({ where: { email } });
        if (isExist) {
            return NextResponse.json({ user: isExist });
        }

        const newUser = await prisma.user.create({
            data: { name, email, phone, instagram, youtube },
        });
        return NextResponse.json({ user: newUser });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
};
export const PUT = async (requst) => {
    try {
        const { email, name, phone, instagram, youtube } = await requst.json();
        if (!email || !name || !phone) {
            return NextResponse.json({ error: "All fields are required" });
        }
        const isExist = await prisma.user.findFirst({ where: { email } });
        if (!isExist) {
            return NextResponse.json({ error: "user not exist" });
        }

        const newUser = await prisma.user.update({
            where: { email },
            data: { name, email, phone, instagram, youtube },
        });
        return NextResponse.json({ user: newUser });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
};
