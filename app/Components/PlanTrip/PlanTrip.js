import SelectCar from "./icon1.svg";
import Contact from "./icon2.svg";
import Drive from "./icon3.svg";
import Image from "next/image";
import './PlanTrip.css'

function PlanTrip() {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container__title">
              <h3>Plan your trip now</h3>
              <h2>Quick &amp; easy car rental</h2>
            </div>

            <div className="plan-container__boxes">
              <div className="plan-container__boxes__box">
                <Image src={SelectCar} alt="icon_img" />
                <h3>Select Car</h3>
                <p>
                  We offer a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Contact} alt="icon_img" />
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>

              <div className="plan-container__boxes__box">
                <Image src={Drive} alt="icon_img" />
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
