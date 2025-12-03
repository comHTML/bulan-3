function ProfileCard({ name, photo, bio, skills }) {
const cardStyle = {
border: "1px solid #ddd",
padding: "16px",
borderRadius: "12px",
width: "260px",
textAlign: "center",
boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
};


const imgStyle = {
width: "100px",
height: "100px",
borderRadius: "50%",
objectFit: "cover",
marginBottom: "12px"
};


return (
<div style={cardStyle}>
<img src={photo} alt="profile" style={imgStyle} />
<h2>{name}</h2>
<p>{bio}</p>
<h4>Skills:</h4>
<ul>
{skills.map((skill, index) => (
<li key={index}>{skill}</li>
))}
</ul>
</div>
);
}

export default ProfileCard;