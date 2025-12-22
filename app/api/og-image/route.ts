import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const imagePath = join(process.cwd(), 'public', 'img', 'og-image.png');
    
    // Verificar se o arquivo existe
    if (!existsSync(imagePath)) {
      console.error('OG image file not found at:', imagePath);
      return new NextResponse('Image not found', { 
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
    
    const imageBuffer = await readFile(imagePath);
    
    // Verificar se é realmente um PNG (magic number: 89 50 4E 47)
    const pngSignature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    if (!imageBuffer.subarray(0, 8).equals(pngSignature)) {
      console.error('File is not a valid PNG image');
      return new NextResponse('Invalid image format', { 
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
    
    // Criar resposta com headers explícitos
    const response = new NextResponse(imageBuffer, {
      status: 200,
    });
    
    // Definir headers de forma explícita e completa
    response.headers.set('Content-Type', 'image/png');
    response.headers.set('Content-Length', imageBuffer.length.toString());
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    response.headers.set('Accept-Ranges', 'bytes');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Content-Disposition', 'inline; filename="og-image.png"');
    response.headers.set('Access-Control-Allow-Origin', '*');
    
    return response;
  } catch (error) {
    console.error('Error serving OG image:', error);
    return new NextResponse('Image not found', { 
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
