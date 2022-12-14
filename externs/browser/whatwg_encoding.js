/*
 * Copyright 2015 The Closure Compiler Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for WHATWG's Encoding specification
 *     https://encoding.spec.whatwg.org
 * @externs
 */

/**
 * @constructor
 * @param {string=} encoding
 * @param {Object=} options
 */
function TextDecoder(encoding, options) {}

/** @type {string} **/ TextDecoder.prototype.encoding;
/** @type {boolean} **/ TextDecoder.prototype.fatal;
/** @type {boolean} **/ TextDecoder.prototype.ignoreBOM;

/**
 * @param {!BufferSource=} input
 * @param {?Object=} options
 * @return {string}
 * @see https://encoding.spec.whatwg.org/#textdecoder
 */
TextDecoder.prototype.decode = function decode(input, options) {};

/**
 * @constructor
 * @param {string=} utfLabel
 */
function TextEncoder(utfLabel) {}

/** @type {string} **/ TextEncoder.prototype.encoding;

/**
 * @param {string=} input
 * @return {!Uint8Array}
 */
TextEncoder.prototype.encode = function(input) {};

/**
 * @param {string} input
 * @param {!Uint8Array} uint8Array
 * @return {{read: number, written: number}}
 */
TextEncoder.prototype.encodeInto = function(input, uint8Array) {};

/**
 * @constructor
 * @param {string=} encoding
 * @param {Object=} options
 */
function TextDecoderStream(encoding, options) {}

/** @type {string} **/ TextDecoderStream.prototype.encoding;
/** @type {boolean} **/ TextDecoderStream.prototype.fatal;
/** @type {boolean} **/ TextDecoderStream.prototype.ignoreBOM;

/**
 * @type {ReadableStream<string>}
 */
TextDecoderStream.prototype.readable;

/**
 * @type {WritableStream<BufferSource>}
 */
TextDecoderStream.prototype.writable;

/**
 * @constructor
 */
function TextEncoderStream() {}

/** @type {string} **/ TextEncoderStream.prototype.encoding;

/**
 * @type {ReadableStream<Uint8Array>}
 */
TextEncoderStream.prototype.readable;

/**
 * @type {WritableStream<string>}
 */
TextEncoderStream.prototype.writable;
