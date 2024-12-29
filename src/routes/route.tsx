import classes from "./route.module.css";

import { createFileRoute } from "@tanstack/react-router";
import { Stack, Title } from "@mantine/core";

const LandingPage = () => {
  return (
    <Stack pt="10rem" w="100%" align="center">
      <Stack w="min-content" justify="flex-end">
        <Title className={`${classes.typewriter} ${classes.one}`}>
          Dylan Cancelliere
        </Title>
        <Title className={`${classes.typewriter} ${classes.two}`}>
          Software Engineer
        </Title>
      </Stack>
    </Stack>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
});
