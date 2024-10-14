import { useMemo } from 'react';

import {
    QuestionContent, QuestionMetaData, QuestionPreviewContainer, TagItem, UserInfo
} from '@/components/ContentPane/Question/index.styles';
import { Question } from '@/interfaces/Post';
import CheckIcon from '@mui/icons-material/Check';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useTheme } from '@mui/material';

interface QuestionPreviewProps {
  data: Question;
}

export function QuestionPreview({ data }: Readonly<QuestionPreviewProps>) {
  const theme = useTheme();
  const tags = useMemo(
    () => data.tags.split("|").filter((item) => !!item),
    [data]
  );

  const userProfileUrl = useMemo(
    () => `https://ai.stackexchange.com/users/${data.owner_user_id}`,
    [data]
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
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
          <ContactSupportIcon sx={{ color: theme.palette.grey[700] }} />
          <a className="title" href="/">
            {data.title}
          </a>
        </div>
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
          {data.owner_user && (
            <UserInfo>
              <a href={userProfileUrl} target="_blank">
                {data.owner_user.display_name}
              </a>
              <span> {data.owner_user.reputation} </span>
            </UserInfo>
          )}
        </div>
      </QuestionContent>
    </QuestionPreviewContainer>
  );
}
