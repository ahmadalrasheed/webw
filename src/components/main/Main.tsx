import {
  MainContainer,
  FirstSectionDescription,
  FirstSection,
  SecondSection,
  ThirdSection,
  Section,
  FourthSection,
  FifthSection,
  SixthSection,
  SeventhSection,
  EightSection,
} from "./Theme";
import StatisticsImg from "sharedComponents/assets/statistics.svg";
import Shopify from "sharedComponents/assets/shopify.svg";
import NearPod from "sharedComponents/assets/nearpod.svg";
import Bench from "sharedComponents/assets/bench.svg";
import Forbes from "sharedComponents/assets/forbes.svg";
import Bumble from "sharedComponents/assets/bumble.svg";
import Separator from "sharedComponents/assets/separator.svg";
import Arrow from "sharedComponents/assets/arrow.svg";
import RedCircle from "sharedComponents/assets/red-circle.svg";
import RedCircleIcon from "sharedComponents/assets/red-circle-icon.svg";
import BlueCircle from "sharedComponents/assets/blue-circle.svg";
import BlueCircleIcon from "sharedComponents/assets/blue-circle-icon.svg";
import PurpleCircle from "sharedComponents/assets/purple-circle.svg";
import PurpleCircleIcon from "sharedComponents/assets/purple-cirle-icon.svg";
import GreenCircle from "sharedComponents/assets/green-circle.svg";
import GreenCircleIcon from "sharedComponents/assets/green-circle-icon.svg";
import SquarePaylogon from "sharedComponents/assets/square-paylogon.svg";
import CardImg from "sharedComponents/assets/card-img.svg";
import Dots from "sharedComponents/assets/three-dots.svg";
import Star from "sharedComponents/assets/star.svg";
import {
  Button,
  PaylogonImg,
  Card,
  PrimaryButton,
  VerticalStepper,
} from "sharedComponents";
const steps = [
  {
    label: "Market Research",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Veritatis accusamus omnis repudiandae in necessitatibus, ut non
    illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
    facere nesciunt?`,
  },
  {
    label: "Market Research",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Veritatis accusamus omnis repudiandae in necessitatibus, ut non
      illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
      facere nesciunt?`,
  },
  {
    label: "Market Research",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    Veritatis accusamus omnis repudiandae in necessitatibus, ut non
    illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
    facere nesciunt?`,
  },
];
export const Main = () => {
  return (
    <MainContainer>
      <PaylogonImg />
      <FirstSection className="main-sections">
        <FirstSectionDescription>
          <h1>Advanced Platform</h1>
          <h2>Take Your Team To the Next Level</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, rem maiores. Voluptatum consequatur deleniti
            similique, tenetur minima modi expedita laborum.
          </div>
          <div className="description-button-contanier">
            <Button text="About us"></Button>
          </div>
        </FirstSectionDescription>
        <Section>
          <img
            className="statistics-img"
            src={StatisticsImg}
            alt="statistics"
          />
        </Section>
      </FirstSection>
      <SecondSection className="main-sections">
        <img src={Shopify} alt={"shopify"} />
        <img src={NearPod} alt={"NearPod"} />
        <img src={Bench} alt={"Bench"} />
        <img src={Forbes} alt={"Forbes"} />
        <img src={Bumble} alt={"Bumble"} />
      </SecondSection>
      <Section className="left-square-paylogon-container">
        <ThirdSection className="main-sections">
          <Section className="section-3-description">
            {" "}
            <div>
              <img className="separator" src={Separator} alt="separator" />{" "}
            </div>
            <h2>The best business solution for you</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis accusamus omnis repudiandae in necessitatibus, ut non
              illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
              facere nesciunt?
            </p>
            <div className="hint-container">
              <div className="hint">
                <p>Learn About Our Success</p> <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </Section>
          <Section className="cards">
            <div className="row-1">
              <Card
                image={RedCircle}
                icon={RedCircleIcon}
                headLine={"Scale Your Activity"}
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            accusamus omnis repudiandae in necessitatibus, ut non illo iste quia`}
              />
              <Card
                image={BlueCircle}
                icon={BlueCircleIcon}
                headLine={"Bootcamps"}
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            accusamus omnis repudiandae in necessitatibus, ut non illo iste quia`}
              />
            </div>
            <div className="row-2">
              <Card
                image={PurpleCircle}
                icon={PurpleCircleIcon}
                headLine={"High Quality"}
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            accusamus omnis repudiandae in necessitatibus, ut non illo iste quia`}
              />
              <Card
                image={GreenCircle}
                icon={GreenCircleIcon}
                headLine={"Get Certification"}
                description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            accusamus omnis repudiandae in necessitatibus, ut non illo iste quia`}
              />
            </div>
          </Section>
        </ThirdSection>
        <FourthSection className="main-sections">
          <div className="square-paylogon">
            <img src={SquarePaylogon} alt="paylogon" />
          </div>

          <Section>
            <img
              className="statistics-img"
              src={StatisticsImg}
              alt="statistics"
            />
          </Section>
          <Section className="section-3-description">
            <div>
              <img className="separator" src={Separator} alt="separator" />{" "}
            </div>
            <h2>Best Platform for the Technological Era</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis accusamus omnis repudiandae in necessitatibus, ut non
              illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
              facere nesciunt?
            </p>
            <div className="hint-container">
              <div className="hint">
                <p>Learn About Our Success</p> <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </Section>
        </FourthSection>
      </Section>
      <Section className="right-square-paylogon-container">
        <div className="square-paylogon">
          <img src={SquarePaylogon} alt="paylogon" />
        </div>
        <FifthSection className="main-sections">
          <p className="head-line">Advanced Customer Service Platform</p>
          <h2>Pllatform Overview</h2>
          <p className="hint">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            distinctio quaerat, quos sit ea dolorum incidunt perspiciatis saepe
            nulla, possimus soluta ab. Minus, dicta sapiente eaque consectetur
            aliquid nobis. Dicta.
          </p>
          <img
            className="statistics-img"
            src={StatisticsImg}
            alt="statistics"
          />
          <img src={Dots} alt="dots" />
        </FifthSection>
        <SixthSection className="main-sections">
          <Section className="section-3-description">
            <div>
              <img className="separator" src={Separator} alt="separator" />{" "}
            </div>
            <h2>Best Platform for the Technological Era</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis accusamus omnis repudiandae in necessitatibus, ut non
              illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
              facere nesciunt?
            </p>
            <div className="hint-container">
              <div className="hint">
                <p>Learn About Our Success</p> <img src={Arrow} alt="arrow" />
              </div>
            </div>
          </Section>
          <Section>
            <img
              className="statistics-img"
              src={StatisticsImg}
              alt="statistics"
            />
          </Section>
        </SixthSection>
        <SeventhSection className="main-sections">
          <Section className="section-3-description">
            <h2>Acceleration Process to Grow Your Business</h2>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis accusamus omnis repudiandae in necessitatibus, ut non
              illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
              facere nesciunt?
            </p>
            <div className="primary-button-container">
              <PrimaryButton />
            </div>
          </Section>
          <Section>
            <VerticalStepper steps={steps} />
          </Section>
        </SeventhSection>
        <EightSection className="main-sections">
          <Section className="heading-container">
            <h2>Don't Just Take our Word for it!</h2>
          </Section>
          <Section className="rating-row">
            <div className="rating-info">
              <div className="number">570</div>
              <div className="text">Download</div>
            </div>
            <div className="rating-info">
              <div className="number">570</div>
              <div className="text">Active User</div>
            </div>
            <div className="rating-info">
              <div className="number">570</div>
              <div className="text">Positive Feedback</div>
            </div>
            <div className="rating-info">
              <div className="number">570</div>
              <div className="text">+ rating</div>
            </div>
          </Section>
          <Section className="info-row">
            <Section className="review-card">
              <Section className="shadowed-card">
                <Section className="img-container">
                  <img src={CardImg} alt="card-img" />
                </Section>
                <Section className="info">
                  <div>
                    <h3 className="name">Florrie Jacobs</h3>
                    <p className="head-line">CEO of Company</p>
                  </div>

                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error voluptatum sequi, porro aperiam inventore libero
                    voluptates. Voluptas quos ad, alias, delectus perspiciatis
                    autem accusamus, deserunt laudantium dolores libero natus?
                    Debitis.
                  </p>
                  <div className="stars-container">
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                    <img src={Star} alt="star" />
                  </div>
                </Section>
              </Section>
              <img src={Dots} alt={"dots"} />
            </Section>
            <Section className="section-3-description">
              <h2>Grow Your Business and Join Our Happy Users</h2>{" "}
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis accusamus omnis repudiandae in necessitatibus, ut non
                illo iste quia cum quis? Quis natus ab fugit quo delectus, ad
                facere nesciunt?. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Veritatis accusamus omnis repudiandae in
                necessitatibus, ut non illo iste quia cum quis? Quis natus ab
                fugit quo delectus, ad facere nesciunt?. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Veritatis accusamus omnis
                repudiandae in necessitatibus, ut non
              </p>
              <div className="primary-button-container">
                <PrimaryButton />
              </div>
            </Section>
          </Section>
        </EightSection>
      </Section>
    </MainContainer>
  );
};
