# NearBeach
![GitHub](https://img.shields.io/github/license/robotichead/NearBeach.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/robotichead/NearBeach.svg)
[![CircleCI](https://circleci.com/gh/robotichead/NearBeach.svg?style=shield)](https://circleci.com/gh/robotichead/NearBeach)
[![PyPI version](https://badge.fury.io/py/NearBeach.svg)](https://badge.fury.io/py/NearBeach)
![PyPI - Downloads](https://img.shields.io/pypi/dm/NearBeach.svg?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/robotichead/NearBeach.svg?style=social)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/robotichead/NearBeach.svg)
![Liberapay receiving](https://img.shields.io/liberapay/receives/robotichead.svg)
![Website](https://img.shields.io/website/https/nearbeach.org.svg)
![Twitter Follow](https://img.shields.io/twitter/follow/robotichead.svg?style=social)


NearBeach is currently in beta development. If you find any issues, or require any help, please do not hesitate to contact on our forums. https://help.nearbeach.org

## What is NearBeach?
NearBeach is a project and task management tool (PATMT) with a basic customer relationship management tool to help you manage your projects and task. The phillosophy of NearBeach is to be easy to install and use, be open sourced, be flexible, and aimed at small/personal organisation to large enterprises. Each new module brought to NearBeach expands it's capability tenfold and brings it closer to a competing product.


## Helpful links

- [NearBeach forum](https://help.nearbeach.org)
- [Documentation](https://nearbeach.readthedocs.io)
- [Buzilla](https://bugzilla.nearbeach.org)
- [NearBeach Homepage](https://nearbeach.org)
- [NearBeach Demo](https://demo.nearbeach.org)


## Features
NearBeach's main focus is to create both projects and task. Each task can then be assigned to as many projects required (sometimes multiple projects will need to have the same task completed). Each project and task can also be assigned to multiple users to complete.
![NearBeach - Project Information](https://github.com/robotichead/Store_Github_Pictures/blob/master/NearBeach%20-%20project%20information.png?raw=true)

However projects and task are but a small feature to a PATMT system. You will need to store user requirement and be able to assign those requirement items to projects/task for completion. You will need to track these requirement to make sure they are completed. NearBeach has recently implemented a requirement module to help you store all your customer's requirement
![NearBeach - Requirements](https://github.com/robotichead/Store_Github_Pictures/blob/master/NearBeach%20-%20Requirements.png?raw=true)

What if you have an opportunity? You do not have the user's full requirement yet, but there could easily be a sale involved. NearBeach has also implemented the opportunity module, to help you store each potential opportunity that comes through the pipeline.
![NearBeach - Opportunity](https://github.com/robotichead/Store_Github_Pictures/blob/master/NearBeach%20-%20Opportunity?raw=true)


Finally, you might need to send a quote to your customer. As a new feature, the Quotes module has been implemented into NearBeach.
![NearBeach - Quotes](https://github.com/robotichead/Store_Github_Pictures/blob/master/NearBeach%20-%20Quote3.png?raw=true)
![NearBeach - Quotes](https://github.com/robotichead/Store_Github_Pictures/blob/master/NearBeach%20-%20Quote1.png?raw=true)

These are not the only features in NearBeach, but some which you may start using strait away. Feel free to download and install and start using NearBeach right away.


## Software References (thank you)

NearBeach will not be where it currently is without the help of other open sourced projects. Below are the references to all the different tools that are utilised within NearBeach. NearBeach would like to thank these projects as they have help construct a better and more stable product. Please consider visiting and donating.

### Browser Stack
Thank you to [Browser Stack](http://browserstack.com/) for giving us the ability to test NearBeach on all browsers and devices.
[![Browser Stack](https://raw.githubusercontent.com/robotichead/Store_Github_Pictures/master/browserstack-logo-600x315.png)](http://browserstack.com/)


### Snyk.io for security checks 

Python Modules - [![Known Vulnerabilities](https://snyk.io/test/github/robotichead/NearBeach/badge.svg?targetFile=NearBeach/requirements.txt)](https://snyk.io/test/github/robotichead/NearBeach?targetFile=NearBeach/requirements.txt)

JavaScript Modules - [![Known Vulnerabilities](https://snyk.io/test/github/robotichead/NearBeach/badge.svg?targetFile=package.json)](https://snyk.io/test/github/robotichead/NearBeach?targetFile=package.json)

### Chosen-js
Concept and development by Patrick Filler for Harvest.

Design and CSS by Matthew Lettini

Repository maintained by @pfiller, @kenearley, @stof, @koenpunt, and @tjschuck.

Github: https://github.com/harvesthq/chosen

Link: https://harvesthq.github.io/chosen/

License: MIT

Note: Chosen-js is used to help streamline the select boxes, to make it easier for the user to select item(s).

### jQuery
Creator(s): John Resig

Github: https://github.com/jquery/jquery

Link: jquery.com

License: MIT

Note: jQuery help shorten a lot of the javascript code within NearBeach. There are also a few widgets that rely on this technology (i.e. Chosen-js).



### jQuery File Upload
Creator(s): Sebastian Tschan

Github: https://github.com/blueimp/jQuery-File-Upload

Link: https://blueimp.github.io/jQuery-File-Upload/

License : MIT

Note: jQuery File Upload is used when there is a file to be uploaded through the AJAX method.



### jQuery Plugin Date and Time Picker
Creator(s): Valeriy Chupurnov

Github: https://github.com/xdan/datetimepicker

License: MIT

Note: This plugin is a widget used to help improve picking dates and time.



### TinyMCE
Creator(s):  Tiny Technologies Inc.

Github: https://github.com/tinymce/tinymce

License: GNU Lesser General Public License v2.1

Note: TinyMCE is used for rich text within NearBeach


### Geolocation - Python
Creator(s): Sławomir Kabik

Github: https://github.com/slawek87/geolocation-python

License: BSD 3-Clause

Note: Geolocation-Python is used to contact both Google Maps and Mapbox's API.



### Weasy Print
Creator(s): Kozea 

Website: https://weasyprint.org/

Github: https://github.com/Kozea/WeasyPrint

License: BSD 3-Clause

Note: Weasy print is used to render PDF's in NearBeach



### D3.js (Data-Driven Documents)
Creator(s): Mike Bostock, Jason Davies, Jeffrey Heer, Vadim Ogievetsky

Website: https://d3js.org/

Github: https://github.com/d3/d3

License: BSD 3-Clause

Note: D3 is used for producing graphical representatives of data for NearBeach




### Gantt-Chart
Creator(s): Dimitry Kudryavtsev

Github: https://github.com/dk8996/Gantt-Chart

License: Apache-2.0

Note: Gantt-Chart will be used for NearBeach's timeline feature.


### Bootstrap
Creator(s): Mark Otto, Jacob Thornton

Github: https://github.com/twbs/bootstrap

License: MIT

Note: NearBeach's CSS is currently being migrated to Bootstrap. For easy development.



### Feather Icons
Creator(s): Carmelo Pullara, Cole Bemis, Oliver Dumoulin

Github: https://github.com/feathericons/feather

License: MIT

Note: Feather icons are icons being utilised by NearBeach
