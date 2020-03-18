import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  .icon {
    width: 22px;
    margin-right: 22px;
    &-avatar {
      border-radius: 50%;
      width: 22px;
      height: 22px;
      object-fit: cover;
      display: inline-block;
    }
  }
`;
