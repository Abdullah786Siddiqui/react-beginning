import Grid from "./grid";
function Element({ products,dates }) {
  return (
    <>
      {products.map((product,index) => (
        <Grid key={`${product}-${dates}`}  products={product} dates={dates[index]}  />
      ))}
      
    </>
  );
}
export default Element;
