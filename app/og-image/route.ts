import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const imagePath = join(process.cwd(), 'public', 'img', 'og-image.png');
    const imageBuffer = await readFile(imagePath);
    
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imageBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving OG image:', error);
    return new NextResponse('Image not found', { status: 404 });
  }
}
