import '../styles/App.css';
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";

function App() {
  return (
    <div className="App">
      <Header />
      <Book 
        title="The Book Title"
        author="Book Author"
        url="https://www.amazon.com/Girl-Who-Played-Fire-Millennium/dp/030745455X/ref=rtpb_d_sccl_2/135-4734384-8440430?pd_rd_w=9ZmaF&content-id=amzn1.sym.1683dfe1-057b-4d4c-8805-d9459571c690&pf_rd_p=1683dfe1-057b-4d4c-8805-d9459571c690&pf_rd_r=PN5ZRX07PDQ46F6W833Q&pd_rd_wg=MSjyv&pd_rd_r=6a1ce142-a64f-4722-90ff-74c3536a99a9&pd_rd_i=030745455X&psc=1"
        img="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1351778881i/5060378.jpg"
      />
      <Footer />
    </div>
  );
}

export default App;
