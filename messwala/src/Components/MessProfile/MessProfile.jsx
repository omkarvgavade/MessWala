import React from 'react'
import styled from 'styled-components'
import { MainLayOut } from '../../Styles/layouts'
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
function MessProfile() {

    return (
        <MainLayOut>
            <MessProfileStyled>
                <div className="MessImageDiv">
                    <div className="imageDiv">
                        <img src="https://b.zmtcdn.com/data/pictures/0/19625810/63c4d74849093f2a0493198c1dc4e302.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" />
                    </div>
                    <div className="headingInfo">
                        <div>
                            <h1>Fozzie's Pizzaiolo</h1>
                        </div>
                        <div>
                            <Rating name="disabled" value={2} disabled />
                            <span>351 reviews</span>
                        </div>
                    </div>
                </div>
                <div className="speciality">
                    <div>Continental, Mexican, Fast Food, Desserts, Beverages</div>
                    <div>Navrangpura, Ahmedabad</div>
                </div>
                <div className="bio">
                    <h2>Things, you can't ignore.....</h2>
                    <p>The difference between them is that px is a fix-size unit. If you say that this font is 16px, it is absolutely 16px wherever you put it. It's just that other devices may display it differently. A 16px font on your computer monitor might be displayed differently on a 16px font on your mobile phone.</p>
                </div>
                <div className="btns">
                    <Button variant="contained" color="primary"><AddIcon />Add review</Button>
                    <Button variant="contained" color="secondary"><FavoriteIcon />Add to favourites</Button>
                    <Button variant="outlined" color="primary"><ShareIcon />Share</Button>
                </div>
            </MessProfileStyled>
        </MainLayOut>
    )
}

const MessProfileStyled = styled.div`
width: 100%;
.MessImageDiv{
    width: 100%;
    display: grid;
    grid-template-columns:1fr;
    grid-template-rows: 5fr 1fr;
    height: 30rem;
    grid-gap: 1rem;
    .imageDiv{
        width: 100%;
        height: 25rem;
        img{
            height: 100%;
            width: 100%;

        }
    }
    .headingInfo{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        &>div:nth-child(1){
           display: flex;
           justify-content: start;
           align-items: center;
           
        }
        &>div:nth-child(2){
                display: flex;
    justify-content: center;
    align-items: center;
   &> span:nth-child(2){
        color: darkblue;
        font-size: 12px;
        font-weight: bold;
    }

        }
    }
}
.speciality{
    padding-left:1rem;
    &>div{
        font-size: 14px;
    }
        &>div:nth-child(1){
            color: red;
        }

}
.bio{
    height: auto;
    padding: 1rem 16rem;
    display:grid;
    grid-template-columns: 1fr;
    grid-gap:1rem;
}
.btns{
    margin-top: 1rem;
    display: flex;
    justify-content:space-between;
    padding-right:40rem;
}
`

export default MessProfile
