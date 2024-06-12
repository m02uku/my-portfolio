import React from "react";

// データをts形式で管理
const achievements = [
  { title: "論文1", link: "論文1のリンク" },
  // 他の論文を追加
];

const sourceCodes = [
  { title: "GitHub", link: "https://github.com/m02uku" },
  // 他のプログラムを追加
];

const papers = [
  { title: "論文1", link: "論文1のリンク" },
  // 他の論文を追加
];

const websites = [
  { title: "サイト1", link: "サイト1のリンク" },
  // 他のサイトを追加
];

const HomePage: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="flex flex-col items-center w-full p-8 text-left">
      <div className="w-full max-w-3xl rounded-xl shadow-lg p-6 text-black">
        <h2 className="text-2xl font-bold">業績</h2>
        {achievements.map((achievement) => (
          <a
            href={achievement.link}
            key={achievement.title}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {achievement.title}
          </a>
        ))}
      </div>

      <div className="w-full max-w-3xl rounded-xl shadow-lg p-6 text-black mt-6">
        <h2 className="text-2xl font-bold">ソースコード</h2>
        {sourceCodes.map((sourceCode) => (
          <a
            href={sourceCode.link}
            key={sourceCode.title}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {sourceCode.title}
          </a>
        ))}
      </div>

      <div className="w-full max-w-3xl rounded-xl shadow-lg p-6 text-black mt-6">
        <h2 className="text-2xl font-bold">論文</h2>
        {papers.map((paper) => (
          <a href={paper.link} key={paper.title} className="text-blue-600 underline hover:text-blue-800">
            {paper.title}
          </a>
        ))}
      </div>

      <div className="w-full max-w-3xl rounded-xl shadow-lg p-6 text-black mt-6">
        <h2 className="text-2xl font-bold">作成したサイト</h2>
        {websites.map((website) => (
          <a
            href={website.link}
            key={website.title}
            className="text-blue-600 underline hover:text-blue-800"
          >
            {website.title}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default HomePage;
