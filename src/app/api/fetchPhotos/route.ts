import {S3} from 'aws-sdk';
import {NextResponse} from 'next/server';

// Initialize S3 with your credentials and region
const s3 = new S3({
  region: 'us-east-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
});

// Define the response structure
interface S3Object {
  Key: string;
}

export async function GET() {
  try {
    // List objects in the S3 bucket
    const data = await s3.listObjectsV2({Bucket: 'john-photo'}).promise();

    // Generate presigned URLs for the objects
    const imageUrls = await Promise.all(
      (data.Contents as Array<S3Object>).map(async (item) => {
        const url = s3.getSignedUrl('getObject', {
          Bucket: 'john-photo',
          Key: item.Key,
          Expires: 60 * 5 // URL expires in 5 minutes
        });
        return url;
      })
    );

    return NextResponse.json(imageUrls);
  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json({error: 'Failed to fetch photos'}, {status: 500});
  }
}
