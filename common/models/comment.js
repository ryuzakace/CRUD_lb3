'use strict';

module.exports = function(Comment) {

  /**
   * increases likes count
   * @param {object} dataForLike
   * @param {Function(Error)} callback
   */

  Comment.increaselikes = async function(x) {
      const {blog} = Comment.app.models;
      blog.create({
        "title": "strqweweqing",
        "content": "striqweqweng",
        "author": 0,
        "dateAdded": "2019-11-08T19:14:05.130Z",
        "userId": 0
      });
    // TODO
  };


};
