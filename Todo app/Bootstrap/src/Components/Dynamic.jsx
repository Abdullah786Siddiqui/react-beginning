import Grid from "./grid";
function Element({ todoitem ,deleteitem}) {
  return (
    <>
      {todoitem.map((todo) => (
        <Grid key={todo} products={todo} deleteitem={deleteitem} />
      ))}
    </>
  );
}
export default Element;
