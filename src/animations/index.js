import analyzeRoute from "./route";
import transform from "./transform";

export default (self, from, to) => {
  const sequence = analyzeRoute(from, to);
  const transformed = transform(sequence);

  for (let [index, transform] of transformed.entries()) {
    setTimeout(() => {
      self.$store.commit("setTransformStyle", transform);
    }, 500 * (index + 1));
  }
};
