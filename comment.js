const comment = {
        nick: 'firstAuthor',
        text: 'firstComment',
        subComment: []
    };

const article = {
        title: 'title',
        describe: 'text',
        comment: []
    };

const articleBase = [];

function addArticleToBase(articleBase, article) {
    return articleBase.push(article);
}

function addNewCommentToArticle(articleBase, comment, articleIndex) {
    return articleBase[articleIndex].comment.push(comment);
}
/*
props:  articleBase - array with articles
        articleIndex - number of article
        commentPath - array with numbers to localizate to which comment add subcomment
        comment - object of comment
*/
function addSubComment(articleBase, articleIndex, commentPath, comment){
    let adres = articleBase[articleIndex].comment[commentPath[0]];
    for(let i = 1; i <commentPath.length; i++){
        adres = adres.subComment[commentPath[i]];
    }
    return adres.subComment.push(comment);
}