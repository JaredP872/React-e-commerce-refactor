import "../styles/MainContent.css";

const MainContent = () => {
  return (
    <main id="storeContainer">
      <section className="gifts">
        <div className="cards">
          <img
            src="https://www.zdnet.com/a/img/resize/8b5a12b9b5fd58fd1943604699993f1e6469be19/2023/08/22/71f6e0b9-3405-43ea-972c-202a7c8bf615/best-phones-zdnet-thumb-image.jpg?auto=webp&fit=crop&height=675&width=1200"
            alt="Gift 1"
          />
        </div>
        <div className="cards">
          <img
            src="https://static.independent.co.uk/2024/09/06/13/Best-android-phones-hero-indybest.jpg?width=1200"
            alt="Gift 2"
          />
        </div>
        <div className="cards">
          <img
            src="https://d30wkz0ptv5pwh.cloudfront.net/media/magefan_blog/mobile_phone.jpg"
            alt="Gift 3"
          />
        </div>
        <div className="cards">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoe3krHGi2IJyS0fexZdyh9lBM5NC6A7cjUT8B6R05WffkuT8kToXWRrg84oTPIUr8U1w&usqp=CAU"
            alt="Gift 4"
          />
        </div>
      </section>

      <section className="special-items">
        <div className="cards">
          Here at Corp Technologies, your imagination is the limit!
        </div>
        <div className="cards">
          We offer exclusive mobile devices that will transform your reality
          into more than you could ever imagine!
        </div>
      </section>
    </main>
  );
};

export default MainContent;
