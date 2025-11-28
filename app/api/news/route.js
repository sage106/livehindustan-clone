import { NextResponse } from 'next/server';
import { newsData, getNewsByCategory } from '@/lib/data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  
  if (category) {
    const categoryNews = getNewsByCategory(category);
    return NextResponse.json({ 
      success: true, 
      data: categoryNews 
    });
  }
  
  return NextResponse.json({ 
    success: true, 
    data: newsData 
  });
}