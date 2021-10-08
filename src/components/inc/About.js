import React from "react";

function About() {
  return (
    <div className="row mx-2 my-4 py-4">
      <h4 className="text-center">Your No. 1 Platform For all your Poultry Needs!</h4>
      <div className="col-md-6 px-2">
        <h4>How to buy on E-KUKU?</h4>
        <h6>1. Search for the item.</h6>
        <p>
          Find what you need using search panel and filters. We have over a
          million adverts, choose exactly what you are looking for.
        </p>
        <h6>2. Contact a seller.</h6>
        You call them via phone. Discuss all the details, negotiate about the
        price.
        <h6>3. Take your item or order a delivery.</h6>
        <p>
          We check our sellers carefully, but it’s always better to check twice,
          right? Meet a seller in public place and be sure to pay only after
          collecting your item.
        </p>
      </div>
      <div className="col-md-6 px-2">
        <h4>How to Sell on E-KUKU?</h4>
        <h6>1. Register.</h6>
        <p>
          Register an account on e-kuku. Make sure you’re entering a correct
          phone number, so your clients could reach you!
        </p>
        <h6>2.Make best photo of your item.</h6>
        <p>Take a best photo of your item.</p>

        <h6>3.Press Post</h6>
        <p>
          Choose a proper category,county, subcounty upload your photo, enter
          item descriptions, contact number, location, enter price and write a
          clear title.
        </p>
      </div>
    </div>
  );
}

export default About;
