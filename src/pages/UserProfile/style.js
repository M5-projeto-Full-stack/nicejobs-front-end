import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    height: 100vh;
  }

  .options{
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0, 0, 0, 0.4);
  }

  .deleteContaine{
    width: 20rem;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px;
  }

  .deleteContaine p{
    box-sizing: content-box;
    padding: 15px;
    color: var(--color-primary);
    font-size: 1.5rem;
  }
  .buttons{
    display: flex;
    gap: 3rem;
  }
  .buttons button{
    background-color: var(--color-primary);
    color: var(--white);
    border-radius: 0px;
    height: 30px;
    width: 50px;
    font-weight: 700;
    text-transform: none;
    cursor: pointer;
    border: none;

    :hover {
      background-color: var(--color-primary-focus);
      color: var(--black);
    }
  }
`;

export const UserInfo = styled.section`
  width: 100%;
  height: 150px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  color: var( --color-primary);
  border-bottom: 1px solid var(--color-primary);

  .innerDiv{
    width: 82.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .innerDiv > .data{
    width: 30%;
    height: 80%;
  }

  .innerDiv > .bio{
    width: 30%;
    height: 80%;
    text-align: right;
  }

  div > h1{
    font-size: 18px;
  }
`;

export const ContainerInfo = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

export const ContainerService = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .tittleAndButton {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tittleAndButton > h1 {
    font-size: 25px;
    color: var(--color-primary);
  }

  .tittleAndButton > div {
    width: 200px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }

  .tittleAndButton > div > button {
    width: 90px;
    height: 35px;
    background-color: var(--color-primary);
    border-radius: 0px;
    border: none;
    color: var(--white);
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .tittleAndButton > div > button:hover {
    background-color: var(--color-primary-focus);
    transition: 144ms;
  }

  .services {
    margin-top: 20px;
    width: 100%;
    height: 230px;

    overflow: auto;

    ::-webkit-scrollbar {
      background-color: var(--grey-2);
      width: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--grey-1);
      border-radius: 5px;
    }
  }

  .services > ul {
    margin: 5px 0 5px 0;
  }

  .services > ul > li {
    display: flex;
    align-items: center;
    max-width: 600px;
    height: 50px;
    border-radius: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    cursor: pointer;
    margin: 5px 0;
  }

  .services > ul > li:hover {
    background-color: var(--grey-2);
    transition: 144ms;
  }

  .services > ul > li > div {
    width: 200px;
    padding-left: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .services > ul > li > div > h1 {
    font-size: 20px;
    color: var(--color-primary);
  }

  .services > ul > li > div > p {
    font-size: 20px;
    color: var(--color-primary);
  }

  @media screen and (min-width: 1000px) {
    width: 610px;
    height: 340px;
    margin: none;

    .tittleAndButton {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .tittleAndButton > div {
      margin: 0 0 0 0;
    }
  }
`;

export const ContainerCard = styled.section`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width:100%;
    max-width: 420px;
    height: 300px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .card > .userInfo {
    width: 90%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
  }

  .card > .userInfo > img {
    width: 60px;
  }

  .card > .userInfo > div {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
  }

  .card > .userInfo > div > h1 {
    font-size: 18px;
  }

  .card > .userInfo > div > span {
    font-size: 16px;
    color: var(--color-primary);
  }

  .card > .userInfo > div > p {
    font-size: 20px;
    font-weight: bold;
  }

  .card > p {
    width: 95%;
  }

  .card > .editButtons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .card > .editButtons > button {
    width: 67px;
    height: 30px;
    font-size: 15px;
    font-weight: bold;
    background-color: var(--white);
    color: var(--color-primary);
    border: none;
    border-radius: 5px;
    padding: 0;
    cursor: pointer;
    border-radius: 0px;
  }

  .card > .editButtons > button:hover {
    background-color: var(--color-primary-focus);
    color: var(--white);
    transition: 144ms;
  }

  @media screen and (min-width: 1000px) {
    margin: none;
    width: 340px;
    height: 340px;
  }
  img{
    max-width: 100rem;
    max-height: 20rem;
    width: auto;
    height: auto;
  }

  p span{
    color: var(--color-primary);
    margin: 20px;
  }
`;

export const ContainerFooter = styled.footer`
  width: 100%;
  height: 120px;
  border-top: 1px solid var(--color-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  .innerDiv{
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footerImages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 70px;
  }

  .footerImages > div{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .innerDiv > img {
    width: 85px;
  }

  .logo {
    width: 120px;
  }

  p {
    width: 350px;
    height: 35.5px;
    font-size: 12px;
    text-align: center;
  }

`;
