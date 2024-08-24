import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BlogDetailsContent } from "./constants";

const BlogDetails = () => {

  const username = localStorage.getItem("login");

  const [comment, setComment] = useState("");
  const [submittedComment, setSubmittedComment] = useState("");
  const [like, setLike] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedComment(comment);
    setComment("");
  };

  const handleNoSubmit = () => {
    alert("Please login to make a comment")
  }

  const handleLike = () => {
    setLike(!like);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    setComment(submittedComment);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setSubmittedComment("");
  };

  const { id } = useParams();
  const blogId = parseInt(id);
  const blogContent = BlogDetailsContent.find(
    (blogContent) => blogContent.id === blogId
  );

  return (
    <div className="grid justify-items-start mt-16 mx-32">
      <h2 className="text-3xl font-bold my-16">{blogContent?.heading}</h2>
      <img
        src={blogContent?.imgSrc}
        alt="content-image"
        className="size-full md:size-auto mb-16 mx-auto"
      />
      <div className="mb-16">
        <h4 className="text-2xl pb-4 font-semibold">Introduction</h4>
        <p className="text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed">
          {blogContent?.introductionContent}
        </p>
      </div>
      <div className="mb-16">
        <h4 className="text-2xl pb-4 font-semibold">
          {blogContent?.firstTopic?.heading}
        </h4>
        <ul className="list-disc text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed">
          <li>
            <span className="font-semibold">
              {blogContent?.firstTopic?.subHeading1}
            </span>
            {blogContent?.firstTopic?.subHeading1Content}
          </li>
          <li>
            <span className="font-semibold">
              {blogContent?.firstTopic?.subHeading2}
            </span>
            {blogContent?.firstTopic?.subHeading2Content}
          </li>
          <li>
            <span className="font-semibold">
              {blogContent?.firstTopic?.subHeading3}
            </span>
            {blogContent?.firstTopic?.subHeading3Content}
          </li>
          {blogContent.firstTopic.subHeading4 ? (
            <li>
              <span className="font-semibold">
                {blogContent?.firstTopic?.subHeading4}
              </span>
              {blogContent?.firstTopic?.subHeading4Content}
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="mb-16">
        <h4 className="text-2xl pb-4 font-semibold">
          {blogContent?.secondTopic?.heading}
        </h4>
        <ul className="list-decimal text-lg tracking-wide font-light dark:text-gray-400 leading-relaxed">
          <li>
            <span className="font-semibold">
              {blogContent?.secondTopic?.subHeading1}
            </span>
            {blogContent?.secondTopic?.subHeading1Content}
          </li>
          <li>
            <span className="font-semibold">
              {blogContent?.secondTopic?.subHeading2}
            </span>
            {blogContent?.secondTopic?.subHeading2Content}
          </li>
          <li>
            <span className="font-semibold">
              {blogContent?.secondTopic?.subHeading3}
            </span>
            {blogContent?.secondTopic?.subHeading3Content}
          </li>
          {blogContent.secondTopic.subHeading4 ? (
            <li>
              <span className="font-semibold">
                {blogContent?.secondTopic?.subHeading4}
              </span>
              {blogContent?.secondTopic?.subHeading4Content}
            </li>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="mb-16">
        <h4 className="text-2xl pb-4 font-semibold">Conclusion</h4>
        <p className="font-light text-lg dark:text-gray-400 leading-relaxed">
          {blogContent?.conclusionContent}
        </p>
      </div>
      <div className="h-48 w-2/3 border-2 border-fuchsia-400 rounded-md mx-auto text-black mb-16">
        <div>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="m-4 h-20 w-5/6 rounded-md pl-2 pt-2 border-2 border-gray-400 bg-gray-100"
          ></textarea>
        </div>
        <div className="flex justify-between m-4">
          <div className="text-sm font-normal text-gray-400">
            {200 - comment.length} characters remaining
          </div>
          <div className="">
           { username ?  <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-200 mr-4"
              onClick={handleSubmit}
            >
              <span className="relative px-4 py-1.5 text-sm transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button> :  <button
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-500 group-hover:from-purple-400 group-hover:to-fuchsia-600 hover:text-white focus:ring-2 focus:outline-none focus:ring-purple-200 mr-4 cursor-not-allowed"
              onClick={handleNoSubmit}
            >
              <span className="relative px-4 py-1.5 text-sm transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                Submit
              </span>
            </button>}
          </div>
        </div>
        <div className="mt-16">
          {submittedComment ? (
            <div className="">
              <h4 className="text-base font-semibold mb-2 dark:text-gray-400">
                {username} :
              </h4>
              <p className="text-base mb-2 dark:text-white">
                {submittedComment}
              </p>
              <div onClick={handleLike}>
                {like ? (
                  <>
                    <i className="fa-solid fa-thumbs-up text-gray-500 dark:text-white cursor-pointer hover:text-blue-500"></i>{" "}
                    <span className="dark:text-white text-sm"> 1 Like</span>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-thumbs-up text-gray-500 dark:text-white mb-2 cursor-pointer hover:text-blue-500"></i>
                  </>
                )}
                <span
                  className="text-sm pl-4 cursor-pointer dark:text-white hover:text-blue-500"
                  onClick={handleEdit}
                >
                  Edit
                </span>
                <span
                  className="text-sm pl-4 cursor-pointer dark:text-white hover:text-red-500"
                  onClick={handleDelete}
                >
                  Delete
                </span>
              </div>
              <hr />
            </div>
          ) : (
            <p>No comments yet !</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
