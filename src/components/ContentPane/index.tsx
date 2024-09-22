import { Header } from "@/components/ContentPane/Header";
import { PaneContainer } from "@/components/ContentPane/index.styles";
import { QuestionPreview } from "@/components/ContentPane/Question/QuestionPreview";
import { selectQuestions, useStackInsightsStore } from "@/stores";

export function ContentPane() {
  const questions = useStackInsightsStore(selectQuestions);
  return (
    <PaneContainer>
      <Header />
      <div
        style={{
          maxWidth: "62rem",
          height: "calc(100vh - 15rem)",
        }}
      >
        {questions.map((question) => (
          <QuestionPreview key={question.id} data={question} />
        ))}
      </div>
    </PaneContainer>
  );
}
