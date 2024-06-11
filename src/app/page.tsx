import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <h1>Hello AppHosting!!</h1>
      <Button asChild variant="outline">
        <Link href="/ssr">SSRされてるページへ行く</Link>
      </Button>
    </div>
  );
}
