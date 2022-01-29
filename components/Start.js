import React from 'react'
// import styled, { css } from 'styled-components/macro'
// import Button from './Button';

// const Intro = styled.div`
//   margin-top: 8em;
//   text-align: center;
// `;

// const btnCSS = css`
//     margin-top: 2em;
// `;


const Start = ({props}) => {

    const startQuiz = () => props(true)
 
    return (
        <div>
            <h1>Take the quiz.</h1>
            <h4>Whenever, you want.</h4>
            <button onClick={startQuiz} >Begin</button>
        </div>
    )
}

export default Start
