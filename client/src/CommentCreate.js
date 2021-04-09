import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export default function CommentCreate({ postId }) {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='comment'>
            New Comment
            <input
              id='comment'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='form-control'
            />
          </label>
        </div>
        <br />
        <button
type='submit'
className='btn btn-primary'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

CommentCreate.defaultProps = {
  postId: ""
};

CommentCreate.propTypes = {
  postId: PropTypes.string
};
