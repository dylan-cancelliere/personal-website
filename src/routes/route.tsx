import "./route.css";

import { createFileRoute } from "@tanstack/react-router";
import { Stack, Title } from "@mantine/core";

const LandingPage = () => {
  return (
    <Stack pt="10rem" w="100%" align="center">
      <Stack w="min-content" justify="flex-end">
        <Title className="typewriter one">Dylan Cancelliere</Title>
        <Title className="typewriter two">Software Engineer</Title>
      </Stack>
    </Stack>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
});
