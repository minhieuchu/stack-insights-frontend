import { ButtonGroupContainer } from "@/components/ContentPane/index.styles";

interface ButtonGroupProps {
  items: string[];
}

export function ButtonGroup({ items }: ButtonGroupProps) {
  return (
    <ButtonGroupContainer>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </ButtonGroupContainer>
  );
}
