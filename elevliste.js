//getting active tab
var activetab = document.querySelector('div[id*="tabs-"]:not(.ui-tabs-hide');
//find all student tablerows
var elevrows =activetab.querySelectorAll('tr[id*="tabs-"]');
//setup output var
var exportList = '';
//loop throug rows
for(var i=0;elevrows.length>i;i++){
    //find rows cells
    let datacells = elevrows[i].cells;
    //extract student name from cells
    let studentName = datacells[1].childNodes[1].title+' '+datacells[2].childNodes[1].title;
    //find out if the student is absent by searching for more than 0 instanses of input tag with the class = ikkegodkendt in the row
    let isAbsent = elevrows[i].querySelectorAll('.ikkegodkendt').length >0;
    //find out if the student is approved absent by searching for more than 0 instanses of input tag with the class = godkendt in the row
    let isAprovedAbsent = elevrows[i].querySelectorAll('.godkendt').length >0;
    //if the student is absent or approved absent, jump out of loop
    if(isAbsent || isAprovedAbsent){
        continue;
    }
    //else add student to studentlist with a newline
    exportList += studentName+'\n'
    //console.log(studentName+' er her ikke '+isAbsent);
    
    };
    //output the list to console
    console.log(exportList);
    //copying text to clipboard
    copyTextToClipboard(exportList);

    function copyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
      
        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'lykkedes' : 'Fejlede';
          alert('Kopieringen af elevliste ' + msg);
        } catch (err) {
          alert('Oops, unable to copy', err);
        }
      
        document.body.removeChild(textArea);
      }
    