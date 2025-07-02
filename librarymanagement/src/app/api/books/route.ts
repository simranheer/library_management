import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../lib/db.connection';
import Book from '../../../models/books';

export async function GET() {
  try {
    await dbConnect();
    const books = await Book.find({}).sort({ createdAt: -1 });
    return NextResponse.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { error: 'Failed to fetch books' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const body = await request.json();
    
    const book = new Book(body);
    const savedBook = await book.save();
    
    return NextResponse.json(savedBook, { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.json(
      { error: 'Failed to create book' },
      { status: 500 }
    );
  }
} 