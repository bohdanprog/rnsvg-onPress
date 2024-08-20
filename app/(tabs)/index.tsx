import Svg, { G, Rect } from "react-native-svg";

export default function HomeScreen() {
  return (
    <Svg width="275" height="200" viewBox="0 0 275 200">
      {" "}
      <G fill="none" strokeWidth="10">
        <Rect
          width="300"
          height="100"
          style={{ fill: "rgb(0,0,255)", strokeWidth: 3, stroke: "rgb(0,0,0)" }}
          onPress={() => {
            alert("hooray it works");
          }}
        />
      </G>
    </Svg>
  );
}
