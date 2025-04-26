function Ul(props) {
  return (
    <ul
      className="gap-3 -mt-2 justify-center flex
                  md:gap-6 md:mt-10"
    >
      {props.children}
    </ul>
  );
}

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className=" hover:text-[white] font-bold underline underline-offset-3 text-[1.2em]"
    >
      {props.children}
    </button>
  );
}

export default Button;
export { Ul };
