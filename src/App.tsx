import MotionCounter from "./components/MotionCounter";

export default function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <MotionCounter target={102} />
    </div>
  );
}
