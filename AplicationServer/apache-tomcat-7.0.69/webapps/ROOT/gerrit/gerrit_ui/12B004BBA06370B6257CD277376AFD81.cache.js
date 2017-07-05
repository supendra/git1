/*

Copyright (C) 2015 by Marijn Haverbeke <marijnh@gmail.com> and others

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("gas",function(e,l){function p(b){g="@";m.syntax="builtin";a.r0="variable";a.r1="variable";a.r2="variable";a.r3="variable";a.r4="variable";a.r5="variable";a.r6="variable";a.r7="variable";a.r8="variable";a.r9="variable";a.r10="variable";a.r11="variable";a.r12="variable";a.sp="variable-2";a.lr=
"variable-2";a.pc="variable-2";a.r13=a.sp;a.r14=a.lr;a.r15=a.pc;h.push(function(a,b){if("#"===a)return b.eatWhile(/\w/),"number"})}function n(a,f){for(var d=!1,c;null!=(c=a.next());){if("/"===c&&d){f.tokenize=null;break}d="*"===c}return"comment"}var h=[],g="",m={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",
".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",
".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",
".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",
".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},a={},k=(l.architecture||"x86").toLowerCase();"x86"===k?(g="#",a.ax="variable",a.eax="variable-2",a.rax="variable-3",a.bx="variable",a.ebx="variable-2",a.rbx="variable-3",a.cx=
"variable",a.ecx="variable-2",a.rcx="variable-3",a.dx="variable",a.edx="variable-2",a.rdx="variable-3",a.si="variable",a.esi="variable-2",a.rsi="variable-3",a.di="variable",a.edi="variable-2",a.rdi="variable-3",a.sp="variable",a.esp="variable-2",a.rsp="variable-3",a.bp="variable",a.ebp="variable-2",a.rbp="variable-3",a.ip="variable",a.eip="variable-2",a.rip="variable-3",a.cs="keyword",a.ds="keyword",a.ss="keyword",a.es="keyword",a.fs="keyword",a.gs="keyword"):"arm"!==k&&"armv6"!==k||p(l);return{startState:function(){return{tokenize:null}},
token:function(b,f){if(f.tokenize)return f.tokenize(b,f);if(b.eatSpace())return null;var d,c=b.next();if("/"===c&&b.eat("*"))return f.tokenize=n,n(b,f);if(c===g)return b.skipToEnd(),"comment";if('"'===c){a:for(d=!1;null!=(c=b.next());){if('"'===c&&!d)break a;d=!d&&"\\"===c}return"string"}if("."===c)return b.eatWhile(/\w/),d=b.current().toLowerCase(),(d=m[d])||null;if("="===c)return b.eatWhile(/\w/),"tag";if("{"===c||"}"===c)return"braket";if(/\d/.test(c)){if("0"===c&&b.eat("x"))return b.eatWhile(/[0-9a-fA-F]/),
"number";b.eatWhile(/\d/);return"number"}if(/\w/.test(c)){b.eatWhile(/\w/);if(b.eat(":"))return"tag";d=b.current().toLowerCase();return(d=a[d])||null}for(var e=0;e<h.length;e++)if(d=h[e](c,b,f))return d},lineComment:g,blockCommentStart:"/*",blockCommentEnd:"*/"}})});
