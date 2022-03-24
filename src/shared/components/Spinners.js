import { RingLoader, DotLoader } from 'react-spinners';
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #FF6F00;
`;
const color = "#F57F17"

export const ringLoader = (loading) => (
    <RingLoader color={color} loading={loading} css={override} size={150} />
);

export const dotLoader = (loading) => (
    <DotLoader color={color} loading={loading} css={override} size={150} />
);