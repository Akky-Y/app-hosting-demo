import SsrComponent from "@/components/ssr-component";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <h2>SSRページ</h2>
      <SsrComponent />
      <Button asChild variant="outline">
        <Link href="/">戻る</Link>
      </Button>
    </div>
  );
}
