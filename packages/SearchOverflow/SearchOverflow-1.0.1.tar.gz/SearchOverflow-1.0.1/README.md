#SearchOverflow
##Command line script to consult StackOverflow

With SearchOverflow you can quickly look up questions on StackOverflow from any terminal, allowing for quick searches without exiting your IDE.

##Usage
* Without any input

` sflow ` 
  
  Using it like this will make the program ask you for search terms
  
* Searching directly

`sflow ["date in java" or something]`

After this you'll be prompted with 9 possible questions sorted by relevance. After choosing one, it will print both the question's text and its accepted answer, giving you the option to either end the program there or choose another entrance on the list.

##Installation

On the command line type:

* ###From Pypi

  1. `pip install SearchOverflow`

* ###From the repository 

  1. `git clone add url`

  2. `cd SearchOverflow`

  3. `sudo python setup.py install`





<br>
<br>
<br>


Copyright 2020 Airam Hernández Rocha

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.