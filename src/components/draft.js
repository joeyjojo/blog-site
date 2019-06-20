import React from "react"

const Draft = () => { 

  return (
    <aside style={{
        backgroundColor: `red`,
        textAlign: `center`,
        fontSize: `2em`,
        border: `2px`,        
      }}>
        <strong>DRAFT</strong>
        <p>This article is in draft. You should not take any notice of this article unless you are the author</p>
    </aside>
  )
}

export default Draft