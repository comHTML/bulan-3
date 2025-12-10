function Avatar({ src }) {
return (
<img
src={src}
alt="avatar"
style={{ width: "60px", height: "60px", borderRadius: "50%" }}
/>
);
}


function UserInfo({ name }) {
return <h4>{name}</h4>;
}


function CommentText({ text }) {
return <p>{text}</p>;
}


function Comment({ src, name, text }) {
return (
<div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
<Avatar src={src} />
<div>
<UserInfo name={name} />
<CommentText text={text} />
</div>
</div>
);
}

export default {Avatar, UserInfo, CommentText, Comment};
