import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
  return(
    <div className='tweet'>
      <Avatar/>
      <div className='content'>
        <NameHandle/>
        <Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar(){
  return(
    <img
      src='https://www.gravatar.com/avatar/0738a3da196fe8f09f4c19d81560f0d1'
      className='avatar'
      alt='avatar'
    />
  )
}

function NameHandle(){
  return(
    <span className='name-with-handle'>
      <span className='name'>Your Name</span>
      <span className='handle'>@yourhandle</span>
    </span>
  )
}

function Message(){
  return(
    <div className='message'>
      Message less than 140 characters
    </div>
  )
}

const Time = () => (
  <span className='time'>3h ago</span>
);
const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);
const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"/>
);
const LikeButton = () => (
  <i className="fa fa-heart like-button"/>
);
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);


ReactDOM.render(
  <Tweet/>,
  document.querySelector('#root')
);

