interface TypewriterProps {
  text: string;
}

function Typewriter(props: TypewriterProps) {
  return (
    <h1
      className={
        "w-0 whitespace-nowrap overflow-hidden animate-[typing_8s_linear_1s_infinite]"
      }
    >
      {props.text}
    </h1>
  );
}

export default Typewriter;
