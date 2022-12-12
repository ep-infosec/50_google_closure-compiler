<!--
 Copyright 2009 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->
<project xmlns="http://maven.apache.org/POM/4.0.0"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"
  >
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.google.javascript</groupId>
  <artifactId>closure-compiler-unshaded</artifactId>
  <packaging>jar</packaging>

  <name>Closure Compiler Unshaded</name>
  <version>1.0-SNAPSHOT</version>

  <url>https://developers.google.com/closure/compiler/</url>
  <description>
    Closure Compiler is a JavaScript optimizing compiler. It parses your
    JavaScript, analyzes it, removes dead code and rewrites and minimizes
    what's left. It also checks syntax, variable references, and types, and
    warns about common JavaScript pitfalls. It is used in many of Google's
    JavaScript apps, including Gmail, Google Web Search, Google Maps, and
    Google Docs.
  </description>
  <inceptionYear>2009</inceptionYear>

  <parent>
    <groupId>com.google.javascript</groupId>
    <artifactId>closure-compiler-main</artifactId>
    <version>1.0-SNAPSHOT</version>
    <relativePath>closure-compiler-main.pom.xml</relativePath>
  </parent>
  <dependencies>
{dependencies}
  </dependencies>
</project>
