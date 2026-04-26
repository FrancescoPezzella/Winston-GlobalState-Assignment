import { Container, Typography, Box } from "@mui/material";

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" gutterBottom fontWeight={700}>
        About
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem,
          quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          eos qui ratione voluptatem sequi nesciunt.
        </Typography>
        <Typography>
          Neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur,
          adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
          magnam aliquam quaerat voluptatem.
        </Typography>
        <Typography>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
          reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
        </Typography>
      </Box>
    </Container>
  );
}
