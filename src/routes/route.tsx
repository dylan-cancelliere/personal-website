import classes from "./route.module.css";

import { createFileRoute } from "@tanstack/react-router";
import {
  Box,
  em,
  Group,
  Image,
  rem,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useIsMobile } from "../utils";
import { ReactNode } from "react";

const InlineLink = ({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) => {
  return (
    <a href={link} className={classes.inlineLink} style={{}}>
      {children}
    </a>
  );
};

const AboutContainer = () => {
  const theme = useMantineTheme();
  const isMobile = useIsMobile();

  return (
    <Stack w="100%" align="center">
      <Group justify="space-around" w="100%">
        <Stack
          w="100%"
          maw="35rem"
          p="xl"
          style={{
            backgroundColor: theme.colors.primary[2],
            borderRadius: rem(5),
          }}
        >
          <Title ff="Noe Bold Italic">Hello!</Title>
          <Text style={{ textIndent: em(20) }}>
            I'm Dylan, a Software Engineer living in Rochester, New York.
            Currently, I'm working at{" "}
            <InlineLink link="#experience">Bryx</InlineLink> as a front-end
            software engineer.
          </Text>
          <Text style={{ textIndent: em(20) }}>
            I love live music (shoutout{" "}
            <InlineLink link="https://www.bugjar.com/">Bug Jar</InlineLink>),
            skiing as well as pretty much every other winter activity, and
            helping out with some{" "}
            <InlineLink link="https://www.cityofrochester.gov/departments/mayors-office/neighborhood-ambassador-program">
              mutual aid
            </InlineLink>{" "}
            efforts in my community.
          </Text>
        </Stack>
        <Image
          src="public/profile.jpeg"
          maw={isMobile ? rem(200) : rem(300)}
          my="5rem"
          style={{
            boxShadow: `-50px -50px 0 -40px ${theme.colors.primary[0]}, 50px 50px 0 -40px ${theme.colors.primary[0]}`,
          }}
        />
      </Group>
    </Stack>
  );
};

const SpotifyContainer = () => {
  const theme = useMantineTheme();

  return (
    <Stack w="100%" style={{}} p="md" align="center">
      <Group w="100%" justify="center" gap="xl">
        <Stack>
          <Title
            ff="Noe Bold Italic"
            c={theme.colors.primary[0]}
            style={{ textAlign: "right" }}
          >
            What I'm Listening To
          </Title>
          <Text c={theme.colors.primary[0]} style={{ textAlign: "right" }}>
            ...follow me while you're here 👀
          </Text>
        </Stack>
        <iframe
          style={{
            border: "none",
            borderRadius: rem(5),
            maxWidth: rem(700),
            flexGrow: 1,
          }}
          src="https://open.spotify.com/embed/playlist/4LhCYDqNdNqxJGaz071cfA?utm_source=generator"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </Group>
    </Stack>
  );
};

const LandingPage = () => {
  return (
    <Stack w="100%" gap="xl">
      <Stack pt="5rem" w="100%" align="center">
        <Stack w="min-content" justify="flex-end" id="about">
          <Title className={`${classes.typewriter} ${classes.one}`}>
            Dylan Cancelliere
          </Title>
          <Title className={`${classes.typewriter} ${classes.two}`}>
            Software Engineer
          </Title>
        </Stack>
      </Stack>
      <Box className={classes.content}>
        <AboutContainer />
        <SpotifyContainer />
      </Box>
    </Stack>
  );
};

export const Route = createFileRoute("/")({
  component: LandingPage,
});
