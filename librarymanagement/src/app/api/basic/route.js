import product from '../../../models/product';
import {connectDB} from '../../../lib/db.connection';
// app/api/products/route.js
import product from '@/models/basic';

export async function POST(req) {
  try {
    const { name, brand } = await req.json();

    if (!name || !brand) {
      return new Response(JSON.stringify({ error: 'Name and Brand are required' }), { status: 400 });
    }

    await connectDB();

    const basic = await basic.create({ name, brand });

    return new Response(JSON.stringify(basic), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}