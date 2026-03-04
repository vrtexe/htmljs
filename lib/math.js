import { mathElement } from './core/math.js';

/** @import { type MathElementData } from './types/math.dom' */

export { mathElement as element };

/**
 * @param {MathElementData<'a'>} data
 * @returns {MathMLElementTagNameMap['a']}
 */
export function a(data) {
  return mathElement('a', data);
}

/**
 * @param {MathElementData<'annotation'>} data
 * @returns {MathMLElementTagNameMap['annotation']}
 */
export function annotation(data) {
  return mathElement('annotation', data);
}

/**
 * @param {MathElementData<'annotation-xml'>} data
 * @returns {MathMLElementTagNameMap['annotation-xml']}
 */
export function annotationXml(data) {
  return mathElement('annotation-xml', data);
}

/**
 * @param {MathElementData<'maction'>} data
 * @returns {MathMLElementTagNameMap['maction']}
 */
export function maction(data) {
  return mathElement('maction', data);
}

/**
 * @param {MathElementData<'math'>} data
 * @returns {MathMLElementTagNameMap['math']}
 */
export function math(data) {
  return mathElement('math', data);
}

/**
 * @param {MathElementData<'merror'>} data
 * @returns {MathMLElementTagNameMap['merror']}
 */
export function merror(data) {
  return mathElement('merror', data);
}

/**
 * @param {MathElementData<'mfrac'>} data
 * @returns {MathMLElementTagNameMap['mfrac']}
 */
export function mfrac(data) {
  return mathElement('mfrac', data);
}

/**
 * @param {MathElementData<'mi'>} data
 * @returns {MathMLElementTagNameMap['mi']}
 */
export function mi(data) {
  return mathElement('mi', data);
}

/**
 * @param {MathElementData<'mmultiscripts'>} data
 * @returns {MathMLElementTagNameMap['mmultiscripts']}
 */
export function mmultiscripts(data) {
  return mathElement('mmultiscripts', data);
}

/**
 * @param {MathElementData<'mn'>} data
 * @returns {MathMLElementTagNameMap['mn']}
 */
export function mn(data) {
  return mathElement('mn', data);
}

/**
 * @param {MathElementData<'mo'>} data
 * @returns {MathMLElementTagNameMap['mo']}
 */
export function mo(data) {
  return mathElement('mo', data);
}

/**
 * @param {MathElementData<'mover'>} data
 * @returns {MathMLElementTagNameMap['mover']}
 */
export function mover(data) {
  return mathElement('mover', data);
}

/**
 * @param {MathElementData<'mpadded'>} data
 * @returns {MathMLElementTagNameMap['mpadded']}
 */
export function mpadded(data) {
  return mathElement('mpadded', data);
}

/**
 * @param {MathElementData<'mphantom'>} data
 * @returns {MathMLElementTagNameMap['mphantom']}
 */
export function mphantom(data) {
  return mathElement('mphantom', data);
}

/**
 * @param {MathElementData<'mprescripts'>} data
 * @returns {MathMLElementTagNameMap['mprescripts']}
 */
export function mprescripts(data) {
  return mathElement('mprescripts', data);
}

/**
 * @param {MathElementData<'mroot'>} data
 * @returns {MathMLElementTagNameMap['mroot']}
 */
export function mroot(data) {
  return mathElement('mroot', data);
}

/**
 * @param {MathElementData<'mrow'>} data
 * @returns {MathMLElementTagNameMap['mrow']}
 */
export function mrow(data) {
  return mathElement('mrow', data);
}

/**
 * @param {MathElementData<'ms'>} data
 * @returns {MathMLElementTagNameMap['ms']}
 */
export function ms(data) {
  return mathElement('ms', data);
}

/**
 * @param {MathElementData<'mspace'>} data
 * @returns {MathMLElementTagNameMap['mspace']}
 */
export function mspace(data) {
  return mathElement('mspace', data);
}

/**
 * @param {MathElementData<'msqrt'>} data
 * @returns {MathMLElementTagNameMap['msqrt']}
 */
export function msqrt(data) {
  return mathElement('msqrt', data);
}

/**
 * @param {MathElementData<'mstyle'>} data
 * @returns {MathMLElementTagNameMap['mstyle']}
 */
export function mstyle(data) {
  return mathElement('mstyle', data);
}

/**
 * @param {MathElementData<'msub'>} data
 * @returns {MathMLElementTagNameMap['msub']}
 */
export function msub(data) {
  return mathElement('msub', data);
}

/**
 * @param {MathElementData<'msubsup'>} data
 * @returns {MathMLElementTagNameMap['msubsup']}
 */
export function msubsup(data) {
  return mathElement('msubsup', data);
}

/**
 * @param {MathElementData<'msup'>} data
 * @returns {MathMLElementTagNameMap['msup']}
 */
export function msup(data) {
  return mathElement('msup', data);
}

/**
 * @param {MathElementData<'mtable'>} data
 * @returns {MathMLElementTagNameMap['mtable']}
 */
export function mtable(data) {
  return mathElement('mtable', data);
}

/**
 * @param {MathElementData<'mtd'>} data
 * @returns {MathMLElementTagNameMap['mtd']}
 */
export function mtd(data) {
  return mathElement('mtd', data);
}

/**
 * @param {MathElementData<'mtext'>} data
 * @returns {MathMLElementTagNameMap['mtext']}
 */
export function mtext(data) {
  return mathElement('mtext', data);
}

/**
 * @param {MathElementData<'mtr'>} data
 * @returns {MathMLElementTagNameMap['mtr']}
 */
export function mtr(data) {
  return mathElement('mtr', data);
}

/**
 * @param {MathElementData<'munder'>} data
 * @returns {MathMLElementTagNameMap['munder']}
 */
export function munder(data) {
  return mathElement('munder', data);
}

/**
 * @param {MathElementData<'munderover'>} data
 * @returns {MathMLElementTagNameMap['munderover']}
 */
export function munderover(data) {
  return mathElement('munderover', data);
}

/**
 * @param {MathElementData<'semantics'>} data
 * @returns {MathMLElementTagNameMap['semantics']}
 */
export function semantics(data) {
  return mathElement('semantics', data);
}

export default {
  element: mathElement,
  a,
  annotation,
  annotationXml,
  maction,
  math,
  merror,
  mfrac,
  mi,
  mmultiscripts,
  mn,
  mo,
  mover,
  mpadded,
  mphantom,
  mprescripts,
  mroot,
  mrow,
  ms,
  mspace,
  msqrt,
  mstyle,
  msub,
  msubsup,
  msup,
  mtable,
  mtd,
  mtext,
  mtr,
  munder,
  munderover,
  semantics,
};
