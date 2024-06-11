/* eslint-disable react/prop-types */
import clsx from "clsx";

const Message = ({ message, index }) => {
  const messageWrap = clsx("message__wrap", { second: index === 0 });
  const messageDate = clsx("message__date", { second: index === 1 });
  const messageText = clsx("message__text", { second: index === 1 });
  const messagePic = clsx("message__pic", { second: index === 1 });
  const messagePicImg = clsx("message__pic-img", { second: index === 1 });
  const messagePicComment = clsx("message__pic-comment", {
    second: index === 1,
  });

  return (
    <div className="message">
      <div className={messageWrap}>
        <div className={messageDate}>
          <span className="message__date-span">{message.hours}:</span>
          <span className="message__date-span">{message.minutes}</span>
        </div>
        {message.type === "text" ? (
          <p className={messageText}>{message.value}</p>
        ) : (
          <div className={messagePic}>
            <img className={messagePicImg} src={message?.value} alt="" />
            {message?.comment && (
              <p className={messagePicComment}>{message.comment}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
