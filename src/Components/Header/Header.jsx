import "./Header.scss";
import Button from "../Button/Button";

function Header() {
  return (
    <>
      <h1>
        {(function () {
          return "Buttonlar oilasi";
        })()}
      </h1>
      <Button text="Lorem" nimadir="blue" />
      <Button text="Qizil" nimadir="red" hasICon={true} />
      <Button text="Qizil" nimadir="else" />
      <Button text="Qizil" nimadir="else" hasICon={false} />
      <Button text="Qizil" nimadir="button" />
    </>
  );
}

export default Header;
