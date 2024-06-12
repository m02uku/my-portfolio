import ContentBlock from "@/components/ContentBlock";
import LinkList from "@/components/LinkList";
import { achievements } from "@/db/achievements";
import { papers } from "@/db/papers";
import { sourceCodes } from "@/db/sourceCodes";
import { websites } from "@/db/websites";
import React from "react";

const HomePage: React.FC = () => (
  <>
    <ContentBlock title="業績">
      <LinkList items={achievements} />
    </ContentBlock>

    <ContentBlock title="ソースコード">
      <LinkList items={sourceCodes} />
    </ContentBlock>

    <ContentBlock title="論文">
      <LinkList items={papers} />
    </ContentBlock>

    <ContentBlock title="作成したサイト">
      <LinkList items={websites} />
    </ContentBlock>
  </>
);

export default HomePage;
