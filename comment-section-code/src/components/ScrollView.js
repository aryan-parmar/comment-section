import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import json from '../data.json'
export default function ScrollView() {
    let [data, setData] = React.useState(json)
    return (
        <>
            <ScrollContainer>
                {data.comments.map(items => (
                    <Comment data={items} setData = {setData}/>
                ))}
            </ScrollContainer>
            <AddComment>
                <img src={data.currentUser.image.webp} alt={data.currentUser.username} />
                <textarea placeholder='Add a comment...'>

                </textarea>
                <button>
                    SEND
                </button>
            </AddComment>
        </>
    )
}
const ScrollContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    height:80vh;
    width: 45%;
    flex-direction: column;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }
    `
const AddComment = styled.div`
    height: 10vh;
    width: 45%;
    background: white;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    align-items: flex-start;
    padding:20px;
    justify-content: space-between;
    img{
        height: 60%;
    }
    textarea{
        flex:0.95;
        height: 75%;
        font-family: 'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        padding: 8px 20px;
        border-radius: 10px;
        resize: none;
        border: 3px solid hsl(223, 19%, 93%);
        outline: none;
        :focus{
            border: 3px solid var(--moderate-blue);
        }
    }
    button{
        width: 80px;
        height: 40px;
        border: none;
        border-radius: 10px;
        background: var(--moderate-blue);
        color: white;
        font-weight: 700;
    }
`