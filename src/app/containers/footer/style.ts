"use client"
import styled from "styled-components";

export const footer = styled.section`
    margin-top: 5rem;

    bottom: 0;
    width: 100%;

    .footer__container{
    display: flex;
    flex-direction: column;
    gap: 40px;

        &__info{
        max-width: 1080px;
        width: 98%;
        margin: 0 auto;

            &__items{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                
                @media(max-width: 768px){
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                    
                }



                &__item{
                    display: flex;
                    color: rgb(255, 255, 255);
                    align-items: center;
                    gap: 24px;

                                    
                @media(max-width: 768px){
                
                    width: 251px;
                  
                    
                }
                  

                    h3{
                        font-size: 16px;
                        font-weight: 100;
                    }

                    span{
                       
                        width: 60px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        
                        
                        border-radius: 50%;
                    }
                }

            }
        }

        &__sociais{
            z-index: 1;
            padding-top: 1rem;
            display: flex;
            justify-content: center;
        }
    }
`