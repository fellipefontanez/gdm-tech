import clientPromise from "@/src/lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/src/lib/auth";

export async function getUserOnboarding() {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;

    if (!email) return { session: null, hasOnboarded: false };

    const client = await clientPromise;
    const db = client.db("fellipebot");
    const user = await db.collection("users").findOne({ email });

    return {
        session,
        hasOnboarded: user?.hasOnboarded ?? false,
    };
}
