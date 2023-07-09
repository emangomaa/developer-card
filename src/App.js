import "./styles.css";
import Avatar from "./Avatar.js";
import Bio from "./Bio.js";
import SkillList from "./SkillList.js";
export default function App() {
  const data = [
    {
      name: "eman gomaa yassin",
      image:
        // "https://londonimageinstitute.com/wp-content/uploads/2020/08/What-is-Personal-Image-Consulting.jpg",
        "./assets/eman gomaa.jpg",
      bio: `I'am eman, software engineer work as a frontend developer, my passion is
    to make creative and interactiver UIs, so I'am learning react js with
    its libraries like material UI, router, and react query, Also I am
    familiar with Agile methodologies and I like to work with a team using
    this effective way of programming.`,
      skills: [
        { name: "html css", level: "Advanced", backColor: "pink" },
        { name: "web design", level: "Intermidate", backColor: "lightgreen" },
        { name: "javscript", level: "Advanced", backColor: "yellow" },
        {
          name: "software engineering",
          level: "Intermidate",
          backColor: "lightblue",
        },
        { name: "Agile managment", level: "Bagainer", backColor: "orange" },
        { name: "node js", level: "Bagainer", backColor: "orangered" },
        { name: "github", level: "Advanced", backColor: "gray" },
      ],
    },
  ];
  return (
    <div
      className="container"
      style={{
        width: "400px",
        border: "4px solid black",
        margin: "40px",
        fontFamily: "Arial",
      }}
    >
      <Avatar image={data[0].image} />
      <Bio name={data[0].name} intro={data.bio} />
      <SkillList skills={data[0].skills} />
    </div>
  );
}
