import styled from "styled-components";

export const BackButton = styled.button`
  display: flex;
  padding: 0 1.75rem;
  align-items: center;

  line-height: 2.4;
  gap: 0.5rem;
  
  border: none;
  border-radius: 4px;
  box-shadow: var(--shadow);
  
  background-color: var(--colors-ui-base);
  color: var(--colors-text);

  cursor: pointer;
`