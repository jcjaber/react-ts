import styled, { css } from 'styled-components';
import { EntriesStyleProps } from './Entries.types';

export const Wrapper = styled.div``;

export const List = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const Item = styled.li<EntriesStyleProps>`
    ${({ selected = false }) => css`
    padding: 5px 0px;
    cursor: pointer;
    border: solid 1px transparent;

    ${selected && css`
      border-color: gray;
    `}
    &:hover {
      background-color: lightgray;
    }
  `}
`;
