$(document).ready(function(){

  var selected_lang = "javascript";
  LANGUAGE_MODE_MAP = {
    "clang" : {name: "clike", mime: "text/x-csrc"},
    "cplus": {name: "clike", mime: "text/x-c++src"},
    "csharp": {name: "clike", mime: "text/x-csharp"},
    "clojure": "clojure",
    "haskell": "haskell",
    "java": {name: "clike", mime: "text/x-java"},
    "javascript": "javascript",
    "perl": "perl",
    "php" : "php",
    "python": "python",
    "ruby": "ruby"
  }

  var default_statment = "Enter Your Code Here";
  var editor = CodeMirror.fromTextArea(document.getElementById("codetext"), {
    lineNumbers: true,
    mode: LANGUAGE_MODE_MAP[selected_lang],
    matchBrackets: true,
  });

  $("#language-selector a").click(function() {
    $(".selected-lang").removeClass("selected-lang");
    selected_lang  = $(this).attr("href").substr(1);
    $(this).addClass("selected-lang");
    editor.setOption("mode", LANGUAGE_MODE_MAP[selected_lang])
  });

  /*$("#compilebtn").click(function(){
    var code = editor.getContent();
    $.ajax({
      type: "POST",
      url: "/run"
      data: {"lang": selected_lang, "code": code},
      dataType: "json",
      error: function(jqXHR, textStatus, errorThrown){
        alert("Error: " + errorThrown + ". Please Try gain");
      },
      success: function(data){
	console.log(data.output);
	$("#outputarea").text(data.output);
      }
    });
  });*/
});