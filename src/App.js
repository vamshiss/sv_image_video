import "./styles.css";
import Video from "./video.mp4";

export default function App() {
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "palegoldenrod",
          color: "hsl(19, 100%, 50%)"
        }}
      >
        SV image
      </h1>
      <img
        src="https://www.linkpicture.com/q/CollageMaker_20210829_190240400-02.jpg"
        height="500px"
        width="auto"
      />
      <video height="500" width="500" controls>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}
