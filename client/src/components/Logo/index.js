import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const LogoWrapper = styled(Link)(
  ({ theme }) => `
        color: ${theme.palette.text.primary};
        padding: ${theme.spacing(0, 1, 0, 0)};
        display: flex;
        text-decoration: none;
        font-weight: ${theme.typography.fontWeightBold};
`
);
const LogoImage = styled('img')(
  () => `
        height: 4rem;
        object-fit: contain;
`
);

function Logo() {
  return (
    <LogoWrapper to="/overview">
      <LogoImage src="/static/images/logo/logo.svg" />
    </LogoWrapper>
  );
}

export default Logo;
