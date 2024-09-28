import styles from "./input.module.scss";

type Props = Omit<React.ComponentProps<"input">, "className"> & {
  label: string;
};
const Input = (props: Props) => {
  return (
    <div className={styles.container}>
      <input {...props} />
      <label
        className={
          props.value && props.value.toString().length > 0 ? styles.shrink : ""
        }
      >
        {props.label}
      </label>
    </div>
  );
};

export default Input;
