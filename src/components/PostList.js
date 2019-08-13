import React from "react";

function PostList() {
  return (
    <div className="postlist">
      <div className="post">
        <div className="post-header">
          <img
            src="https://i.pravatar.cc/150?img=1"
            alt=""
            className="avatar"
          />
          <div className="info">
            <strong>Vanessa Romero</strong>
            <span>04 Jun 2019</span>
          </div>
        </div>
        <div className="post-comments">
          <div className="coment">
            <img
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
              alt=""
            />
            <p>
              <span>Diego Fernantes</span>A Rocketseat está sempre em busca de
              novos membros para o time, e
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
