import clientPromise from '@/src/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email, favoritos } = await req.json();

  const client = await clientPromise;
  const db = client.db('fellipebot');

  await db
    .collection('users')
    .updateOne({ email }, { $set: { favoritos } }, { upsert: true });

  return NextResponse.json({ success: true });
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');

  const client = await clientPromise;
  const db = client.db('fellipebot');

  const user = await db.collection('users').findOne({ email });
  return NextResponse.json({ favoritos: user?.favoritos || [] });
}
