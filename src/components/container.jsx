import NavBar from "./navBar";

export default function Container({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
