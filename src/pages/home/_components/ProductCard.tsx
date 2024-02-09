interface Product {
    productName: string;
    descriptionShort: string;
    photo: string;
    price: number;
  }

export const ProductCard = ({
    productName,
    descriptionShort,
    photo,
    price
}: Product) => {
  return (
    <aside className="card-product-root">
      <img src={photo} className="px-3 m-auto" />
      <p></p>

      <span>{price}</span>

      {/* 
            
            button-aside: 

            display>: flex;
            flex-direction: column;
            gap: 5px;
            padding-left: 3px;
            padding-right: 3px
            
            
            
            */}

      <div className="button-aside">
        <span className="">Frete grátis</span>
        <button>COMPRAR</button>
      </div>
    </aside>
  );
};
