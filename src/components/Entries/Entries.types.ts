export enum EntryTypes {
  REVENUE = 'REVENUE',
  EXPENSE = 'EXPENSE',
  TRANSFER = 'TRANSFER'
}

export type Entry = {
  id: number;
  title: string;
  type: EntryTypes;
  amount: number;
}

export type EntriesProps = {
  title?: string;
  entries: Array<Entry>
}

export type EntriesStyleProps = {
  selected?: boolean;
}
