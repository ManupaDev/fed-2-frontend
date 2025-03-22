import { useState } from 'react';
import SimpleProductCard from './SimpleProductCard';
import CategoryButton from './CategoryButton';

function TrendingSection() {
  const categories = [
    { id: 1, name: "SHORTS" },
    { id: 2, name: "HATS" },
    { id: 3, name: "JACKETS" },
    { id: 4, name: "SHOES" },
    { id: 5, name: "T-SHIRT" }
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState(4); // Default to SHOES

  const trendingProducts = [
    {
      id: 1,
      name: "Casual Shoe",
      price: 225,
      image: "https://s3-alpha-sig.figma.com/img/5a88/e596/2507976b1988e6d9a08599fcba5247bd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h3Os3JMkQHL8CkCVZLAIm8dwykoMkw-vI5WEzjmnrCNcLwqQNSEcQ3Zc1f3XDUFCWF1iTOk3r40kUX-ETGy2qQZQAr2t1f-FgG9ze01fGEWoHya9pVt46mPXrQ5piz~-DeczmJjuRPE0es~uHiGTCXmRW841YbDnD9tx-1Yl7sQk8SawTPxkXW8f8z94QE5iQPhZZjiakm1HtIYNU2Ix5oEM2GjbJoXoiQO9clLiGRBd2HZLr851izE12yT8TTizWxl8xZ4AVinjkfAlUtunqDp56Y6lcSBAuYDlq-1-iH44uyq2Es~PjdqETXJUQ0aIqVNZyLPOTT6eCAXfEvfhTw__",
      categoryId: 4, // SHOES
    },
    {
      id: 2,
      name: "Skateboard Shoe",
      price: 125,
      image: "https://s3-alpha-sig.figma.com/img/0b42/775b/5c482fd10ff96fad137ae5ca5aa7a561?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KozTXE0AeFqtVNsEALbXT5V5eo1CiQ9ZjIvMPlsqpqYqurCb4pxJg0fQufcjrWAkKd2F6IqhIRPGVkdpoNCdN7PTVQNpnOqnogaNpCiO4lcrKClk-2E6frvviqcA8uoTcDgPrcMpyrUAcMtRZ4HUMTj4NoCl949E939kZ1M0gYZ-6bQ16aEMjxDBNDMUQW5RbaFrk-MoCzZAXdY0ZwX1U1OlyX~sz9-okcuWWMACDalXj6DajlTB7ILHSH9EmWw6BPu92lsEwLSdXTeYCSezhfl3Yl5DhCM-dtatFBhNlATpsBaHBkxpAJArcE3KKazbMhw6MTuoPzgmcBbSA5WL3g__",
      categoryId: 4, // SHOES
    },
    {
      id: 3,
      name: "Air Skateboard Shoe",
      price: 125,
      image: "https://s3-alpha-sig.figma.com/img/7150/a0e9/02536ab1a554d315fc11f4ef6f9c1302?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qGwc2JFlK1AGD62gN1dTs92wPxLLw4sKkmkUc2yqh-GFSlibIA0U93zl9cTMDe4HQtuR0A3XCn1KALI8Dm6HHrtFMIxGaJNu5WZ3G-C9w5nkA2CpyPkoY9vpM8NAmzMYmC8dOcoUm-g9jiGr-4xGKa1JzAlyhRlUfjSKs9rnLYXlWwh7wwQMNxp8UKU~B7lZ5rv0uDXLM1G~Hsk55Vgcxmnftd22jIlNzNgc8NZxCCW5~uC0T2DoSJ7UyizDyB-eA5KbrbKqmgyy2a47VvATMajGaCG531j3QNhLjrlapzzqhl44rzG5tAQt6OrOEdnjb1rdLBcbKiSl6aYoQ6i1qw__",
      categoryId: 4, // SHOES
    },
    {
      id: 4,
      name: "High Sole Skateboard Shoe",
      price: 125,
      image: "https://s3-alpha-sig.figma.com/img/c8c2/25ce/10fd34a19ed897401decf4c2dd4806d5?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PnAMdpQA17zB9YGUW2MtkAg8ipxrelMkXv9gvro30WfgIHkV~kuLJ~DODHWfBOiKAfU0T7uHaSprO1~y2~FXxi1Dz-Or0JMnCZJ54C1UO9uBJcKpU~MiBqg7h6QOTrhGfG-nYBSvEfH8m1op9SLGjmqTPyHieDLH6jmkiPa1F8GFDF2ZAwGF3adY9Syo1JgAUsKm4T1fBCxosnAxmmbGvOo9RuEmCEzIno0d2~e4Q4rX6vDgSp2PHhVxK~b4evtgKqiX~AfQ7IE8nvko-vyKX5rbgvErgU3~4QwHsByINZRGcO4uE9DPPZL2zRNoeXhBNX1z-2jSeTGJeov~bsgGNQ__",
      categoryId: 4, // SHOES
    },
    {
      id: 5,
      name: "Basket Shoe",
      price: 125,
      image: "https://s3-alpha-sig.figma.com/img/6202/a986/df950869c406241f2f48f416d0807241?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PkhuZPbPFup~~e9NdNyYAVewRFMFuiY~OqNjsLjZ8T-G-1Iv~w2LkkQn0NQ-D7FUGwz4ga9tVtxE47FPkLRGJzZ0M73BUO2h~RWH5KV91iU4EF42WS5uLfnU0YQxzgZdxyJn6ArNI4G1zmAxe2HBsIaUM1r-giyGhF5nGPS2d-fF7dT5w6CkE0BMlWiLZCat7Xh9EVKcknAOAf57F6cPsdusAAglZb~ILb73BuNmH8Zcbk2whoYUvoJHxSCGFeAIaHpkE0XxA5rQ9TT2p5QSLLf7AbU~i6YsnSYijr2lwe7IeH8YXIrgbvIioTsS32tbQjI~qJW4q~vI3HCE8jdhDA__",
      categoryId: 4, // SHOES
    },
    {
      id: 6,
      name: "Sportwear Shoe",
      price: 125,
      image: "https://s3-alpha-sig.figma.com/img/f8ae/4065/476b2a224ae85cd40fd6b1c7d34bc9ae?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oaSjluAX0L~KXNk9FOd-DbWmEik761tonsRMTIp~eRV1RE46mzmNSdS5V0zqccR3LFB3wQmIeNjrjfF8zPq0zW4xtyTB3eokNEoNliNUPfPbR6uEnH88YIc9it9teeC9cg80Mtp4BdkuGxsm~LBL58~rCSmM34D6WbxoFzTcoDsm9RGDEJby21-RwJhefHrzuxMyrl6LD2mep0RaAj58hPbsVIBHWjxlZb432eH1lA2jg30hlV0WAENl-dTXciwRGiSzF-EsiKJZnstEX6Yq3mcB-2QhrPfWkP9e~MHVGPT4HgIfE6SZrDE-oy9uW-850E3BPFO-SMZf5mAGr2-vGA__",
      categoryId: 4, // SHOES
    },
    // Example products for other categories
    {
      id: 7,
      name: "Summer Shorts",
      price: 75,
      image: "https://s3-alpha-sig.figma.com/img/5a88/e596/2507976b1988e6d9a08599fcba5247bd?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=h3Os3JMkQHL8CkCVZLAIm8dwykoMkw-vI5WEzjmnrCNcLwqQNSEcQ3Zc1f3XDUFCWF1iTOk3r40kUX-ETGy2qQZQAr2t1f-FgG9ze01fGEWoHya9pVt46mPXrQ5piz~-DeczmJjuRPE0es~uHiGTCXmRW841YbDnD9tx-1Yl7sQk8SawTPxkXW8f8z94QE5iQPhZZjiakm1HtIYNU2Ix5oEM2GjbJoXoiQO9clLiGRBd2HZLr851izE12yT8TTizWxl8xZ4AVinjkfAlUtunqDp56Y6lcSBAuYDlq-1-iH44uyq2Es~PjdqETXJUQ0aIqVNZyLPOTT6eCAXfEvfhTw__",
      categoryId: 1, // SHORTS
    },
    {
      id: 8,
      name: "Baseball Cap",
      price: 45,
      image: "https://s3-alpha-sig.figma.com/img/0b42/775b/5c482fd10ff96fad137ae5ca5aa7a561?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KozTXE0AeFqtVNsEALbXT5V5eo1CiQ9ZjIvMPlsqpqYqurCb4pxJg0fQufcjrWAkKd2F6IqhIRPGVkdpoNCdN7PTVQNpnOqnogaNpCiO4lcrKClk-2E6frvviqcA8uoTcDgPrcMpyrUAcMtRZ4HUMTj4NoCl949E939kZ1M0gYZ-6bQ16aEMjxDBNDMUQW5RbaFrk-MoCzZAXdY0ZwX1U1OlyX~sz9-okcuWWMACDalXj6DajlTB7ILHSH9EmWw6BPu92lsEwLSdXTeYCSezhfl3Yl5DhCM-dtatFBhNlATpsBaHBkxpAJArcE3KKazbMhw6MTuoPzgmcBbSA5WL3g__",
      categoryId: 2, // HATS
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  // Filter products by selected category
  const filteredProducts = trendingProducts.filter(
    product => product.categoryId === selectedCategoryId
  );

  /**
   * Helper function to determine colSpan based on index pattern
   * Every 3rd product (indices 2, 5, 8, etc.) will have colSpan=2
   */
  const getColSpan = (index) => {
    return (index + 1) % 3 === 0 ? 2 : 1;
  };

  return (
    <section className="px-16 py-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl">Trending</h2>
        <div className="flex items-center gap-x-4">
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
              isSelected={category.id === selectedCategoryId}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-4 mt-4 gap-x-4 gap-y-8">
        {filteredProducts.map((product, index) => (
          <SimpleProductCard 
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            colSpan={getColSpan(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection; 