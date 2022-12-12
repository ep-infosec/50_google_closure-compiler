/*
 * Copyright 2022 The Closure Compiler Authors.
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
 * @fileoverview Test for RegExp Indices field (es_2022 feature)
 * @suppress {untranspilableFeatures} ignore autogenerated targets that compile down to es5
 */

goog.module('jscomp.runtime_tests.regexp_match_indices_test');
goog.setTestOnly();

const testSuite = goog.require('goog.testing.testSuite');

goog.require('goog.testing.jsunit');

testSuite({
  /**
   * @suppress {uselessCode}
   * @return {boolean}
   */
  shouldRunTests() {
    try {
      new RegExp('', 'd');
      return true;
    } catch (e) {
      return false;
    }
  },

  testRegExp() {
    let re = new RegExp('(?<firstname>jeannie)ren', 'd');
    let str = '11jeannieren11';
    const result = re.exec(str);
    assertNotNull(result);
    assertEquals(result[0], 'jeannieren');
    assertEquals(result[1], 'jeannie');
    assertEquals(result.groups['firstname'], 'jeannie');

    let indices = result.indices;
    assertNotNull(indices);
    assertArrayEquals(indices[0], [2, 12]);
    assertArrayEquals(indices[1], [2, 9]);
    assertArrayEquals(indices.groups['firstname'], [2, 9]);
  }
});
