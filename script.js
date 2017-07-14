var templateContent = document.querySelector('template').content,
    article = document.querySelector('article').cloneNode(true);
article.querySelectorAll('*[id]').forEach((ele)=>{ele.removeAttribute('id')});
article.attachShadow({  mode: 'closed' }).appendChild(templateContent.cloneNode(true));
document.querySelector('#toc').appendChild(article);
