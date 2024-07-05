import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHomePage = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-column mt-4">
          <h1>
            welcome Admin <i className="text-success">{user?.name}</i>
          </h1>

          <h1>Blood Management System</h1>
          <p>
            A blood bank is a facility where blood collected through blood
            donation is kept and maintained for future use in blood
            transfusions. A blood bank is a term used to refer to that portion
            of the hospital where the blood samples are stored, and appropriate
            Blood testing is done to reduce the risk of transfusion-related mis
            happenings.
            <br />
            However, it may also refer to a collection facility that some
            hospitals have. The blood banking process includes several steps
            like collecting blood followed by processing the collected blood,
            testing, separating, and storing the blood.
            <p>
              If you've had a blood test, it was probably taken from a small
              vein in your arm and sent to a lab for evaluation. The types of
              molecules present in the blood and their concentrations are
              identified by some of the most popular blood tests, such as those
              that measure fat or glucose levels in plasma. Other blood tests
              examine the components generated in the blood as well as their
              amounts and kinds. Hematocrit, a measurement of the proportion of
              RBCs (erythrocytes) in a blood sample, is one such test. It is
              done by centrifuging the blood sample in a centrifugation machine.
              As a result, the lighter portion of blood that is liquid plasma is
              separated from the denser part of the blood. The RBCs form the
              heavier component of the blood sample, and it separates out during
              centrifugation. It settles at the bottom of the hematocrit tube. A
              pale, thin layer of the remaining blood components is present
              above the erythrocytes. These are platelets and white blood cells
              (leukocytes) (thrombocytes). The buffy coat is the name for this
              layer, which typically makes up less than 1% of a blood sample.
              The blood plasma, which makes up most of the sample and is often a
              light, straw-colored fluid, is located above the buffy coat. The
              term "packed cell volume" is also frequently used to describe the
              volume of erythrocytes following centrifugation. Blood typically
              has around 45 percent erythrocytes, although samples can range
              widely from 36 to 50 percent..
            </p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHomePage;
