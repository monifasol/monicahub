export function POST() {
  return Response.json(
    { error: "El Lab ya no tiene contraseña." },
    { status: 410 },
  );
}
