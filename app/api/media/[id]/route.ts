export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=dcaea779&i=${params.id}`
  );

  const data = await res.json();

  return Response.json(data);
}