import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";
import clientPromise from "@/src/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    if (!email) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const client = await clientPromise;
    const db = client.db("fellipebot");

    await db.collection("users").updateOne(
        { email },
        { $set: { hasOnboarded: true } }
    );

    return NextResponse.json({ message: "Onboard atualizado" });
}
