export async function GET() {
  return Response.json({
    nifty: 25100,
    banknifty: 56750,
    vix: 12.5,
    status: "LIVE"
  });
}
