import styled from "styled-components";
import { Fragment } from "react";

const Img = styled.img`
  margin: 12px;
`

const LeftReseau = ({ accroche, lien, icone }) => {
  return <Fragment>{accroche.split("us").map((chunck, i) => i === 0 && <span className="text-dark"> {chunck + "us"}<a href={lien}>
    <Img src={icone.url} alt="" />
  </a></span>)}</Fragment>
}

const RightReseau = ({ accroche, lien, icone }) => {
  return <Fragment>{accroche.split("us").map((chunck, i) => i === 1 && <span className="text-dark"><a href={lien}><Img src={icone.url} alt="" /></a>{chunck}</span>)}</Fragment>
}

const StyledSection = styled.section`
      background-color: #ebf9ff;
`

export const News = ({ data }) => {
  console.log(data)
  const { titre,
    accroche,
    lienDuRSeauSocial,
    icone,
    lienDuRSeauSocialCopy1,
    iconeCopy1,
    imagesDeLaGalerie
  } = data;
  return (
    <StyledSection className="py-0 pb-6" id="news">
      <div className="container">
        <div className="row h-100 d-lg-flex align-items-center">
          <div className="text-center">
            <h5 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase text-dark">{titre}</h5>
            <p>
              <LeftReseau accroche={accroche} lien={lienDuRSeauSocial} icone={icone} />
              <RightReseau accroche={accroche} lien={lienDuRSeauSocialCopy1} icone={iconeCopy1} />
            </p>
          </div>
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-latest" role="tabpanel" aria-labelledby="nav-latest-tab">
                <div className="carousel slide" id="carouselLatest" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                      <div className="row h-100 align-items-center">
                        {imagesDeLaGalerie.map(
                          ({ responsiveImage }) => (
                            <div key={responsiveImage.src} className="col-sm-6 col-md-4 mb-4">
                              <div className="card text-white p-6 pb-9" style={{ background: `url(${responsiveImage.src}) no-repeat center / cover` }}>
                              </div>
                            </div>
                          ))}
                      </div>
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
    </StyledSection>
  )
}
