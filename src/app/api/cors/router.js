import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
import { NextResponse } from 'next/server';

// Inicializa el middleware CORS
const cors = initMiddleware(
  Cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'OPTIONS'], 
    credentials: true, 
  })
);

export async function GET(request) {
  await cors(request); 

  return NextResponse.json({ message: 'Hello World' });
}
