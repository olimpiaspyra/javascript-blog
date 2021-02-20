{
  'use strict';

  // document.getElementById("test-button").addEventListener("click", function () {
  //   const links = document.querySelectorAll(".titles a");
  //   console.log("links:", links);
  // });

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;
    // console.log('Link was clicked!');
    // console.log('clickedElement (with plus): ' + clickedElement);
    // console.log(event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    clickedElement.classList.add('active');

    // console.log('clickedElement:', clickedElement);

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.posts article.active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */

    const articleSelector = clickedElement.getAttribute('href');
    // console.log('selector:', articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    // console.log('article:', targetArticle);

    /* [DONE] add class 'active' to the correct article */

    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list';
  optArticleAuthorSelector = '.post-author';

  function generateTitleLinks (customSelector = '') { // eslint-disable-line no-inner-declarations
    console.log('custom selector:', customSelector);

    /* [DONE] remove contents of titleList */

    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */

    const articles = document.querySelectorAll(optArticleSelector + customSelector);

    let html = '';

    for (let article of articles) {

      /* [DONE] get the article id */

      const articleId = article.getAttribute('id');
      // console.log('id article: ', articleId);

      /* [DONE] find the title element */

      /* [DONE] get the title from the title element */

      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      // console.log('title article: ', articleTitle);

      /* [DONE] create HTML of the link */

      const linkHTML =
        '<li><a href="#' +
        articleId +
        '"><span>' +
        articleTitle +
        '</span></a></li>';
      // console.log(linkHTML);

      /* [DONE] insert link into titleList */

      html = html + linkHTML;
      // console.log('variables: ', html);
    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');
    // console.log(links);

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }
  }
  generateTitleLinks();

  function generateTags(){ // eslint-disable-line no-inner-declarations

    /* [DONE] find all articles */

    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */

    for (let article of articles) {

      /* [DONE] find tags wrapper */

      const tagsList = article.querySelector(optArticleTagsSelector);

      /* [DONE] make html variable with empty string */

      let html= '';

      /* [DONE] get tags from data-tags attribute */

      const articleTags = article.getAttribute('data-tags');
      console.log('article tags: ', articleTags);

      /* [DONE] split tags into array */

      const articleTagsArray = articleTags.split(' ');
      console.log('article tags array: ', articleTagsArray);

      /* [DONE] START LOOP: for each tag */

      for (let tag of articleTagsArray) {
        console.log('tag: ', tag);

        /* [DONE] generate HTML of the link */

        const linkHTML =
      `<li><a href="#tag-${tag}"><span>${tag}</span></a></li>${' '}`;
        console.log('link tag: ', linkHTML);

        /* [DONE] add generated code to html variable */

        html = html + linkHTML;
        console.log('variables tag: ', html);

      /* [DONE] END LOOP: for each tag */
      }
      /* [DONE] insert HTML of all the links into the tags wrapper */

      tagsList.innerHTML = html;
    }

    /* [DONE] END LOOP: for every article: */
  }

  generateTags();

  function tagClickHandler(event){ // eslint-disable-line no-inner-declarations

    /* [DONE] prevent default action for this event */

    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */

    const clickedElement = this;
    console.log('Tag was clicked!');

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */

    const href = clickedElement.getAttribute('href');
    console.log('href:', href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */

    const tag = href.replace('#tag-', '');

    /* [DONE] find all tag links with class active */

    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log('active tag links:', activeTagLinks);

    /* [DONE] START LOOP: for each active tag link */

    for (let activeTagLink of activeTagLinks) {

      /* [DONE] remove class active */

      activeTagLink.classList.remove('active');

    /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */

    const tagLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */

    for (let tagLink of tagLinks) {

      /* [DONE] add class active */

      tagLink.classList.add('active');

    /* [DONE] END LOOP: for each found tag link */
    }
    /* [DONE] execute function "generateTitleLinks" with article selector as argument */

    generateTitleLinks('[data-tags~="' + '"]');
  }

  function addClickListenersToTags(){ // eslint-disable-line no-inner-declarations

    /* [DONE] find all links to tags */

    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* [DONE] START LOOP: for each link */

    for (let tagLink of tagLinks) {

      /* [DONE] add tagClickHandler as event listener for that link */

      tagLink.addEventListener('click', tagClickHandler);

    /* [DONE] END LOOP: for each link */
    }
  }

  addClickListenersToTags();

  function generateAuthors () {// eslint-disable-line no-inner-declarations

    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      const author = article.querySelector(optArticleAuthorSelector);

      let html= '';

      const articleAuthor = article.getAttribute('data-author');
      console.log('article author:', articleAuthor);

      const linkHTML =
      `<a href="#author-${articleAuthor}">${articleAuthor}</a>`;
      console.log('link author:', linkHTML);

      html = html + linkHTML;
      console.log('variables author:', html);

      articleAuthor.innerHTML = html;
    }
  }
  generateAuthors();

  function authorClickHandler(event) { // eslint-disable-line no-inner-declarations

  }

  function addClickListenerToAuthors () { // eslint-disable-line no-inner-declarations

    const authorLinks = document.querySelectorAll('a[href^="#author-"]');

    for (let authorLink of authorLinks) {

      authorLink.addEventListener('click', authorClickHandler);
    }
  }
  addClickListenerToAuthors();


}
