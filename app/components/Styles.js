import styled from 'styled-components';
import Link from 'styled-components'
import color from 'styled-components'
// Background image



export const colors = {
  primary: '#fff',
  theme: '#be185d',
  light1: '#f3f4f6',
  light2: '#ese7eb',
  dark1: '#1f2937',
  dark2: '#4b5563',
  dark3: '#9ca3af',
  red: '#dc2626',
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => props.color ? props.color : colors.theme};
  padding: 5px;
  margin-bottom: 20px;
`;

export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => props.color ? props.color : colors.primary};
  padding: 5px;
  margin-bottom: 25px;import logo from '../assets/logo.avif';

`;

export const Avatar = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-image: url(${props => props.Logo});
  background-position: center;
  background-size: cover;
  margin: auto;
`;


export const StyledButton = styled(Link)`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.primary};
  border-radius: 25px;
  color: ${colors.primary}; 
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.3s;

  &:hover{
      background-color: ${colors.primary};
      color: ${colors.theme};
      cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 25px;
`;

export const StyledTextInput = styled.input`
  width: 100%;
  max-width: 288px;
  padding: 12px;
  padding-left: 45px;
  font-size: 17px;
  outline: none;
  letter-spacing: 1px;
  color: #ffffff;
  background-color: #ffffff79;
  border: none;
  display: block;
  border-radius: 10px;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;

  ${(props) => props.invalid && `background-color: #ff000060;  color: ${colors.primary};`}

  &:focus{
    background-color: ${color.dark2};
    color: ${color.primary};
  }
  `;

export const StyledLabel = styled.p`
  text-align-last: left;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;

export const StyledFormArea = styled.div`
  text-align: center;
  padding: 45px 55px;
  background-color: transparent;
`;

export const StyledFromButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  font-size: 16px;
  border: 3px solid ${colors.theme};
  border-radius: 25px;
  color: ${colors.theme}; 
  transition: ease-in-out 0.3s;

  &:hover{
      background-color: ${colors.theme};
      color: ${colors.primary};
      cursor: pointer;
  }
`;


export const ErrorMsg = styled.div`
  font-size: 11px;
  color: ${colors.red};
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
`;

export const ExtraText = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  padding: 2px;
  margin-top: 10px;
`;



export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 21px;
  top: 31px;
  left: 13px;
  ${(props) => props.right && `right: 20px;`};
  ${(props) => props.right && `left: 20px;`}
`;