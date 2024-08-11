import styled from 'styled-components';

export const Input=styled.input`
background-color: #eee;
border: 1px solid #DCDCDC;
width: 100%;
padding: 1.3% 1.8%;
border-radius: 7px;
box-sizing: border-box;
margin: 1% 0%;

&:focus{
outline: none;
border: 1px solid black;
}
`;

export const Button=styled.button`
background-color: #800000;
border: 1px solid #800000;
color: white;
font-size: 12px;
font-weight: bold;
padding: 2.5% 15.5%;
border-radius: 20px;
transition: background-color 0.3s ease; 

&:hover{
background-color:black;

}
`;

export const GhostButton=styled.button`
background-color: black;
border: 3px solid #800000;
color: white;
font-size: 12px;
font-weight: bold;
padding: 1.5% 13.5%;
border-radius: 20px;
transition: background-color 0.3s ease; 

&:hover{
background-color:#800000;

}
`;