import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const { error } = await supabase
            .from('waitlist')
            .insert([{ email }]);

        if (error) {
            // Handle duplicate emails gracefully
            if (error.code === '23505') {
                return NextResponse.json({ message: 'You are already on the waitlist!' }, { status: 200 });
            }
            throw error;
        }

        return NextResponse.json({ message: 'Success' }, { status: 200 });
    } catch (error) {
        console.error('Supabase error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
