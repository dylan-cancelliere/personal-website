import classes from "./__root.module.css";

import {
  ActionIcon,
  Box,
  Group,
  rem,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconMail,
  IconBrandLinkedin,
  IconBrandSpotify,
  IconBrandLastfm,
  IconBrandGithub,
} from "@tabler/icons-react";
import {
  createRootRoute,
  Link,
  LinkComponentProps,
  Outlet,
} from "@tanstack/react-router";
import { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import { useIsMobile } from "../utils";

const TopBarLink = (props: LinkComponentProps) => {
  return <Link {...props} className={classes.topBarLink} />;
};

// Credit: Mikael Ainalem https://mikael-ainalem.medium.com/
const HamburgerIcon = ({
  color,
  opened,
}: {
  color: string;
  opened: boolean;
}) => (
  <svg
    className={`${classes.ham} ${classes.hamRotate} ${classes.ham8} ${opened ? classes.active : ""}`}
    viewBox="0 0 100 100"
  >
    <path
      className={`${classes.line} ${classes.top} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
    />
    <path
      className={`${classes.line} ${classes.middle} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 30,50 h 40"
    />
    <path
      className={`${classes.line} ${classes.bottom} ${opened ? classes.active : ""}`}
      style={{ stroke: color }}
      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
    />
  </svg>
);

const ContactContainer = () => {
  const theme = useMantineTheme();
  const appContext = useContext(AppContext);

  return (
    <Group
      w="100%"
      p="xl"
      justify="center"
      style={{ backgroundColor: theme.colors.primary[9], borderRadius: rem(5) }}
      className={
        window.location.pathname == "/" && appContext.isInitialLoad
          ? classes.animateFooter
          : ""
      }
    >
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.primary[0]}
        component="a"
        href="mailto:dycancel@gmail.com"
      >
        <IconMail height="100%" width="100%" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.primary[0]}
        component="a"
        href="https://www.linkedin.com/in/dylan-cancelliere/"
        target="_blank"
      >
        <IconBrandLinkedin height="100%" width="100%" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.primary[0]}
        component="a"
        href="https://github.com/dylan-cancelliere"
        target="_blank"
      >
        <IconBrandGithub height="100%" width="100%" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.primary[0]}
        component="a"
        href="https://open.spotify.com/user/dcancelliere?si=d7e65ae1caec4103"
        target="_blank"
      >
        <IconBrandSpotify height="100%" width="100%" />
      </ActionIcon>
      <ActionIcon
        variant="transparent"
        size="xl"
        color={theme.colors.primary[0]}
        component="a"
        href="https://www.last.fm/user/KillerDiller7"
        target="_blank"
      >
        <IconBrandLastfm height="100%" width="100%" />
      </ActionIcon>
    </Group>
  );
};

const TopBar = ({
  setIsInitialLoad,
}: {
  setIsInitialLoad: (isInitialLoad: boolean) => void;
}) => {
  const [opened, { toggle, close }] = useDisclosure();
  const appContext = useContext(AppContext);

  const theme = useMantineTheme();
  const isMobile = useIsMobile();

  return (
    <Stack
      w="100%"
      justify="flex-start"
      className={
        window.location.pathname == "/" && appContext.isInitialLoad
          ? classes.animateHeader
          : ""
      }
    >
      <Group
        className={`${classes.topBar} ${isMobile ? classes.mobileHeader : ""} ${opened ? classes.expand : ""}`}
        p="xs"
        wrap="nowrap"
        style={{
          border: `0.5rem solid ${theme.colors.primary[0]}`,
          boxShadow: "rgba(0, 0, 0, 0.15) 0 0.5rem 0.5rem",
        }}
        gap="xl"
      >
        <ActionIcon
          size="xl"
          variant="transparent"
          color={theme.colors.primary[0]}
          onClick={toggle}
        >
          <HamburgerIcon opened={opened} color={theme.colors.primary[0]} />
        </ActionIcon>
        <Box
          style={{
            display: "flex",
            gap: "var(--mantine-spacing-xl)",
            ...(isMobile
              ? {
                  flexGrow: 1,
                  flexDirection: "column",
                  alignItems: "center",
                }
              : undefined),
          }}
        >
          <TopBarLink
            to="/"
            tabIndex={opened ? undefined : -1}
            onClick={() => {
              setIsInitialLoad(false);
              if (isMobile) close();
            }}
          >
            About
          </TopBarLink>
          <TopBarLink
            to="/experience"
            tabIndex={opened ? undefined : -1}
            onClick={() => {
              setIsInitialLoad(false);
              if (isMobile) close();
            }}
          >
            Experience
          </TopBarLink>
          <TopBarLink
            to="/resume"
            tabIndex={opened ? undefined : -1}
            onClick={() => {
              if (isMobile) close();
              setIsInitialLoad(false);
            }}
          >
            Resume
          </TopBarLink>
        </Box>
      </Group>
    </Stack>
  );
};

const MainContainer = ({
  setIsInitialLoad,
}: {
  setIsInitialLoad: (isInitialLoad: boolean) => void;
}) => {
  const theme = useMantineTheme();

  return (
    <>
      <Stack
        h="100dvh"
        w="100dvw"
        p="sm"
        align="center"
        justify="space-between"
        style={{ backgroundColor: theme.colors.primary[4], overflow: "auto" }}
      >
        <TopBar setIsInitialLoad={setIsInitialLoad} />
        <Outlet />
        <ContactContainer />
      </Stack>
    </>
  );
};

const ContextWrapper = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(
    window.location.pathname == "/",
  );
  return (
    <AppContext.Provider value={{ isInitialLoad: isInitialLoad }}>
      <MainContainer setIsInitialLoad={setIsInitialLoad} />
    </AppContext.Provider>
  );
};

export const Route = createRootRoute({
  component: ContextWrapper,
});
