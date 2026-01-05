interface IProps {
  value: string;
}
const StatValue = ({value}: IProps) => {
  return <div className="text-2xl font-bold text-foreground mb-1">{value}</div>;
};
export default StatValue;
