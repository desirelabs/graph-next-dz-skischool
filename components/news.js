export const News = () => {
  return (
    <section className="py-0 pb-6" id="news">
      <div className="container">
        <div className="row h-100">
          <div className="col-lg-7 mt-7">
            <h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">Collections</h5>
          </div>
          <div className="col-12">
            <nav>
              <div className="nav nav-tabs watch-tabs mb-4 justify-content-end" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-latest-tab" data-bs-toggle="tab" data-bs-target="#nav-latest" type="button" role="tab" aria-controls="nav-latest" aria-selected="true">LATEST</button>
                <button className="nav-link" id="nav-popular-tab" data-bs-toggle="tab" data-bs-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="false">POPULAR</button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-latest" role="tabpanel" aria-labelledby="nav-latest-tab">
                <div className="carousel slide" id="carouselLatest" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselLatest" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselLatest" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab">
                <div className="carousel slide" id="carouselPopular" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row h-100 align-items-center">
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-2.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$650.00</h6>
                              <h4 className="text-light">ADRIATICA ADR</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-3.png" alt="..." />
                          </div>
                          <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$126.00</h6>
                              <h4 className="text-light">SEIKO SNZGO7K1</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-4 mb-3 mb-md-0">
                          <div className="card bg-black text-white p-6 pb-8"><img className="card-img" src="assets/img/gallery/watch-1.png" alt="..." />
                            <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse align-items-center">
                              <h6 className="text-primary">$250.00</h6>
                              <h4 className="text-light">ROAMER RM 220837</h4>
                            </div><a className="stretched-link" href="#"></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselPopular" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselPopular" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
