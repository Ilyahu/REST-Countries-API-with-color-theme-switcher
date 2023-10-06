import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
`;

const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);
`;

export type CardListItem = {
  title: string,
  description: string,
}

const CardSkeleton = ({cards}: {cards:number}) => {
  return (
    Array(cards).fill(null).map(() => (
     <Wrapper>
      {/* Card Image */}
      <Skeleton style={{height: '150px'}}/>

      <CardBody>
        {/* Card Title */}
        <Skeleton />

        <CardList>
          <Skeleton style={{height: '0.8rem'}} count={3}/>
        </CardList>
      </CardBody>
      </Wrapper>
    ))
    
  )
}

export default CardSkeleton