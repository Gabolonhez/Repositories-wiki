import styled from 'styled-components';

export const ItemContainer = styled.div `
    margin-top: 30px;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        font-size: 32px;
        color: #FAFAFA; 
    }
    p {
        font-size: 12px;
        color: #FAFAFA60;
    }

    a {
        color:rgb(37, 185, 81);
    }

    a.remove {
        color: #FF0000;
        
    }

    a:hover {
        color: #000;
    }

    hr {
        color: #FAFAFA60;
    }

`