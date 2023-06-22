import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="142" cy="117" r="112" />
    <rect x="195" y="330" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="243" rx="10" ry="10" width="280" height="27" />
    <rect x="0" y="290" rx="10" ry="10" width="280" height="76" />
    <rect x="0" y="386" rx="10" ry="10" width="91" height="27" />
    <rect x="140" y="381" rx="30" ry="30" width="141" height="45" />
  </ContentLoader>
)

export default MyLoader
