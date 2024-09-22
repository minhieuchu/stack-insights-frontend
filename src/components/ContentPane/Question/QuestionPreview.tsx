import { useMemo } from "react";

import {
  QuestionContent,
  QuestionMetaData,
  QuestionPreviewContainer,
  TagItem,
} from "@/components/ContentPane/Question/index.styles";
import { Question } from "@/interfaces/Post";
import CheckIcon from "@mui/icons-material/Check";

interface QuestionPreviewProps {
  data: Question;
}

export function QuestionPreview({ data }: Readonly<QuestionPreviewProps>) {
  const tags = useMemo(
    () => data.tags.split("|").filter((item) => !!item),
    [data],
  );

  return (
    <QuestionPreviewContainer>
      <QuestionMetaData>
        <div>{`${data.score} votes`}</div>
        <div className="answer-count">
          {" "}
          <CheckIcon /> {`${data.answer_count} answers`}
        </div>
        <div className="view-count">{`${data.view_count} views`}</div>
      </QuestionMetaData>
      <QuestionContent>
        <a className="title" href="/">
          {data.title}
        </a>
        <div className="content-preview">{data.body.slice(0, 100)}</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            {tags.map((tag) => (
              <TagItem key={tag}>{tag}</TagItem>
            ))}
          </div>
        </div>
      </QuestionContent>
    </QuestionPreviewContainer>
  );
}
