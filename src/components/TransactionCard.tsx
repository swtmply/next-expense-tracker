import { colors } from "../lib/colors";
import { MoneyCardProps } from "../pages/dashboard";

interface TransactionCardProps extends MoneyCardProps {
  date: Date;
  category?: string;
  color?: string;
}

const TransactionCard = ({
  label,
  amount,
  date,
  category,
  color = "gray",
}: TransactionCardProps) => {
  return (
    <div className="bg-dark-primary dark:bg-dark-background-secondary shadow-md dark:shadow-dark-muted/10 p-4 rounded-md min-w-[15rem] max-w-sm">
      <p className="w-full flex justify-between text-sm text-light-muted dark:text-dark-muted mb-4">
        <span className="flex flex-col text-xs font-semibold capitalize">
          {label}
          <span className="dark:text-dark-primary text-light-primary font-normal text-xl">
            {category}
          </span>
        </span>
        <span className={`rounded-full w-6 h-6 ${colors[color]}`}></span>
      </p>
      <p className="font-semibold">
        Php{" "}
        <span className="text-2xl">{Intl.NumberFormat().format(amount)}</span>
      </p>
      <p className="dark:text-dark-secondary text-light-secondary text-sm">
        Date: {Intl.DateTimeFormat().format(new Date(date))}
      </p>
    </div>
  );
};

export default TransactionCard;
