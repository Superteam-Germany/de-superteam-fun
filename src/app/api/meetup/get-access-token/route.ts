import fs from 'fs';
import path from 'path';
import jwt from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  
    try {
      const privateKeyPath = './private.key';
      const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

      // JWT claims
      const claims = {
        sub: process.env.MEETUP_MEMBER_ID,
        iss: process.env.MEETUP_CLIENT_ID,
        aud: 'api.meetup.com',
        exp: Math.floor(Date.now() / 1000) + 120,
      }

      // JWT header
      const header = {
        kid: process.env.MEETUP_SIGNING_KEY_ID,
        typ: 'JWT',
        alg: 'RS256',
      }

      const token = jwt.sign(claims, privateKey, {
        algorithm: 'RS256',
        header: header,
      });

      const data = new URLSearchParams();
      data.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
      data.append('assertion', token);

      const response = await fetch('https://secure.meetup.com/oauth2/access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data.toString(),
      });

      const tokenData = await response.json();

      console.log('Response:', tokenData);

      return NextResponse.json(tokenData);
  
    } catch (error) {
      console.error('Error fetching access token:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
