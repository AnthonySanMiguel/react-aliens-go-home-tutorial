export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
        // Extracts four attributes from a parameter called cubicBezierCurve and passes them to a template literal that builds the Cubic Bezier curve representation.
        initialAxis, initialControlPoint, endingControlPoint, endingAxis,
    } = cubicBezierCurve;
    return `
    M ${initialAxis.x} ${initialAxis.y}
    c ${initialControlPoint.x} ${initialControlPoint.y}
      ${endingControlPoint.x} ${endingControlPoint.y}
      ${endingAxis.x} ${endingAxis.y}
  `;
};
