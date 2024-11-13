import { useState, useEffect } from 'react';
import './App.css';

export default function Comment() {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyToIndex, setReplyToIndex] = useState(null);

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(storedComments);
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, replies: [] }]);
      setCommentText('');
    }
  };

  const handleReplySubmit = (e, index) => {
    e.preventDefault();
    if (replyText.trim()) {
      const newComments = [...comments];
      newComments[index].replies.push(replyText);
      setComments(newComments);
      setReplyText('');
      setReplyToIndex(null); // Reset reply index
    }
  };

  return (
    <div className='firstbox'>
      <h2>Comment Review</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentText}
          onChange={handleCommentChange}
          placeholder='Write your comment here...'
          rows='4'
          cols='50'
          required
        />
        <br />
        <button type='submit'>Submit Comment</button>
      </form>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <div>
              {comment.text}
              <button onClick={() => setReplyToIndex(index)}>Reply</button>
            </div>
            {replyToIndex === index && (
              <form onSubmit={(e) => handleReplySubmit(e, index)}>
                <textarea
                  value={replyText}
                  onChange={handleReplyChange}
                  placeholder='Write your reply here...'
                  rows='2'
                  cols='50'
                  required
                />
                <br />
                <button type='submit'>Submit Reply</button>
              </form>
            )}
            {comment.replies.length > 0 && (
              <ul>
                {comment.replies.map((reply, replyIndex) => (
                  <li key={replyIndex}>{reply}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}