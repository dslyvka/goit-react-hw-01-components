import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 350px;
  margin: 0 auto 0 auto;
  border-radius: 10px;

  background-color: #f4f4f4; ;
`;

export const DescriptionContainer = styled.div`
  border: 2px solid;
`;

export const Avatar = styled.img`
  margin: 0 auto 0 auto;
  padding: 20px 0 20px;

  border-radius: 50%;

  // width: 200px

  display: block;
  height: auto;
`;

export const Description = styled.div`
  border-top: 2px solid;

  text-align: center;

  .name {
    font-weight: 500;
  }
`;

export const DescriptionText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 5px;
  :not(:last-child) {
    // border-bottom: 2px solid;
  }
`;

export const DescriptionStats = styled.ul`
  border: 2px solid;
  margin: 0;
  border-top: 0;
  padding: 0;

  list-style-type: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: #ffffff;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding-left: 25px;
    padding-right: 30px;

    .label {
      font-weight: 500;
    }

    .quantity {
      // color: #cfcfcf;
    }

    :first-of-type {
      padding-left: 10px;
    }

    :last-child {
      padding-right: 20px;
    }

    :not(:last-child) {
      border-right: 2px solid;
    }
  }
`;
