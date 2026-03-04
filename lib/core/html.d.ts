/** @import { ElementData, DeprecatedElementData } from '../types/html.dom.d.ts' */
/**
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tag
 * @param {ElementData<T>} [data]
 * @return {HTMLElementTagNameMap[T]}
 */
export function element<T extends keyof HTMLElementTagNameMap>(tag: T, data?: ElementData<T>): HTMLElementTagNameMap[T];
/**
 * @deprecated
 * @template {keyof HTMLElementDeprecatedTagNameMap} T
 * @param {T} tag
 * @param {DeprecatedElementData<T>} [data]
 * @return {HTMLElementDeprecatedTagNameMap[T]}
 */
export function deprecatedElement<T extends keyof HTMLElementDeprecatedTagNameMap>(tag: T, data?: DeprecatedElementData<T>): HTMLElementDeprecatedTagNameMap[T];
import type { ElementData } from '../types/html.dom.d.ts';
import type { DeprecatedElementData } from '../types/html.dom.d.ts';
