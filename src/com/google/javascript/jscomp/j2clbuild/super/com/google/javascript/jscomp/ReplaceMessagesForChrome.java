/*
 * Copyright 2015 The Closure Compiler Authors.
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

package com.google.javascript.jscomp;

import com.google.javascript.rhino.Node;

/** GWT compatible no-op replacement for {@code ReplaceMessagesForChrome} */
final class ReplaceMessagesForChrome implements CompilerPass {
  ReplaceMessagesForChrome(AbstractCompiler compiler, JsMessage.IdGenerator idGenerator) {}

  @Override
  public void process(Node externs, Node root) {}
}
