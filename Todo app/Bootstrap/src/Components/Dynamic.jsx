import Grid from "./grid";
function Element({ products,dates }) {
  return (
    <>
      {products.map((product,index) => (
        <Grid products={product} dates={dates[index]}  />
      ))}
      
    </>
  );
}
export default Element;
