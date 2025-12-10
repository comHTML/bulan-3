import './App.css'





function App() {


  return (
    <>
      <div >



  <hr />
  <Greeting name="Budi" />


    <hr />
    <ProductCard productName="Laptop Acer" price={7500000} stock={10} isAvailable={true} />
    <ProductCard productName="Mouse Wireless" price={150000} />


    <hr />
    <Card>
    <h3>Ini adalah Card dengan teks</h3>
    </Card>


    <Card>
    <img src="https://via.placeholder.com/150" alt="Sample" />
    </Card>


    <Card>
    <button>Klik Saya</button>
    </Card>


    <hr />
    <Comment
src="https://via.placeholder.com/60"
name="Raihan"
text="Ini adalah komentar dari saya!"
/>
</div>
    </>
  )
}

export default App
