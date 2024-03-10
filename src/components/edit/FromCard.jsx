import { CardContainer } from './CardContainer';
import Profile from 'components/commons/Profile';
import FromTitle from 'components/commons/cards/FromTitle';
import CardMessage from 'components/commons/cards/CardMessage';
import Date from 'components/commons/cards/Date';
import styled from 'styled-components';
import { useState } from 'react';
import CardModal from 'components/commons/modal/CardModal';
import IconButton from 'components/commons/buttons/IconButton';
import { useDeleteMessageQuery } from 'hooks/queries/edit/useDeleteMessageQuery';
import { deleteAlert } from 'utils/deleteAlert';

/**
 *
 * @param {object} props
 * @param {object} props.profileImageURL
 * @param {object} props.sender
 * @param {object} props.relationship
 * @param {object} props.content
 * @param {object} props.formattedDate
 * @param {object} props.isDelete
 * @param {object} props.messageId 삭제 요청을 보낼때 필요한 메세지 아이디
 * @param {object} props.font
 * @returns
 */
const FromCard = ({
  profileImageURL,
  sender,
  relationship,
  content,
  formattedDate,
  isDelete,
  messageId,
  font,
  postId,
}) => {
  const [showModal, setShowModal] = useState(false);
  const deleteMessage = useDeleteMessageQuery(messageId, postId);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleDelete = e => {
    e && e.stopPropagation();
    deleteAlert({
      title: '해당 메세지를 삭제하시겠습니까?',
      deleteMutaion: deleteMessage,
      Id: messageId,
      onSuccess: () => window.location.reload(),
    });
  };
  const handleClose = () => {
    setShowModal(false);
    isDelete && handleDelete();
  };
  return (
    <>
      <CardContainer onClick={handleClick}>
        <Header>
          <FlexContainer>
            <Profile src={profileImageURL} $iscard="true" />
            <FromTitle sender={sender} relationship={relationship} />
          </FlexContainer>
          {isDelete && (
            <IconButton icon={'delete'} Delete onClick={handleDelete} />
          )}
        </Header>
        <Hr />
        <Content>
          <CardMessage font={font} message={content} $ismodal={false} />
          <Date date={formattedDate} $ismodal={false} />
        </Content>
      </CardContainer>
      <CardModal
        font={font}
        showModal={showModal}
        handleClose={handleClose}
        isDelete={isDelete}
        profileImageURL={profileImageURL}
        sender={sender}
        relationship={relationship}
        content={content}
        formattedDate={formattedDate}
      />
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Hr = styled.hr`
  height: 1px;
  border: none;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.gray200};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 13.6rem;

  @media ${({ theme }) => theme.breakpoint.mobile} {
    height: 9.6rem;
  }
`;
export default FromCard;
