import React from 'react'

const Payment = () => {
    const cardInfo=[
        {priceBtnClass:"price-btn-one ",discount:"Save 20%",title:"Pro plan",class:" card-one  card-one mb-0 mb-lg-0"  , price:"799$", artwork:""},
        {priceBtnClass:"price-btn-two ",title:"Lite",class:" card-two  card-two mb-0 mb-lg-0"  , price:"Free", artwork:"5 artworks"},
        {priceBtnClass:"price-btn-three ",title:"Lite",class:" card-three  card-three mb-0 mb-lg-0", price:"300$", artwork:"10,000 artworks"},
    ];
    const Cardrender=(card,index)=>{
      {/* <section class=" " key={index}> */}
      
          {/* col-lg-12 col-sm-12  card-one mb-5 mb-lg-0 */}
        return(
      <div className="pricing d-flex d-md-flex justify-content-center  justify-content-md-center col col-lg-4" >
        <div className =  {card.class} >
          <div className="card-body-one" style={{position: 'relative'}}>
            {card?.discount && <div className=" discount text-uppercase text-center">{card.discount}</div>}
            <div className="price-plan">
            <h4 className="Card-text ">{card.title}</h4>  <p className="Card-text price">{card.price}</p>
            </div>
           <p>Plan includes</p>
            <ul className="fa-ul">
              <li><span className="fa-li"><i class="fas fa-check"></i></span>500 artworks</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>500 artworks</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>500 artworks</li>
              <li><span className="fa-li"><i class="fas fa-check"></i></span>500 artworks</li>
              
            </ul>
            <div className="d-grid">
              <a href="#" className={card.priceBtnClass}>Choose Lite plan</a>
            </div>
          </div>
        </div>
      </div>
     
     
    
// </section>
        )
    }
    return (
      <>
      
      <div className=" ">
      <div class=" container ">
    <div class=" row">
          {cardInfo.map(Cardrender)}
          </div>
          </div>
      </div>

      </>
    )
}

export default Payment