"use client";
import { useEffect } from "react";
import { toast } from "sonner";
import Landing from "@/components/Landing/Landing";

export default function Home() {
  useEffect(() => {
    toast("Email: jai@mailsac.com, Password:Test@1234", {
      description: "Website is on progress ! ",
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
  }, []);
  return <Landing />;
}
