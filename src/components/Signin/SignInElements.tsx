import styled from "@emotion/styled";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    background-image: url("https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    height:100vh;
    width:100%;
    position:fixed;
    bottom:0;
    left:0; 
    top:0;
    z-index:0;
    overflow:hidden;
    background-repeat:no-repeat;
    position:center center;
    background-size:cover;
    font-family: 'Poppins', sans-serif;


`

export const FormWrap = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
    
    @media screen and (max-width: 400px){
        height:80%
    }

`

 export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top:32px;
    text-decoration:none;
    color:#fff;
    font-weight:700;
    margin-top:8px;
    font-size:1.5rem;
    letter-spacing: 2px;
    text-transform: uppercase;

    @media screen and (max-width: 480px){
    margin-left:16px;
    margin-top:8px;
}

`       

export const FormContent = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    

    @media screen and (max-width: 480px){
    padding:10px;

`

export const FormH1 = styled.h1`
    margin-bottom:10px;
    color:#000000;
    font-size:32px;
    font-weight:600;
    text-align:center;

`
export const FormH4 = styled(FormH1)`
    font-size:16px;
    font-weight:500;
    margin-bottom:30px;
`
export const FormPassword = styled.div`
    width:100%;
    text-align:center;
    margin-left:20px;

`