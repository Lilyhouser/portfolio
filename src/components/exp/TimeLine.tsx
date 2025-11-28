import { exp, study } from "./data";
import { Dot, SubDot } from "./Dots";
import Link from "next/link";

const TimeLine = () => {
  return (
    <div className="w-1 h-[80vh] bg-black fixed top-[50%] left-[50%] translate-[-50%]">
      <Dot fromTop={10} time={study.university.time} position="right">
        <div>
          <h2 className="font-bold underline mb-1 text-[15px]">
            {study.university.name}
          </h2>
          <p>GPA: {study.university.gpa}</p>
          <p>{study.university.achieve}</p>
        </div>
      </Dot>
      <SubDot name="Languages" fromTop={30} position="right">
        <div className="flex flex-col gap-4">
          {study.languages.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </SubDot>
      <SubDot
        name={
          <div>
            <p>Certifications</p>
            <p className="font-medium">(Coursera)</p>
          </div>
        }
        fromTop={50}
        position="right"
      >
        <div className="flex flex-col gap-4">
          {study.certifications.map((item, idx) => (
            <Link target="_blank" key={idx} href={item.url}>
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </SubDot>
      {exp.map((item, idx) => (
        <Dot key={idx} fromTop={86} time={item.time} position="left">
          <div>
            <h2 className="font-bold underline mb-1 text-[15px]">
              {item.company}
            </h2>
            <p>{item.position}</p>
            <ul style={{ listStyle: "initial", marginLeft: 12 }}>
              {item.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </Dot>
      ))}
    </div>
  );
};

export default TimeLine;
