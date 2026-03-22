import "./WorkItem.css";
import data from "../../data";

const WorkItem = () => {
  return (
    <>
      {data.map((item) => (
        <div className="work-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default WorkItem;