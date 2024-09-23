This project revolves around building an interactive front-end app using data from an API, which can be accessed at: https://james-lau-nc-news.onrender.com/.
Note: To access the back-end repository, please visit: https://github.com/JamesLau2001/james-lau-nc-news.
The app emulates a news app and allows users to view articles, filter them by topic, and sort them. Furthermore, the user is able to post comments as well as delete them depending on which user they choose.

To fork and clone this repository, fork a copy of the original repository and copy the unique link to your dashboard, and run $git clone <link>.

To run this locally and not through the app, ensure to install all the required packages and dependencies by running $npm i and then running $npm run dev to launch the website, or to access the app: please follow: https://jlauncnews.netlify.app. Note: Node v22.5.1 will be required to run this repository.

Once the app/website is launched, the user will be directed to the home page, where the user will have a view of all the articles within the API. On this homepage, the user is able to choose the user they wish to sign in as and is also able to filter articles by their topics using the given drop-down list. On top of this, the user is then able to use drop-downs to sort by date, comment count, and votes in either descending or ascending order, where the default is all topics sorted by date in descending order.
The user is also able to enter queries directly into the URL "/?topic=query&sort_by=query_count&order=query!"; however, should the page not exist, they will be redirected to the appropriate error message page.

The user is able to view each article by clicking any article within the home page. Doing so will direct them to a page with a view on the individual article, where they are able to like or dislike the article, as well as post comments and delete them.
The user is also able to add to the URL "/articles/:article_id"; however, should the article_id not exist, they will be redirected to the appropriate error message page.

In order to post a comment, the user must press the "post comment" button, to which they will be redirected to a form where they must fill in the text area and also choose a user from the drop-down list. Should the comment fail to post, they will be redirected to the appropriate error message page. Similarly, the user must select a user in order to delete comments posted by them; by pressing the delete button, they will be prompt with another message to ensure they truly want to delete the comment.

Finally, should the user want to return to the homepage at any point, they can press the header "NC News" or press "home" in the navigation bar.

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/).