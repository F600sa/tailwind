interface IProps {
  text: string;
  color: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function Button(props: IProps) {
  return (
    <div
      onClick={props.onClick}
      className={`flex w-[173px] h-[42px] justify-center items-center ${props.color} sm:w-[100px] rounded-lg`}
    >
      {props.text}
    </div>
  );
}

export default Button;
