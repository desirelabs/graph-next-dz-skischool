import styled from "styled-components";

const BgHolder = styled.div`background-image:url(assets/img/gallery/store-bg.png);background-position:left bottom;background-size:contain;`

export const Services = () => {
  return (
    <section className="bg-black py-8 pt-0" id="services">
      <BgHolder className="bg-holder">
      </BgHolder>

      <div className="container-lg">
        <div className="row flex-center">
          <div className="col-6 order-md-0 text-center text-md-start"></div>
          <div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
            <div className="col-4 position-relative ms-auto py-5"><a className="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleFade" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next carousel-icon z-index-2" href="#carouselExampleFade" role="button" data-bs-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="visually-hidden">Next</span></a></div>
            <div className="carousel slide carousel-fade" id="carouselExampleFade" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <div className="row h-100">
                    <div className="col-12">
                      <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">Our store</h5>
                      <p className="my-4 pe-xl-5">Memphis clinched a spot in the play-in tournament with the victory, but the fight for seeding continues. The race for the No. 8 spot in the West -- and the safety net of having to win just one of two games to make the playoffs -- could come down to the regular seasons final day, when Memphis and Golden State meet. The good thing for the Grizzlies is they dont have to leave home until that matchup as they have games against Dallas and two against Sacramento before the finale.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row h-100">
                    <div className="col-12">
                      <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">Our store</h5>
                      <p className="my-4 pe-xl-5">Memphis clinched a spot in the play-in tournament with the victory, but the fight for seeding continues. The race for the No. 8 spot in the West -- and the safety net of having to win just one of two games to make the playoffs -- could come down to the regular seasons final day, when Memphis and Golden State meet. The good thing for the Grizzlies is they dont have to leave home until that matchup as they have games against Dallas and two against Sacramento before the finale.</p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div className="row h-100">
                    <div className="col-12">
                      <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">Our store</h5>
                      <p className="my-4 pe-xl-5">Memphis clinched a spot in the play-in tournament with the victory, but the fight for seeding continues. The race for the No. 8 spot in the West -- and the safety net of having to win just one of two games to make the playoffs -- could come down to the regular seasons final day, when Memphis and Golden State meet. The good thing for the Grizzlies is they dont have to leave home until that matchup as they have games against Dallas and two against Sacramento before the finale.</p>
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
