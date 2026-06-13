export async function GET() {
  return Response.json({
    broker: "Angel One",
    status: "connected"
  });
}
