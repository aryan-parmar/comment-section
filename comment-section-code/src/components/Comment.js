import React from 'react'
import styled from 'styled-components'

export default function Comment(props) {
    let comment = props.data
    let setData = props.setData
    function upvote(){
        
    }
    return (
        <Container>
            <CommentContainer>
                <div className='upVote'>
                    <button>+</button>
                    <h4>{comment.score}</h4>
                    <button>-</button>
                </div>
                <div className='text-section'>
                    <div className='account-detail'>
                        <img src={comment.user.image.webp} />
                        <h5>{comment.user.username}</h5>
                        <h5 className='date'>{comment.createdAt}</h5>
                        <button>
                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6" /></svg>
                            <h4>Reply</h4>
                        </button>
                    </div>
                    <div className='comment'>
                        <p>
                            {comment.content}
                        </p>
                    </div>
                </div>
            </CommentContainer>
            {comment.replies.length !== 0 ? 
            <Replies>
                <div className='rep-cont'>
                    <div className='line'>
                        {comment.replies.map((item,ind) => (
                            <ReplyContainer style={ind===0 ? {marginTop: "0"}: {marginTop: "20px"}}>
                                <div className='upVote'>
                                    <button>+</button>
                                    <h4>{item.score}</h4>
                                    <button>-</button>
                                </div>
                                <div className='text-section'>
                                    <div className='account-detail'>
                                        <img src={item.user.image.webp} alt={item.user.username}/>
                                        <h5>{item.user.username}</h5>
                                        <h5 className='date'>{item.createdAt}</h5>
                                        <button>
                                            <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6" /></svg>
                                            <h4>Reply</h4>
                                        </button>
                                    </div>
                                    <div className='comment'>
                                        <p>
                                            <span>@{item.replyingTo}</span> {item.content}
                                        </p>
                                    </div>
                                </div>
                            </ReplyContainer>
                        ))}
                    </div>
                </div>
            </Replies>
            : ""}
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    `
const CommentContainer = styled.div`
    display: flex;
    border-radius: 10px;
    align-items: flex-start;
    justify-content: center;
    background: white;
    width: 100%;
    min-height: 100px;
    padding-top: 20px;
    margin-top: 20px;
    .upVote{
        height: 85px;
        background: var(--light-grey);
        width:35px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h4{
            padding: 0;
            margin: 0;
            color:var(--moderate-blue);
        }
        button{
            background: transparent;
            border: none;
            font-size: 1.5rem;
            color: var(--light-grey-blue);
        }
    }
    .text-section{
        width: 88%;
        padding-left: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        .account-detail{
            width:100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 100%;
            }
            h5{
                padding: 0 10px;
            }
            .date{
                font-weight: 500;
                color: var(--greyish-blue);
                flex: 1
            }
            button{
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                h4{
                    margin-left: 8px;
                    color: var(--moderate-blue);
                    font-family: 'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            }
        }
        .comment{
            p{
                color: var(--greyish-blue)
            }
        }
    }
`
const ReplyContainer = styled.div`
    display: flex;
    border-radius: 10px;
    align-items: flex-start;
    justify-content: center;
    background: white;
    width: 94%;
    min-height: 100px;
    padding-top: 20px;
    .upVote{
        height: 85px;
        background: var(--light-grey);
        width:35px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h4{
            padding: 0;
            margin: 0;
            color:var(--moderate-blue);
        }
        button{
            background: transparent;
            border: none;
            font-size: 1.5rem;
            color: var(--light-grey-blue);
        }
    }
    .text-section{
        width: 88%;
        padding-left: 20px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        .account-detail{
            width:100%;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img{
                height: 100%;
            }
            h5{
                padding: 0 10px;
            }
            .date{
                font-weight: 500;
                color: var(--greyish-blue);
                flex: 1
            }
            button{
                background: transparent;
                border: none;
                display: flex;
                align-items: center;
                justify-content: center;
                h4{
                    margin-left: 8px;
                    color: var(--moderate-blue);
                    font-family: 'Rubik', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                }
            }
        }
        .comment{
            p{
                color: var(--greyish-blue);
                span{
                    color: var(--moderate-blue);
                    font-weight: 500;
                }
            }
        }
    }
`
const Replies = styled.div`
    margin-top: 20px;
    .rep-cont{
        display: flex;
        align-items: center;
        justify-content: flex-end; 
        width: 100%
    }
    .line{
        border-left: 3px solid hsl(223, 19%, 93%);
        display: flex;
        align-items: flex-end;
        justify-content: center; 
        width:94%;
        flex-direction: column;
    }
`