export async function GET(request) {
  const { searchParams } = new URL(request.url);

  return Response.json({
    success: true,
    params: Object.fromEntries(searchParams),
  });
}
