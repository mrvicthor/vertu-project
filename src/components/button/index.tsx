import { Link } from "react-router-dom";

type IProps = {
  href: string;
  title: string;
  style: string;
};

const Button = ({ href, title, style }: IProps) => {
  return (
    <Link to={`/${href}`} className={style}>
      {title}
    </Link>
  );
};
export default Button;
