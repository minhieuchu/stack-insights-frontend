import { ButtonGroup } from "@/components/ContentPane/ButtonGroup";
import { HeaderContainer } from "@/components/ContentPane/index.styles";
import { selectQuestions, useStackInsightsStore } from "@/stores";

export function Header() {
  const questions = useStackInsightsStore(selectQuestions);
  return (
    <HeaderContainer>
      <h2>{"Search Results"}</h2>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ fontWeight: 700, fontSize: "0.875rem" }}
        >{`${questions.length} results`}</div>
        <ButtonGroup items={["Newest", "Active", "Unanswered"]} />
      </div>
    </HeaderContainer>
  );
}
