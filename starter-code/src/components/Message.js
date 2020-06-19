import React from "react";
import classNames from "classnames";

function Message(props) {
  const classes = classNames("message", props.classNames, {
    "is-info": props.isInfo,
  });

  return (
    <article class="message is-info">
      <div class="message-header">
        <p>{props.title}</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">{props.children}</div>
    </article>
  );
}

export default Message;
