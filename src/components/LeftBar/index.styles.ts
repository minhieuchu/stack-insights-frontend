import { styled } from "@mui/material/styles";

export const LeftBarContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "3.75rem",
  left: 0,
  width: "32rem",
  height: "calc(100vh - 6.25rem)",
  borderRight: "1px solid",
  borderRightColor: theme.palette.divider,
  backgroundColor: theme.palette.background.default,
}));

export const ContentContainer = styled("div")({
  position: "absolute",
  top: "2rem",
  right: 0,
  width: "10rem",
});

export const SectionContainer = styled("div")({
  h5: {
    margin: "0.75rem 0",
  },
});

export const ItemContainer = styled("div")(({ theme }) => ({
  position: "relative",
  left: "-0.5rem",
  width: "10rem",
  fontSize: "0.95rem",
  display: "flex",
  alignItems: "center",
  gap: "0.75rem",
  padding: "0.25rem 0",
  paddingLeft: "0.5rem",
  transition: "0.2s",
  borderTopLeftRadius: "0.5rem",
  borderBottomLeftRadius: "0.5rem",

  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.grey[700],
  },
}));
