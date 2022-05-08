import React from 'react';
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
import "./Loading.css";

const override = css`
  display:block;
  margin: 0px auto;
  border-color: "#29B81C";
`;

const Loading = (loadingStatus) => {
    return (
        <div className='loading'>
            <BeatLoader color={"#29B81C"} loading={loadingStatus} css={override} size={20} />
        </div>
    );
};

export default Loading;