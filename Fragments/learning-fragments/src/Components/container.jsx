import style from './container.module.css'
let Container = (props) => {
  return <div className={`${style["container"]} container-fluid `}>{props.children}</div>
};
export default Container;
