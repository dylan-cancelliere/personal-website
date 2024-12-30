import classes from "./route.module.css";

import { createFileRoute } from "@tanstack/react-router";
import {
  ActionIcon,
  Group,
  Stack,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const ContactContainer = () => {
  const theme = useMantineTheme();

  return (
    <Group
      w="100%"
      p="xl"
      style={{ backgroundColor: theme.colors.purple[9], borderRadius: 5 }}
      justify="center"
    >
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.purple[0]}
      >
        <IconMail size="xl" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.purple[0]}
      >
        <IconBrandLinkedin size="xl" />
      </ActionIcon>
    </Group>
  );
};

const LandingPage = () => {
  return (
    <Stack w="100%">
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
      <ContactContainer />
    </Stack>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
});
