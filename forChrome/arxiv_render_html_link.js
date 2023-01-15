// isPrefixOf :: String -> String -> Bool
function isPrefixOf(pattern, string) {
  if (string.indexOf(pattern) === 0) {
    return true;
  } else {
    return false;
  }
}

let currUrl = location.href;
let isArxiv = isPrefixOf("https://arxiv.org", currUrl);
if (isArxiv) {
  let aTagsPrim = Array.from(document.getElementsByTagName("a"));
  aTagsPrim.map((ele) => {
    let linkTo = ele.href;
    let formatPrefix = "https://arxiv.org/format/";
    if (isPrefixOf(formatPrefix, linkTo)) {
      let dropped = linkTo.slice(formatPrefix.length);
      let arxiv_url = "https://ar5iv.org/abs/" + dropped;
      let academus_url = "https://academ.us/article/" + dropped;

      let span = document.createElement("span");

      let a_arxiv = document.createElement("a");
      a_arxiv.href = arxiv_url;
      a_arxiv.appendChild(document.createTextNode("ar5iv"));

      let a_academus = document.createElement("a");
      a_academus.href = academus_url;
      a_academus.appendChild(document.createTextNode("academus"));

      span.appendChild(document.createTextNode('; '))
      span.appendChild(a_arxiv);
      span.appendChild(document.createTextNode('/'))
      span.appendChild(a_academus);
      ele.parentNode.appendChild(span);
    }
  });
}
