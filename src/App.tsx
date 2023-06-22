import "./App.css";
import AppCounter from "./components/AppCounter";
import AppProducts from "./components/AppProducts";
import AppProfile from "./components/AppProfile";

export default function App() {
  return (
    <>
      <AppProfile />
      <AppCounter />
      <AppProducts />
    </>
  );
}
