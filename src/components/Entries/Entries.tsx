import { useState } from "react";
import { EntriesProps, Entry } from "./Entries.types";
import * as Styled from './Entries.style'

const Entries = ({ title = 'Lançamentos', entries }: EntriesProps) => {
  const [selected, setSelected] = useState<Entry | undefined>(undefined);

  const handleItemClick = (entry: Entry) => {
    setSelected(entry);
  }

  const entriesMap = entries.map((entry: Entry) => {

    let isSelected: boolean = false;
    if (selected && selected.id === entry.id) {
      isSelected = true;
    }

    return (
      <Styled.Item
        selected={isSelected}
        key={entry.id}
        onClick={() => handleItemClick(entry)}
      >
        {`${entry.type} ${entry.title} ${entry.amount}`}
      </Styled.Item>
    )
  });

  return (
    <Styled.Wrapper>
      <h2>{title}</h2>
      <Styled.List>
        {entriesMap}
      </Styled.List>
      {selected === undefined ? (
        <p>Nenhum item selecionado</p>
      ) : (
        <p>Selecionado: {selected.title}</p>
      )}

    </Styled.Wrapper>
  )
}

export default Entries;
