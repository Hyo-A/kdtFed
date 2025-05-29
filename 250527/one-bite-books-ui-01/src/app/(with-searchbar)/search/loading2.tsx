import style from "./loading2.module.css";

const Loading2 = () => {
  return (
    <div className={style.spinnerWrapper}>
      <div className={style.spinner} />
    </div>
  );
};

export default Loading2;
