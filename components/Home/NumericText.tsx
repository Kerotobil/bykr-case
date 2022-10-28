interface Props {
  primaryText: string;
  secondaryText: string;
}
export const NumericText = (props: Props) => {
  return (
    <div className="text-center">
      <h1 className="text-5xl leading-10 font-bold">{props.primaryText}</h1>
      <h5 className="text-sm leading-6 text-zinc-200">{props.secondaryText}</h5>
    </div>
  );
};
