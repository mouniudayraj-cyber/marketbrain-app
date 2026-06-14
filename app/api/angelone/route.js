export async function GET() {
  return Response.json({
    apiKeyPresent: !!process.env.ANGEL_API_KEY,
    clientCodePresent: !!process.env.ANGEL_CLIENT_CODE,
    apiSecretPresent: !!process.env.ANGEL_API_SECRET,
  });
}
