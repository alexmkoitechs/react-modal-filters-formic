import Form from '../Form';

import * as Styled from "./styled";

const Modal = ({ isOpen, setFilters, handleDisplayModal }) => (
  <>
    <Styled.Container $isOpen={isOpen} onClick={() => handleDisplayModal(false)}>
    
      <Styled.ContentContainer $isOpen={isOpen} onClick={e => e.stopPropagation()}>
        <Styled.Header>
          <span onClick={() => handleDisplayModal(false)}>x</span>
        </Styled.Header>
        <Form setFilters={setFilters} onClose={handleDisplayModal} />
      </Styled.ContentContainer>
  
    </Styled.Container>
  </>
);

export default Modal;

