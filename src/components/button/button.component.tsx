import styles from "./button.module.scss";

type Props = Omit<React.ComponentProps<"button">, "className"> & {
  highlighted?: boolean;
};

const Button = (props: Props) => {
  return (
    <button
      className={`${styles.container} ${
        props.highlighted ? styles.highlighted : ""
      }`}
      {...props}
    />
  );
};

export default Button;
