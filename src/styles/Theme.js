import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem 15rem;
  @media (max-width: 1100px) {
    margin: 1rem 3rem;
  }
`;

export const NewsImage = styled.img`
  height: 80%;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 5px;
`;

export const NewsCard = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
