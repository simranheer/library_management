import connectDB from '../../../lib/db.connection';

export async function POST(req) {
  try {
    const { name, brand } = await req.json();

    if (!name || !brand) {
      return new Response(JSON.stringify({ error: 'Name and Brand are required' }), { status: 400 });
    }

    await connectDB();

    // Note: You need to create a basic model or use an existing one
    // For now, just returning the data without saving to database
    const basicData = { name, brand };

    return new Response(JSON.stringify(basicData), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Something went wrong' }), { status: 500 });
  }
}