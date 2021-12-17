import styled from '@emotion/styled';

export const SectionStatistics = styled.section`
  border: 2px solid;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;

  width: 340px;

  ul {
    padding: 0;
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    margin-bottom: 0;

    border-top: 2px solid;

    li {
      margin: 0;
      padding: 7px 10px 7px 10px;
      :not(:last-child) {
        border-right: 2px solid;
      }

      .label {
        font-weight: 500;
      }
    }
  }
`;
