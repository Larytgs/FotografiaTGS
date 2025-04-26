function Ul(props) {
  return <ul className="mt-10 flex gap-6">{props.children}</ul>;
}

function Button(props) {
  return (
    <button onClick={props.onClick} className=" hover:text-[white] font-bold">
      {props.children}
    </button>
  );
}

export default Button;
export { Ul };
