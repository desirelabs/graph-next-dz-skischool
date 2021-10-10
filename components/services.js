import styled from "styled-components";

const BgHolder = styled.div`background-image:url(assets/img/gallery/store-bg.png);background-position:left bottom;background-size:contain;`

export const Services = ({ data }) => {
  const {
    titre,
    paragraphe,
    titreCopy1,
    paragrapheCopy1,
    titreCopy2,
    paragrapheCopy2,
    titreCopy3,
    paragrapheCopy3,
    titreCopy4,
    paragrapheCopy4,
    titreCopy5
  } = data

  return (
    <section className="bg-black py-8 pt-0" id="services">
      <BgHolder className="bg-holder">
      </BgHolder>

      <div className="container-lg">
        <div className="row flex-center">
          <div className="col-6 order-md-0 text-center text-md-start"></div>
          <div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titre}</h5>
                <p className="my-4 pe-xl-5">{paragraphe}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-sm-10 col-md-4 col-lg-4 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titreCopy1}</h5>
                <p className="my-4 pe-xl-5">{paragrapheCopy1}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-4 col-lg-4 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titreCopy2}</h5>
                <p className="my-4 pe-xl-5">{paragrapheCopy2}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-4 col-lg-4 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titreCopy3}</h5>
                <p className="my-4 pe-xl-5">{paragrapheCopy3}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-6 order-md-0 text-center text-md-start">
            <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titreCopy4}</h5>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-6 text-center text-md-start">
            <div className="row h-100">
              <div className="col-12">
                <p className="my-4 pe-xl-5">{paragrapheCopy4}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center">
          <div className="col-12 order-md-0 text-center text-md-start">
            <h5 className="fs-3 fs-lg-5 lh-sm text-uppercase">{titreCopy5}</h5>
          </div>
        </div>
      </div >
    </section >
  )
}
