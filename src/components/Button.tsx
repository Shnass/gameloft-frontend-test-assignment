import { twMerge } from "tailwind-merge";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  ...rest
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={twMerge(
        `bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded cursor-pointer`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
