import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding-left: 5px;
  margin-bottom: 12px;

  .profile {
    padding-left: 5px;
    &-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    &-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-left: 14px;
      justify-content: center;
    }
    &-username {
      font-weight: 500;
      font-size: 14px;
    }
    &-fullname {
      color: #999;
      font-size: 12px;
      line-height: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;

export const StoryWrapper = styled.div`
  background: #fff;
  margin-top: 4px;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 4px 16px;
  .story {
    &-header {
      margin-top: 12px;
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
      &-left {
        color: #999;
        font-size: 14px;
      }
      &-right {
        color: #000;
        font-size: 12px;
        font-weight: 500;
      }
    }
    &-list {
      height: 180px;
      overflow-y: scroll;
    }
    &-item {
      margin-bottom: 10px;
      display: flex;
    }
    &-info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      align-items: flex-start;
      justify-content: center;
    }
    &-avatar-wrap {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: double 2px transparent;
      background-image: linear-gradient(white, white),
        radial-gradient(circle at top left, purple, orange, red, yellow);
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    &-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #fff;
      object-fit: cover;
    }
    &-username {
      font-weight: 500;
      font-size: 12px;
    }
    &-active {
      text-transform: uppercase;
      font-size: 10px;
      color: #999;
    }
  }
`;
