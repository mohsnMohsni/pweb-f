import * as React from 'react';
import { styled } from '@mui/styles';
import { Box } from '@mui/material';

const FlexCenter = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: 80,
});
class ErrorPage extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    const { statusCode } = this.props;
    return (
      <FlexCenter>
        <h1>{statusCode}x</h1>
      </FlexCenter>
    );
  }
}
export default ErrorPage;
