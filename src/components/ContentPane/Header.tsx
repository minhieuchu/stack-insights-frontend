import { ButtonGroup } from "@/components/ContentPane/ButtonGroup";
import { HeaderContainer } from "@/components/ContentPane/index.styles";

export function Header() {
  return (
    <HeaderContainer>
      <h2>
        {
          "Getting error: Peer authentication failed for user postgres, when trying to get pgsql working with rails"
        }
      </h2>
      <ButtonGroup items={["Newest", "Active", "Unanswered"]} />
    </HeaderContainer>
  );
}
