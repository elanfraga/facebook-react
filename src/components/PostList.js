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
        <p className="post-content">
          Pessoal, alguém sabe se a Rocketseat está contratando?
        </p>
        <div className="post-comments">
          <div className="divider" />
          <div className="comment">
            <img
              src="https://avatars2.githubusercontent.com/u/2254731?v=4"
              alt=""
            />
            <p>
              <span>Diego Fernantes</span>A Rocketseat está sempre em busca de
              novos membros para o time, e geralmente ficamos de olho em quem se
              destaca no Bootcamp, inclusive 80% do nosso time de devs é
              composto por alunos do Bootcamp. Além disso, se você tem vontade
              de ensinar gravando vídeos e criando posts, pode me chamar no
              Discord! (Sério, me chamem mesmo, esse comentário é real)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostList;
