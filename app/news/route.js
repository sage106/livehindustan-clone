import { NextResponse } from 'next/server';
import { newsData, stateNewsData } from '../../../lib/data';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const state = searchParams.get('state');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Handle state query
    if (state) {
      const stateNews = stateNewsData[state];
      
      if (!stateNews) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'State not found',
            message: 'अनुरोधित राज्य नहीं मिला',
            availableStates: Object.keys(stateNewsData)
          },
          { status: 404 }
        );
      }
      
      return NextResponse.json({ 
        success: true,
        state: state,
        data: stateNews,
        total: stateNews.length,
        timestamp: new Date().toISOString()
      });
    }
    
    // Handle category query
    if (category) {
      const categoryNews = newsData.categories[category];
      
      if (!categoryNews) {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Category not found',
            message: 'अनुरोधित श्रेणी नहीं मिली',
            availableCategories: Object.keys(newsData.categories)
          },
          { status: 404 }
        );
      }
      
      return NextResponse.json({ 
        success: true,
        category: category,
        data: categoryNews,
        total: categoryNews.length,
        timestamp: new Date().toISOString()
      });
    }
    
    // Return all data
    return NextResponse.json({ 
      success: true, 
      data: {
        news: newsData,
        states: stateNewsData
      },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error',
        message: 'डेटा प्राप्त करने में त्रुटि हुई',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// POST endpoint with validation
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title || !body.category) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation error',
          message: 'शीर्षक और श्रेणी आवश्यक हैं'
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'News article created successfully',
      data: body
    }, { status: 201 });
    
  } catch (error) {
    console.error('POST Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Invalid request',
        message: 'अमान्य अनुरोध डेटा'
      },
      { status: 400 }
    );
  }
}