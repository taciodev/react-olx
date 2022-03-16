import styled from 'styled-components';

export const HeaderArea= styled.div`
  background-color: #FFF;
  height: 60px;
  border-bottom: 1px solid #CCC;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
  }

  a {
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    flex: 1;
    height: 60px;

    .logo-1,
    .logo-2,
    .logo-3 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-1 { color: #F00; }
    .logo-2 { color: #0F0; }
    .logo-3 { color: #00F; }
  }

  nav { 
    padding-top: 10px;
    padding-bottom: 10px;

    ul,li {
      padding: 0px;
      margin: 0px;
      list-style: none;  
    }
    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px; 
      margin-right: 20px; 

      a, button {
        color: #000;
        font-size: 14px;
        background: none;
        border: 0px;
        outline: none;

        &:hover {
          color: #999;
        }

        &.button {
          background-color: #FF8100;
          border-radius: 4px;
          color: #FFF;
          padding: 5px 10px;

          &:hover {
            background-color: #E57706;
          }
        }
      }  
    }         
  }
`; 