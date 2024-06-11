export default async function SsrComponent() {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Tokyo",
    { cache: "no-store" },
  );
  const data = await response.json();
  return <div>{data.datetime}</div>;
}
