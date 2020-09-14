
function Translate(){
    let english = ["always","amount","angry","anything","soup","bright","beautiful","brown","business","bus","busy","base"];
    let vietnamese = ["luônluôn","lượng","tứcgiận", "bấtcứthứgì","súp","sáng","xinhdep","nâu","kinhdoanh","xebus","baatjbiu","dựavao"];
    let english_2 = english.toString();
    let input = document.getElementById('input').value;

    for(let i=0;i<english.length;i++){
        debugger
        if(english[i].localeCompare(input)==0){
            document.getElementById('output').innerHTML = vietnamese[i];
            break;
        }else {
            document.getElementById('output').innerHTML = "the word is not found!!!"
        }

    }


}



