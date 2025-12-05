
function MyButton () {
    return (
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
           <p>
            Clik me! 🤪
          </p>
          </button>
        </div>
        
    );
};

export default MyButton;