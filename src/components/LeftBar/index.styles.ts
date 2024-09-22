import { styled } from "@mui/material/styles";

export const LeftBarContainer = styled("div")(({ theme }) => ({
  position: "fixed",
  top: "3.5rem",
  left: 0,
  width: "28vw",
  minHeight: "calc(100vh - 3.5rem)",
  backgroundColor: theme.palette.background.default,
  transition: "0.2s",

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
}));

export const ContentContainer = styled("div")({
  position: "absolute",
  top: "2rem",
  right: 0,
  width: "10rem",
});

export const SectionContainer = styled("div")(({ theme }) => ({
  color: theme.palette.text.primary,
  h5: {
    fontSize: "0.75rem",
    margin: "0.75rem 0",
    transition: "0.2s",
  },
}));

export const ItemContainer = styled("div")(({ theme }) => ({
  position: "relative",
  left: "-0.5rem",
  width: "10rem",
  fontSize: "0.9rem",
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
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[700],
  },
}));
