export async function GET() {
  return Response.json({
    apiKeyPresent: !!process.env.983mzMi0,
    clientCodePresent: !!process.env.U19790,
    apiSecretPresent: !!process.env.O564FFAO2BCQ7CAW5MSKOXWC4A,
  });
}
