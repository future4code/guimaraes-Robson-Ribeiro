import styled from "styled-components";

export const Photo = styled.div`
    display: flex;
    position: relative;

    grid-area: IMG;

    img{
        width: 500px;
        max-height: 700px;
        box-shadow: 1px 1px 2px 5px rgba(228, 207, 207, 0.3);
        border-radius: 30px;
    }

    .match-info{
        display: flex;
        flex-direction: column;
        position: absolute;

        /* margin: 10px; */
        
        /* border: 1px solid red; */
        height: 100%;
        width: 100%;

        justify-content: end;

        .match-background{
            background-color: #1C1C1C;
            box-shadow: 30px 30px 60px 5px #bebebe, -20px -20px 30px #ffffff;
            
            border-radius: 10px;

            .info-users{
                display: flex;
                /* border: 1px solid white; */
                margin: 10px;

                color: white;
            }

            .info-bio{
                display: flex;
                /* border: 1px solid white; */
                margin: 10px;
                color: white;
            }

        }
       
    }


`;