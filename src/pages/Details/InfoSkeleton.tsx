import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: start;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const InfoSkeleton = () => {
  return (
    <Wrapper>
      {/* <InfoImage/> */}
      <Skeleton style={{height:'26rem'}}/>
      <div>
        {/* Title */}
        <Skeleton style={{margin: "45px 0 40px 0", width: '9rem', height: '2rem'}}/>

        {/* List */}
        <ListGroup>
          <List>
            <Skeleton style={{display: "block", width: '14rem'}}
            count={5}/>
          </List>

          <List>
            <Skeleton style={{display: "block", width: '12rem'}} count={3}/>
          </List>
        </ListGroup>

        {/* Border countries */}
        <Skeleton style={{margin: '50px 0 0 0'}}/>

      </div>
    </Wrapper>
)}