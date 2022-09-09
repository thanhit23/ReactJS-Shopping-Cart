import styled from 'styled-components';

const Wrapper = styled.li`
  width: 100%;
  height: 3em;
  display: flex;
  align-items: center;
  position: relative;
  border-top: 1px solid #eee;
  justify-content: center;
  color: #fff;

  &:first-child {
    border-top: none;
  }
`;

export default Wrapper;
