const Card = (props) => {
  const { titreDeTarif, descriptionDeTarif, tarif } = props;
  return (
    <div className="card card-shadow border-0 mb-4">
      <div className="card-body">
        <h6 className="text-dark mt-3 mb-0">{titreDeTarif}</h6>
        <h2 className="text-dark mt-0 monthly">{tarif}</h2>
        {descriptionDeTarif}
      </div>
      <div className="card-footer">
        <a
          className="btn btn-outline-success btn-md mb-1 w-100"
          href="#contact"
        >
          <span>Book now</span>
        </a>
      </div>
    </div>
  );
};
export const Prices = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <section className="py-6 bg-dark pricing" id="prices">
      <div className="pricing5 py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h3 className="fs-3 fs-lg-5 lh-sm mb-0 text-uppercase">
                {data.find((el) => el.order === 1)?.titreDeSection}
              </h3>
            </div>
          </div>
          <div className="row text-center pricing-box">
            {data
              .filter((el) => el.order !== 4)
              .sort((a, b) => a.order - b.order)
              .map(({ order, ...props }) => (
                <div key={order} className="col-md-4">
                  <Card {...props} />
                </div>
              ))}
            {data
              .filter((el) => el.order === 4)
              .map(({ order, titreDeTarif, descriptionDeTarif, tarif }) => (
                <div key={order} className="col-md-12 pt-3">
                  <h5>{titreDeTarif} </h5>
                  <p>
                    {descriptionDeTarif} <span>{tarif}</span>
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
