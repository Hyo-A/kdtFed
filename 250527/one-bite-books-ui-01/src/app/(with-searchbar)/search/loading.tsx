import style from "./loading.module.css";

const Loading = () => {
  return (
    <div className={style.spinnerWrapper}>
      <div className={style.spinner} />
    </div>
  );
};

export default Loading;
