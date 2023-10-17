import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export const GET = async () => {
    try {
        const data = await prisma.data.findMany();
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "some internal error" });
    }
};
