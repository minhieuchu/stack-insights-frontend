import {
  ContentContainer,
  ItemContainer,
  LeftBarContainer,
  SectionContainer,
} from "@/components/LeftBar/index.styles";
import SellIcon from "@mui/icons-material/Sell";

interface SectionItemProps {
  name: string;
}

function SectionItem({ name }: Readonly<SectionItemProps>) {
  return (
    <ItemContainer>
      <SellIcon sx={{ fontSize: "1.15rem" }} />
      <div>{name}</div>
    </ItemContainer>
  );
}

export function LeftBar() {
  return (
    <LeftBarContainer>
      <ContentContainer>
        <SectionContainer>
          <h5>{"RECENT TAGS"}</h5>
          <SectionItem name={"javascript"} />
          <SectionItem name={"reactjs"} />
        </SectionContainer>
      </ContentContainer>
    </LeftBarContainer>
  );
}
