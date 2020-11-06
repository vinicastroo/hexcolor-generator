import styled from 'styled-components';
import { lighten } from 'polished';

interface PropsContent {
  color: string;
}

interface PropsColor {
  color: string;
  isLighten: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div<PropsContent>`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  width: 100%;
  max-width: 660px;
  padding: 40px;

  display: flex;
  flex-direction: column;

  align-items: center;
  position: relative;

  h1 {
    color: #495464;
    margin-top: 48px;
    text-transform: uppercase;
  }

  span {
    padding: 8px 16px;
    font-weight: 500;
    font-size: 24px;
    margin: 16px 0;

    transition: color 0.5s;

    display: flex;
    align-items: center;
    color: ${props => props.color};

    svg {
      cursor: pointer;
      color: ${props => props.color};
      margin-left: 16px;
    }
  }

  button {
    width: 100%;
    padding: 16px 0;
    margin-top: 1px;
    border: 0;
    background: #495464;
    color: #f1f6f9;
    font-weight: 500;
    font-size: 22px;
    border: 1px solid #eee;

    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;

    &:hover {
      background: ${lighten(0.1, '#495464')};
    }
  }
`;

export const Color = styled.div<PropsColor>`
  position: absolute;
  background: ${props => props.color};
  transition: background-color 0.5s;

  display: flex;

  padding: 40px;
  border-radius: 50%;
  top: 0;
  margin: 0;
  margin-top: -85px;

  svg{
    color: ${props => props.isLighten ? '#495464' : '#ffffff'}
  }
`;
