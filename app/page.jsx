import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the main website (root page)
  redirect("/landing-page");
}
