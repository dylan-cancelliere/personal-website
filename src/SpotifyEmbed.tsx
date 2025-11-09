import { rem } from "@mantine/core";

export const SpotifyEmbed = ({ src }: { src: string }) => (
  <iframe
    style={{
      border: "none",
      borderRadius: rem(5),
      maxWidth: rem(700),
      flexGrow: 1,
    }}
    src={src}
    height="352"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
);
