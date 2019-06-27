import React from "react"
import { DateTime } from "luxon"

const PostPublishingInformation = props => {
  const {
    publishedDate,
    lastEditedDate,
    lastEditSnippet,
    repositoryURL,
    relativePath,
  } = props

  

  const historyURL = `${repositoryURL}/commits/master/${relativePath}`;

  const publishedDateRendered = DateTime.fromISO(publishedDate).toLocaleString(
    DateTime.DATETIME_MED
  )
  const lastEditedDateRendered = DateTime.fromISO(
    lastEditedDate
  ).toLocaleString(DateTime.DATETIME_MED)

  return (
    <aside
      style={{
        fontSize: "0.8em",
      }}
    >
      <p
        style={{
          marginBottom: 1,
        }}
      >
        This article was first published on {publishedDateRendered}. The last
        edit to this article was on {lastEditedDateRendered} and updated the
        following:
      </p>
      <blockquote
        style={{
          fontSize: "0.9em",
          lineHeight: "1rem",
          margin: 0,
        }}
      >
        {lastEditSnippet}
      </blockquote>
      <p>
        You can see a full history of the changes to this page{" "}
        <a href={historyURL}>here</a>
      </p>
    </aside>
  )
}

export default PostPublishingInformation
