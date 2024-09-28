import styles from "./input.module.scss";

type Props = Omit<React.ComponentProps<"input">, "className"> & {
  label: string;
};
const Input = (props: Props) => {
  return (
    <div className={styles.container}>
      <input {...props} />
      <label htmlFor="">{props.label}</label>
    </div>
  );
};

export default Input;
