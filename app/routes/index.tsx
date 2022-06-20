import NavBar from "~/components/NavBar";
import { Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <NavBar />
    </div>
  );
}
