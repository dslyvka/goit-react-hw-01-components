import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  width: 340px;
  margin: 20px auto 0;
  list-style-type: none;
  padding: 0;
  border: 2px solid;

  li {
    :not(:last-child) {
      border-bottom: 2px solid;
    }

    display: flex;
    // justify-content: center;
    align-items: center;

    p {
      margin-left: 85px;
      font-weight: 500;
    }

    img {
      padding-left: 20px;
    }

    span {
      margin-left: 10px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }
  }
`;

export const Status = styled.span`
  background-color: ${props =>
    props.status === 'online' ? '#51e41d' : '#F40909'};
`;
