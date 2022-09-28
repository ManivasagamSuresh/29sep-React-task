function Card(a){
    return (
<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{a.card.name}</h5>
            <h6 className="card-price text-center">{a.card.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              {
                a.card.feature.map((item)=>{
                  return (<li><span className="fa-li"><i className="fas fa-check"></i></span>{item.name}</li>)
                })
              }
              
              
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>




    )

}
export default Card