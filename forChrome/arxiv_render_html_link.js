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
      let vanity_url = "https://www.arxiv-vanity.com/papers/" + dropped;

      let span = document.createElement("span");

      let a_arxiv = document.createElement("a");
      a_arxiv.href = arxiv_url;
      a_arxiv.appendChild(document.createTextNode("ar5iv"));

      let a_academus = document.createElement("a");
      a_academus.href = academus_url;
      a_academus.appendChild(document.createTextNode("academus"));

      let a_vanity = document.createElement("a");
      a_vanity.href = vanity_url;
      a_vanity.appendChild(document.createTextNode("vanity"));

      span.appendChild(document.createTextNode('; '))
      span.appendChild(a_arxiv);
      span.appendChild(document.createTextNode('/'))
      span.appendChild(a_academus);
      span.appendChild(document.createTextNode('/'))
      span.appendChild(a_vanity);
      ele.parentNode.appendChild(span);
    }
  });
}
