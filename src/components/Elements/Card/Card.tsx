import "./Card.scss";

const Card = (props: any) => {
  return <div className="card-custom">{props.children}</div>;
};

interface PortoProps {
  title?: string;
  desc?: string;
  img?: string;
}
/**
 * @param props title, desc, img
 * @typeParams Item
 * @returns
 */
const CardPorto: React.FC<PortoProps> = (props: PortoProps) => {
  const { title, desc, img } = props;
  return (
    <Card>
      <div className="card-portofolio carousel-item m-0">
        <div className="card-img">
          <img
            draggable="false"
            src={img}
            alt={title}
          />
        </div>
        <div className="card-desc">
          <p className="">{desc}</p>
        </div>
        <div className="card-title">
          <h1>{title}</h1>
        </div>
      </div>
    </Card>
  );
};

interface PackageProps {
  title?: string;
  content: Array<any>;
  img?: string;
  link?: string;
}
/**
 * 
 * @param props title, content, img, link
 * @typeParams content: array of string
 * @returns 
 */
const CardPackage: React.FC<PackageProps> = (props: PackageProps) => {
  return (
    <Card>
      <div className="card-package">
        <div className="card-img">
          <img
            draggable="false"
            src={props.img}
            alt={props.title}
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h1>{props.title}</h1>
          </div>
          <div className="card-body">
            {props.content.map((item: any, index) => (
              <div className="card-subtitle" key={index}>
                <h2>{item.subtitle}</h2>
                {item.list.map((list: any, i:any) => (
                  <ul key={i}>
                    <li>{list}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="card-footer">
            <button className="btn btn-primary text-light font-montserrat">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

Card.CardPorto = CardPorto;
Card.CardPackage = CardPackage;

export default Card;