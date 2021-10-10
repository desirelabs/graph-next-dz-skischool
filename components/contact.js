export const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center my-5">
            <h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">what customers are saying</h5>
          </div>
        </div>
        <div className="row flex-center h-100">
          <div className="col-xl-9">
            <div className="carousel slide" id="carouselTestimonials" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="row h-100 justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/smith.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">amanda smith</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/sandra-willims.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">Ainara Vergara</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active" data-bs-interval="5000">
                  <div className="row h-100 justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/smith.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">Niek Bove</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/sandra-willims.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">Ainara Vergara</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row h-100 justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/smith.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">amanda smith</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card h-100 shadow card-span p-3 bg-black">
                        <div className="card-body">
                          <div className="d-flex align-items-center"><img className="img-fluid" src="assets/img/gallery/sandra-willims.png" width="80" alt="" />
                            <div className="flex-1 ms-4">
                              <h6 className="fs-lg-1 mb-1 text-uppercase">Ainara Vergara</h6>
                            </div>
                          </div>
                          <p className="mb-0 mt-4 fw-light lh-lg">Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5 flex-center">
                <div className="col-auto position-relative z-index-2">
                  <ol className="carousel-indicators">
                    <li className="mx-2" data-bs-target="#carouselTestimonials" data-bs-slide-to="0"></li>
                    <li className="mx-2 active" data-bs-target="#carouselTestimonials" data-bs-slide-to="1" aria-current="true"></li>
                    <li className="mx-2" data-bs-target="#carouselTestimonials" data-bs-slide-to="2"></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
