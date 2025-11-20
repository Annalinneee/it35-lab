import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import { useHistory } from 'react-router';

const Logo = "https://d2j6dbq0eux0bg.cloudfront.net/images/81147760/3537219765.png";
const BgImage = "https://blog.janbox.com/wp-content/uploads/2021/02/Best-Anime-Online-Store-1.png";

const LandingPage: React.FC = () => {
  const history = useHistory();

  const goToLogin = () => {
    history.push('/login');
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Short description 1', price: '$10', img: 'https://down-ph.img.susercontent.com/file/sg-11134201-7qvd7-ljf8g8x699fxef' },
    { id: 2, name: 'Product 2', description: 'Short description 2', price: '$15', img: 'https://i.redd.it/s0yoar7uw1m21.jpg' },
    { id: 3, name: 'Product 3', description: 'Short description 3', price: '$20', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCLjizdZi5wd-trJB3nzwZ2AETUklwSlyOA&s' },
    { id: 4, name: 'Product 4', description: 'Short description 4', price: '$25', img: 'https://down-ph.img.susercontent.com/file/cn-11134207-7r98o-lq4ggixmi4hh82' },
    { id: 5, name: 'Product 5', description: 'Short description 5', price: '$30', img: 'https://animemangastore.com/wp-content/uploads/2022/07/Anime-Manga-Store-1-800x800.png' },
    { id: 6, name: 'Product 6', description: 'Short description 6', price: '$12', img: 'https://down-ph.img.susercontent.com/file/cn-11134207-820l4-mf6sum7vh24p8c' },
    { id: 7, name: 'Product 7', description: 'Short description 7', price: '$18', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3vJWPqIH_adi5In4ItDyZ4bWUMQHbP4GBg&s' },
    { id: 8, name: 'Product 8', description: 'Short description 8', price: '$22', img: 'https://ae01.alicdn.com/kf/S6c423eb927934bea957681ead59b675a1.jpg' },
    { id: 9, name: 'Product 9', description: 'Short description 9', price: '$28', img: 'https://yvolve.shop/cdn/shop/products/Tasse-Ninotaku-AnimeSaveUnvierse-Kombi.jpg?v=1734288457&width=533' },
    { id: 10, name: 'Product 10', description: 'Short description 10', price: '$35', img: 'https://hodinkee-production.s3.amazonaws.com/uploads/images/c6021dff-449c-429b-b6a7-21b41d6420fd/sininen_720x720.png' },
    { id: 11, name: 'Product 11', description: 'Short description 11', price: '$28', img: 'https://img.kwcdn.com/product/1f66680540/4b96adf6-be28-4fbe-a467-9bcb9e0f95c8_1200x1200.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp' },
    { id: 12, name: 'Product 12', description: 'Short description 12', price: '$35', img: 'https://image.made-in-china.com/2f0j00BzFogaUdgIpV/Anime-Posters-One-Piece-Luffy-3D-Lenticular-Flip-Picture-Room-Decoration-Art-Mural-Home-Decor-Without-Frame-.webp' },
  ];

  return (
    <IonPage>
      <IonContent fullscreen>
        {/* HERO SECTION */}
        <div
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "60px 20px",
            textAlign: "center",
            color: "white",
            backdropFilter: "brightness(0.5)"
          }}
        >
          {/* LOGO */}
          <img
            src={Logo}
            alt="Kawaii Haven Logo"
            style={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              marginBottom: "20px",
              background: "rgba(255,255,255,0.6)",
              padding: "10px",
              borderRadius: "20px"
            }}
          />

          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>
            Welcome to Kawaii Haven
          </h1>

          <p style={{ fontSize: "1.2rem", marginTop: 10 }}>
            Adorable Finds for Every Heart
          </p>

          <IonButton
            expand="block"
            style={{ marginTop: "20px", width: "200px", marginLeft: "auto", marginRight: "auto" }}
            color="light"
            onClick={goToLogin}
          >
            Get Started
          </IonButton>
        </div>

        {/* PRODUCTS */}
        <section
          style={{
            padding: "40px 20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px"
          }}
        >
          {products.map(product => (
            <IonCard key={product.id} style={{ width: "220px" }}>
              <IonImg src={product.img} />
              <IonCardHeader>
                <IonCardTitle>{product.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{product.description}</p>
                <p style={{ fontWeight: "bold" }}>{product.price}</p>
                <IonButton expand="full" color="primary" onClick={goToLogin}>
                  Buy Now
                </IonButton>
              </IonCardContent>
            </IonCard>
          ))}
        </section>

        {/* FOOTER */}
        <footer style={{ padding: "30px 20px", background: "#111", color: "white", textAlign: "center" }}>
          <p>© 2025 Kawaii Haven. All rights reserved.</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
