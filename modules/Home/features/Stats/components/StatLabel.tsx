interface IProps {
  label: string;
}
const StatLabel = ({ label }: IProps) => {
  return <div className="text-sm text-secondary/70">{label}</div>;
};
export default StatLabel;
