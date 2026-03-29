export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  const res = await fetch(
    `https://www.omdbapi.com/?apikey=dcaea779&s=${query}`
  );

  const data = await res.json();

  return Response.json(data);
}