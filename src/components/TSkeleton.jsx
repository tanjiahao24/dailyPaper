import React from "react";
import { Skeleton } from 'antd-mobile';

function TSkeleton() {
  return <div className="t-skeleton-box">
    <Skeleton.Title animated />
    <Skeleton.Paragraph lineCount={5} animated />
  </div>;
};
export default TSkeleton;