import { ICounter, ICounterList } from "@/lib/types";

const CounterData = (props: ICounterList) => {
  return (
    <>
      {props.items.map((counter: ICounter) => (
        <div
          key={counter.id}
          className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
        >
          <div className="block-18 d-flex align-items-center">
            <div className="icon">
              <span className={counter.icon}></span>
            </div>
            <div className="text">
              <strong className="number" data-number={counter.count}>
                0
              </strong>
              <span>{counter.text}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CounterData;
