import { NextResponse } from 'next/server';
import { S3 } from 'aws-sdk';

const s3 = new S3({
  region: 'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
});

interface S3Object {
  Key: string;
}

export async function GET() {
  try {
    // List objects in the S3 bucket
    const data = await s3.listObjectsV2({ Bucket: 'john-photo' }).promise();

    // Generate presigned URLs for the objects
    const imageUrls = await Promise.all(
      (data.Contents as S3Object[]).map(async (item) => {
        const url = s3.getSignedUrl('getObject', {
          Bucket: 'john-photo',
          Key: item.Key,
          Expires: 60 *3
        });
        return url;
      })
    );

    const response = NextResponse.json(imageUrls);

    // Set cache-control headers to prevent caching
    response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');

    return response;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch photos' },
      { status: 500 }
    );
  }
}
