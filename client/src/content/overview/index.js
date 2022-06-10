import { styled } from '@mui/material/styles';

const GalaxyPaper = styled('div')(
  () => `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/static/images/placeholders/covers/galaxy.png);
`
);

function Overview() {
  return (
    <GalaxyPaper>
      <div style={{ border: '1px solid red' }}>NNavBard</div>
      <div style={{ border: '1px solid red' }}>World Map</div>
    </GalaxyPaper>
  );
}

export default Overview;
