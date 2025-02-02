import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/resume")({
  beforeLoad: () => {
    window.open("/assets/Cancelliere_Resume.pdf");
    throw redirect({ to: "/" });
  },
});
