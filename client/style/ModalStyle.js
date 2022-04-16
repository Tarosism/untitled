import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(85, 85, 85, 0.7);
  z-index: 20;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /* display: grid; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 20rem;
  height: 60%;
  padding: 2rem 3rem;
  background: #303030;
  border-radius: 10px;
  text-align: center;
  z-index: 21;
`;

export const ModalInput = styled.input`
  width: 95%;
  height: 3rem;
  border-radius: 5px;
  padding-left: 1rem;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.38);
  color: rgba(255, 255, 255, 0.87);
`;

export const ExBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExBtn = styled.span`
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
`;
