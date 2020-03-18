import styled from 'styled-components';

export const PostWrapper = styled.div`
  width: 614px;
  margin-right: 28px;
`;

export const ListWrapper = styled.div`
  width: 614px;
`;

export const ItemWrapper = styled.div`
  margin-bottom: 30px;
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  .author {
    display: flex;
    align-items: center;
    &-avatar {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
    }
    &-name {
      margin-left: 16px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const PhotoWrapper = styled.div`
  .photo-content {
    max-width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 16px;
  .total-like {
    font-weight: 500;
  }
  .ins-user {
    margin-right: 5px;
    font-weight: 500;
    color: #000;
    text-decoration: none;
  }
  font-size: 14px;
`;

export const CommentListWrapper = styled.div`
  margin-bottom: 30px;
`;

export const CommentWrapper = styled.div`
  margin-bottom: 30px;
`;

export const CommentAreaWrapper = styled.div`
  border-top: 1px solid #efefef;
  padding: 16px;
  display: flex;
  align-items: center;
  .ant-input {
    border: none;
    color: #000;
    width: 100%;
    max-height: 80px;
    line-height: 1.25;
    font-size: 14px;
    overflow: scroll;
    resize: none;
    flex: 1;
    &:empty {
      height: 18px;
    }
    &::placeholder {
      color: #a0a0a0;
      font-size: 14px;
    }
    &:focus {
      outline: none;
    }
  }
  .ant-btn {
    width: 50px;
    background: transparent;
    color: #3897f0;
    opacity: 0.3;
    font-size: 14px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    &.active {
      opacity: 1;
    }
    &:hover,
    &:focus,
    &:active {
      background: transparent;
      outline: none;
      box-shadow: none;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  .ant-btn {
    border: none;
    padding: 8px;
    cursor: pointer;
    &:hover,
    &:active,
    &:focus {
      background: #fff;
      box-shadow: none;
      outline: none;
    }
  }
  .icon {
    width: 24px;
    height: 24px;
  }
`;
