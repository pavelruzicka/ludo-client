import analyzeRoute from "./route";
import transform from "./transform";

import constants from "../constants";

/**
 * Executes animation based on directions, pass them onwards
 *
 * @param {CombinedVueInstance} self - Vue instance
 * @param {Number} from - Source field index
 * @param {Number} to - Destination field index
 * @return {String[]} Set of directions
 */
export default (self, from, to) => {
  const sequence = analyzeRoute(from, to);
  const transformed = transform(sequence);

  for (let [index, transform] of transformed.entries()) {
    setTimeout(() => {
      self.$store.commit("setTransformStyle", transform);
    }, constants.movement.animationStepTime * (index + 1));
  }

  return sequence;
};
