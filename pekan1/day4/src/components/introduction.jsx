
// ini adalah anak(children) dari App.jsx
function Introduction (props){
    return (
        <div> 
            <h1> Selamat Datang</h1>
            <p>Halo saya adalah: {props.name}</p>
        </div>
    );
}

export default Introduction;