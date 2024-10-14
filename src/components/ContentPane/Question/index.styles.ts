import { styled } from "@mui/material/styles";

export const QuestionPreviewContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "1.5rem",
  padding: "1.5rem 2rem",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const QuestionMetaData = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  alignItems: "flex-end",
  justifyContent: "center",
  fontSize: "0.8125rem",
  fontWeight: 600,
  width: "6rem",

  ".answer-count": {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "0.25rem",
    color: theme.palette.common.white,
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.success.main
        : theme.palette.success.dark,
    borderRadius: "0.5rem",
    padding: "0.15rem 0.5rem",
    width: "max-content",

    svg: {
      fontSize: "1rem",
    },
  },

  ".view-count": {
    color:
      theme.palette.mode === "light"
        ? theme.palette.error.dark
        : theme.palette.error.light,
  },
}));

export const QuestionContent = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",

  ".content-preview": {
    fontSize: "0.875rem",
  },
}));

export const TagItem = styled("div")(({ theme }) => ({
  fontWeight: 600,
  fontSize: "0.75rem",
  padding: "0.2rem 0.25rem",
  borderRadius: "0.25rem",
  backgroundColor: theme.palette.divider,
  cursor: "pointer",
}));

export const UserInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",

  "a:first-of-type": {
    textDecoration: "none",
  },

  "span:first-of-type": {
    fontWeight: 700,
    fontSize: "0.875rem",
  },
});
