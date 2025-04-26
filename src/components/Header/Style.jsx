function Ul(props) {
  return <ul className="mt-10 flex gap-6">{props.children}</ul>;
}

function Button(props) {
  return (
    <button
      onclick={props.onClick}
      className="text-blue-800 hover:text-[#00D6D8] font-bold"
    >
      {props.children}
    </button>
  );
}

export default Button;
export { Ul };
